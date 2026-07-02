import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";

import { filterConfig } from "../../config/filterConfig";

interface FieldSelectProps {
  value: string;
  onChange: (value: string) => void;
}

function FieldSelect({
  value,
  onChange,
}: FieldSelectProps) {
  return (
    <FormControl fullWidth>
      <InputLabel>Field</InputLabel>

      <Select
        value={value}
        label="Field"
        onChange={(e) => onChange(e.target.value)}
      >
        {filterConfig.map((field) => (
          <MenuItem
            key={field.key}
            value={field.key}
          >
            {field.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default FieldSelect;