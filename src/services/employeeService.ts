import { employees } from "../data/employees";
import type { Employee } from "../types/employee";

class EmployeeService {
  async getEmployees(): Promise<Employee[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(employees);
      }, 300);
    });
  }
}

export default new EmployeeService();