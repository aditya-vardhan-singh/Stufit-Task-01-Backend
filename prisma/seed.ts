import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const schoolNames = [
  "Green Valley School", "Sunrise Public School", "Blue Ridge Academy", "Riverdale High",
  "Maple Leaf School", "Hilltop International", "Oakwood School", "Silver Oak Academy",
  "Crescent Public School", "Starlight School"
];

const addresses = [
  "123 Hill Rd, Dehradun", "45 Maple St, Delhi", "78 River Rd, Mumbai", "12 Oak Ave, Pune",
  "56 Pine St, Bangalore", "34 Cedar Rd, Hyderabad", "90 Willow Ln, Chennai", "23 Birch St, Kolkata",
  "67 Spruce Ave, Jaipur", "89 Elm St, Lucknow"
];

const studentNames = [
  "Aarav Mehta", "Ishita Sharma", "Rohan Kapoor", "Priya Singh", "Kabir Verma", "Ananya Joshi", "Devansh Patel", "Meera Nair",
  "Yash Agarwal", "Saanvi Rao", "Arjun Desai", "Diya Shah", "Vivaan Gupta", "Aanya Reddy", "Aditya Jain", "Kiara Malhotra",
  "Parth Choudhary", "Riya Sethi", "Aryan Bansal", "Tara Menon", "Siddharth Pillai", "Navya Iyer", "Krishna Dubey", "Aditi Ghosh",
  "Samarth Saxena", "Mira Bhatt", "Hrithik Shetty", "Tanvi Kulkarni", "Rudra Shukla", "Simran Kaur", "Lakshya Yadav", "Avni Mishra",
  "Dhruv Tiwari", "Jiya Chopra", "Veer Sinha", "Suhana Das", "Arnav Goel", "Nisha Dutta", "Kabir Anand", "Ira Sengupta",
  "Reyansh Joshi", "Sia Bhatia", "Ayaan Chauhan", "Myra Kaul", "Ishaan Rawat", "Aarohi Pathak", "Vivaan Suri", "Anvi Lamba",
  "Aarush Vora", "Shanaya Mehta"
];

const categories = [
  { name: "Vision", diseases: ["Myopia", "Hyperopia", "Astigmatism", "Strabismus", "Amblyopia"] },
  { name: "Dental", diseases: ["Cavities", "Gum Inflammation", "Tooth Sensitivity", "Bruxism", "Misaligned Teeth"] },
  { name: "Nutritional", diseases: ["Iron Deficiency", "Obesity", "Eating Disorders", "Allergies and Intolerances", "Vitamin Deficiencies"] },
  { name: "Psychological", diseases: ["Anxiety and Stress", "Depression", "Behavioral Issues", "Social Isolation", "Bullying"] },
  { name: "Audio", diseases: ["Otitis Media", "Noise-Induced Hearing Loss", "Congenital and Genetic Hearing Loss", "Earwax Buildup"] }
];

const sessions = [
  { year: 2025, sessionName: "Winter", startDate: new Date("2025-01-01"), endDate: new Date("2025-02-28") },
  { year: 2025, sessionName: "Monsoon", startDate: new Date("2025-07-01"), endDate: new Date("2025-08-31") },
  { year: 2025, sessionName: "Summer", startDate: new Date("2025-04-01"), endDate: new Date("2025-05-31") }
];

function randomDate(start: Date, end: Date) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

function randomFromArray<T>(arr: T[]) {
  return arr[Math.floor(Math.random() * arr.length)];
}

async function main() {
  // 1. Create Schools
  const schools = await Promise.all(
    schoolNames.map((name, i) =>
      prisma.school.create({
        data: { name, address: addresses[i] }
      })
    )
  );

  // 2. Create Students
  const students = await Promise.all(
    studentNames.map((name, i) =>
      prisma.student.create({
        data: {
          name,
          gender: i % 2 === 0 ? "Male" : "Female",
          dob: new Date(2011 + (i % 3), (i % 12), 10 + (i % 15)),
          schoolId: schools[i % schools.length].id
        }
      })
    )
  );

  // 3. Create Diagnosis Categories and Diseases
  for (const cat of categories) {
    await prisma.diagnosisCategory.create({
      data: {
        name: cat.name,
        diseases: {
          create: cat.diseases.map(disease => ({ name: disease }))
        }
      }
    });
  }

  // 4. Create Examination Sessions
  const examSessions = await Promise.all(
    sessions.map(s =>
      prisma.examinationSession.create({ data: s })
    )
  );

  // 5. Get all diseases for diagnosis linking
  const allDiseases = await prisma.disease.findMany();

  // 6. Create Examinations and Diagnoses for each student
  for (const student of students) {
    // Each student gets 2-3 examinations in random sessions
    const examsPerStudent = Math.floor(Math.random() * 2) + 2;
    for (let e = 0; e < examsPerStudent; e++) {
      const session = randomFromArray(examSessions);
      const exam = await prisma.examination.create({
        data: {
          date: randomDate(session.startDate, session.endDate),
          studentId: student.id,
          sessionId: session.id,
        }
      });

      // Each exam gets 1-3 diagnoses
      const diagnosesCount = Math.floor(Math.random() * 3) + 1;
      const usedDiseaseIds = new Set<string>();
      for (let d = 0; d < diagnosesCount; d++) {
        // Pick a random disease not already used in this exam
        let disease;
        do {
          disease = randomFromArray(allDiseases);
        } while (usedDiseaseIds.has(disease.id));
        usedDiseaseIds.add(disease.id);

        await prisma.diagnosis.create({
          data: {
            examinationId: exam.id,
            diseaseId: disease.id,
            severity: randomFromArray(["mild", "moderate", "severe"]),
            notes: Math.random() > 0.7 ? "Follow-up required" : undefined
          }
        });
      }
    }
  }

  console.log("✅ Seed completed");
}

main()
  .catch(e => {
    console.error(e);
  })
  .finally(() => prisma.$disconnect());

