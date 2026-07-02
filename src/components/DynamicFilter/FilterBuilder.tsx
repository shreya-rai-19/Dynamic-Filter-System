import { useEffect, useState } from "react";

import {
  Box,
  Button,
  Paper,
  Typography,
} from "@mui/material";

import { Plus } from "lucide-react";

import FilterRow from "./FilterRow";

import type { FilterRowData } from "../../types/filter";

interface FilterBuilderProps {
  onFiltersChange: (filters: FilterRowData[]) => void;
}

const createFilter = (): FilterRowData => ({
  id: crypto.randomUUID(),
  field: "",
  operator: "",
  value: "",
});

function FilterBuilder({
  onFiltersChange,
}: FilterBuilderProps) {
  const [filters, setFilters] = useState<FilterRowData[]>([
    createFilter(),
  ]);

  useEffect(() => {
    onFiltersChange(filters);
  }, [filters, onFiltersChange]);

  const updateFilter = (updatedFilter: FilterRowData) => {
    setFilters((previousFilters) =>
      previousFilters.map((filter) =>
        filter.id === updatedFilter.id
          ? updatedFilter
          : filter
      )
    );
  };

  const addFilter = () => {
    setFilters((previousFilters) => [
      ...previousFilters,
      createFilter(),
    ]);
  };

  const deleteFilter = (id: string) => {
    setFilters((previousFilters) =>
      previousFilters.filter(
        (filter) => filter.id !== id
      )
    );
  };

  return (
    <Paper
      elevation={3}
      sx={{
        p: 3,
        mb: 3,
      }}
    >
      <Typography
        variant="h6"
        gutterBottom
      >
        Filters
      </Typography>

      {filters.map((filter) => (
        <FilterRow
          key={filter.id}
          filter={filter}
          onChange={updateFilter}
          onDelete={() => deleteFilter(filter.id)}
        />
      ))}

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          mt: 2,
        }}
      >
        <Button
          variant="contained"
          startIcon={<Plus size={18} />}
          onClick={addFilter}
        >
          Add Filter
        </Button>

        <Button variant="outlined">
          Apply Filters
        </Button>
      </Box>
    </Paper>
  );
}

export default FilterBuilder;