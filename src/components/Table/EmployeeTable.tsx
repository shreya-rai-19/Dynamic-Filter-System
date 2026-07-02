import { DataGrid, type GridColDef } from "@mui/x-data-grid";
import { Box, Chip } from "@mui/material";
import type { Employee } from "../../types/employee";

interface EmployeeTableProps {
  employees: Employee[];
  loading: boolean;
}

const columns: GridColDef<Employee>[] = [
  {
    field: "id",
    headerName: "ID",
    width: 80,
  },
  {
    field: "name",
    headerName: "Name",
    flex: 1.2,
  },
  {
    field: "department",
    headerName: "Department",
    flex: 1,
  },
  {
    field: "role",
    headerName: "Role",
    flex: 1,
  },
  {
    field: "salary",
    headerName: "Salary",
    flex: 1,
    valueFormatter: (value) =>
      `$${Number(value).toLocaleString()}`,
  },
  {
    field: "joinDate",
    headerName: "Join Date",
    flex: 1,
  },
  {
    field: "isActive",
    headerName: "Status",
    flex: 1,
    renderCell: (params) => (
      <Chip
        label={params.value ? "Active" : "Inactive"}
        color={params.value ? "success" : "default"}
        size="small"
      />
    ),
  },
  {
    field: "performanceRating",
    headerName: "Rating",
    flex: 0.8,
  },
];

function EmployeeTable({
  employees,
  loading,
}: EmployeeTableProps) {
  return (
    <Box sx={{ height: 600, width: "100%" }}>
      <DataGrid
        rows={employees}
        columns={columns}
        loading={loading}
        pageSizeOptions={[5, 10, 20]}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
              page: 0,
            },
          },
        }}
        disableRowSelectionOnClick
      />
    </Box>
  );
}

export default EmployeeTable;