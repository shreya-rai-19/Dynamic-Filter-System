import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";

import { filterConfig } from "../../config/filterConfig";
import { operatorMap } from "../../utils/operators";

interface Props {
  field: string;
  value: string;
  onChange: (value: string) => void;
}

function OperatorSelect({
  field,
  value,
  onChange,
}: Props) {
  const selectedField = filterConfig.find(
    (item) => item.key === field
  );

  const operators = selectedField
    ? operatorMap[selectedField.type]
    : [];

  return (
    <FormControl fullWidth>
      <InputLabel>Operator</InputLabel>

      <Select
        value={value}
        label="Operator"
        onChange={(e) => onChange(e.target.value)}
      >
        {operators.map((operator) => (
          <MenuItem
            key={operator}
            value={operator}
          >
            {operator}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default OperatorSelect;