import type { Employee } from "../types/employee";

const names = [
  "John Smith",
  "Alice Johnson",
  "Robert Brown",
  "Emma Wilson",
  "Michael Davis",
  "Sophia Miller",
  "William Moore",
  "Olivia Taylor",
  "James Anderson",
  "Charlotte Thomas",
];

const departments = [
  "Engineering",
  "Finance",
  "HR",
  "Marketing",
  "Sales",
];

const roles = [
  "Developer",
  "Senior Developer",
  "QA Engineer",
  "Manager",
  "Designer",
];

const cities = [
  "New York",
  "Chicago",
  "San Francisco",
  "Seattle",
  "Austin",
];

const states = [
  "NY",
  "IL",
  "CA",
  "WA",
  "TX",
];

const skillsPool = [
  "React",
  "TypeScript",
  "Java",
  "Spring Boot",
  "Node.js",
  "GraphQL",
  "Docker",
  "AWS",
];

function getRandomItem<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}

function getRandomSkills() {
  return [...skillsPool]
    .sort(() => 0.5 - Math.random())
    .slice(0, Math.floor(Math.random() * 4) + 2);
}

export const employees: Employee[] = Array.from({ length: 50 }, (_, index) => ({
  id: index + 1,

  name: getRandomItem(names),

  email: `employee${index + 1}@company.com`,

  department: getRandomItem(departments),

  role: getRandomItem(roles),

  salary: Math.floor(Math.random() * 90000) + 40000,

  joinDate: new Date(
    2019 + Math.floor(Math.random() * 6),
    Math.floor(Math.random() * 12),
    Math.floor(Math.random() * 28) + 1
  )
    .toISOString()
    .split("T")[0],

  isActive: Math.random() > 0.3,

  skills: getRandomSkills(),

  address: {
    city: getRandomItem(cities),
    state: getRandomItem(states),
    country: "USA",
  },

  projects: Math.floor(Math.random() * 10) + 1,

  lastReview: new Date(
    2024,
    Math.floor(Math.random() * 12),
    Math.floor(Math.random() * 28) + 1
  )
    .toISOString()
    .split("T")[0],

  performanceRating: Number((Math.random() * 2 + 3).toFixed(1)),
}));