import { Request, Response } from "express";

export const getDashboard = async (
  req: Request,
  res: Response
): Promise<void> => {
  res.status(200).json({ message: "Welcome to user dashboard" });
};

export const getDashboardData = async (req: Request, res: Response) => {
  const categories_raw = await prisma.diagnosisCategory.findMany({
    select: {
      name: true,
      diseases: {
        select: {
          name: true,
          _count: true,
        },
      },
      _count: true,
    },
  });

  // Map to add count property for each disease
  categories_raw.forEach((cat: any) => {
    cat.diseases = cat.diseases.map((disease: any) => ({
      name: disease.name,
      count: disease._count.diagnoses,
    }));
  });

  // Fetch schools
  const schools = await prisma.school.findMany({
    select: { id: true, name: true },
  });

  // Fetch sessions
  const sessions = await prisma.examinationSession.findMany({
    select: { id: true, sessionName: true },
  });

  // Fetch years (distinct years from diagnoses or a Year model if exists)
  // If you have a Year model:
  // const years = await prisma.year.findMany({ select: { value: true } });
  // If not, get distinct years from diagnoses:
  const yearsRaw = await prisma.examinationSession.findMany({
    distinct: ["year"],
    select: { year: true },
    orderBy: { year: "asc" },
  });
  const years = yearsRaw.map((y) => y.year);

  const categories = categories_raw.map((cat: any) => ({
    name: cat.name,
    count: cat._count.diseases,
    diseases: cat.diseases,
  }));

  res.status(200).json({
    categories,
    schools,
    sessions,
    years,
  });
};
