import type { Employee } from "../types/employee";
import type { FilterRowData } from "../types/filter";

function getNestedValue(obj: unknown, path: string): unknown {
  return path.split(".").reduce((current, key) => {
    if (current && typeof current === "object") {
      return (current as Record<string, unknown>)[key];
    }
    return undefined;
  }, obj);
}

export function filterEmployees(
  employees: Employee[],
  filters: FilterRowData[]
): Employee[] {
  const validFilters = filters.filter(
    (filter) =>
      filter.field &&
      filter.operator &&
      filter.value !== "" &&
      filter.value !== null &&
      filter.value !== undefined
  );

  if (validFilters.length === 0) {
    return employees;
  }

  return employees.filter((employee) => {
    return validFilters.every((filter) => {
      const employeeValue = getNestedValue(employee, filter.field);
      const filterValue = filter.value;

      switch (filter.operator) {
        case "equals":
        case "is":
          return String(employeeValue).toLowerCase() ===
            String(filterValue).toLowerCase();

        case "contains":
          return String(employeeValue)
            .toLowerCase()
            .includes(String(filterValue).toLowerCase());

        case "startsWith":
          return String(employeeValue)
            .toLowerCase()
            .startsWith(String(filterValue).toLowerCase());

        case "endsWith":
          return String(employeeValue)
            .toLowerCase()
            .endsWith(String(filterValue).toLowerCase());

        case "doesNotContain":
          return !String(employeeValue)
            .toLowerCase()
            .includes(String(filterValue).toLowerCase());

        case "greaterThan":
          return Number(employeeValue) > Number(filterValue);

        case "lessThan":
          return Number(employeeValue) < Number(filterValue);

        case "greaterThanOrEqual":
          return Number(employeeValue) >= Number(filterValue);

        case "lessThanOrEqual":
          return Number(employeeValue) <= Number(filterValue);

        default:
          return true;
      }
    });
  });
}