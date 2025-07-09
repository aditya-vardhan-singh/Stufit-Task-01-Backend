import { Request, Response } from "express";

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

export const getFilteredDashboardData = async (req: Request, res: Response) => {
  const { session, year, school, startDate, endDate } = req.query;

  // Step 1: Fetch filtered examinations
  const filteredExaminations = await prisma.examination.findMany({
    where: {
      ...(session && { sessionId: String(session) }),
      ...(school && {
        student: {
          schoolId: String(school),
        },
      }),
      ...(year && {
        session: {
          year: Number(year),
        },
      }),
      ...(startDate && endDate && {
        date: {
          gte: new Date(String(startDate)),
          lte: new Date(String(endDate)),
        },
      }),
    },
    select: {
      id: true,
      diagnoses: {
        select: {
          id: true,
          disease: {
            select: {
              id: true,
              name: true,
              diagnosisCategory: {
                select: {
                  id: true,
                  name: true,
                },
              },
            },
          },
        },
      },
    },
  });

  // Step 2: Aggregate counts by category and disease
  const categoryMap: Record<
    string,
    {
      name: string;
      count: number;
      diseases: Record<string, { name: string; count: number }>;
    }
  > = {};

  for (const exam of filteredExaminations) {
    for (const diagnosis of exam.diagnoses) {
      const disease = diagnosis.disease;
      const categoryId = disease.diagnosisCategory.id;
      const categoryName = disease.diagnosisCategory.name;

      if (!categoryMap[categoryId]) {
        categoryMap[categoryId] = {
          name: categoryName,
          count: 0,
          diseases: {},
        };
      }

      categoryMap[categoryId].count += 1;

      if (!categoryMap[categoryId].diseases[disease.id]) {
        categoryMap[categoryId].diseases[disease.id] = {
          name: disease.name,
          count: 0,
        };
      }

      categoryMap[categoryId].diseases[disease.id].count += 1;
    }
  }

  const categories = Object.values(categoryMap).map((cat) => ({
    name: cat.name,
    count: cat.count,
    diseases: Object.values(cat.diseases),
  }));

  // Step 3: Also return all schools, sessions, and years to repopulate filters
  const schools = await prisma.school.findMany({
    select: { id: true, name: true },
  });

  const sessions = await prisma.examinationSession.findMany({
    select: { id: true, sessionName: true },
  });

  const yearsRaw = await prisma.examinationSession.findMany({
    distinct: ["year"],
    select: { year: true },
    orderBy: { year: "asc" },
  });

  const years = yearsRaw.map((y) => y.year);

  res.status(200).json({
    categories,
    schools,
    sessions,
    years,
  });
};
