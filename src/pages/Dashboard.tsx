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

function Dashboard() {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [loading, setLoading] = useState(true);

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
          Total Employees: {employees.length}
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
      ) : (
        <EmployeeTable
          employees={employees}
          loading={loading}
        />
      )}
    </Box>
  );
}

export default Dashboard;