import { useEffect, useState } from "react";

import {
  Box,
  CircularProgress,
  Paper,
  Typography,
} from "@mui/material";

import EmployeeTable from "../components/Table/EmployeeTable";
import employeeService from "../services/employeeService";

import type { Employee } from "../types/employee";
import FilterBuilder from "../components/DynamicFilter/FilterBuilder";
import type { FilterRowData } from "../types/filter";
import { filterEmployees } from "../utils/filterEngine";

function Dashboard() {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState<FilterRowData[]>([]);
  const filteredEmployees = filterEmployees(employees, filters);

  useEffect(() => {
    const loadEmployees = async () => {
      try {
        const data = await employeeService.getEmployees();
        setEmployees(data);
      } finally {
        setLoading(false);
      }
    };

    loadEmployees();
  }, []);

  return (
    <Box sx={{ p: 4 }}>
      <Typography
        variant="h4"
        fontWeight="bold"
        gutterBottom
      >
        Employee Management
      </Typography>

      <Typography
        color="text.secondary"
        sx={{ mb: 3 }}
      >
        Manage employees using reusable dynamic filters.
      </Typography>

      <Paper
        elevation={3}
        sx={{
          p: 2,
          mb: 3,
        }}
      >
        <Typography variant="h6">
          Total Employees: {filteredEmployees.length} / {employees.length}
        </Typography>
      </Paper>

      {loading ? (
        <Box
          display="flex"
          justifyContent="center"
          mt={8}
        >
          <CircularProgress />
        </Box>
      ) : (<>
        <FilterBuilder onFiltersChange={setFilters} />
        <EmployeeTable
          employees={filteredEmployees}
          loading={loading}
        />
        </>
      )}
    </Box>
  );
}

export default Dashboard;