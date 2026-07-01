import type { FilterFieldConfig } from "../types/filter";

export const filterConfig: FilterFieldConfig[] = [
  {
    key: "name",
    label: "Name",
    type: "text",
  },

  {
    key: "department",
    label: "Department",
    type: "select",
    options: [
      "Engineering",
      "HR",
      "Finance",
      "Marketing",
      "Sales",
    ],
  },

  {
    key: "role",
    label: "Role",
    type: "select",
    options: [
      "Developer",
      "Senior Developer",
      "QA Engineer",
      "Manager",
      "Designer",
    ],
  },

  {
    key: "salary",
    label: "Salary",
    type: "currency",
  },

  {
    key: "joinDate",
    label: "Join Date",
    type: "date",
  },

  {
    key: "isActive",
    label: "Active",
    type: "boolean",
  },

  {
    key: "skills",
    label: "Skills",
    type: "multiselect",
    options: [
      "React",
      "TypeScript",
      "Node.js",
      "Java",
      "Spring Boot",
      "GraphQL",
      "Docker",
      "AWS",
    ],
  },

  {
    key: "address.city",
    label: "City",
    type: "text",
  },

  {
    key: "performanceRating",
    label: "Performance Rating",
    type: "number",
  },
];