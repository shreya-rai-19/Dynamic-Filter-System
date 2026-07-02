import {
  Grid,
  IconButton,
} from "@mui/material";

import { Trash2 } from "lucide-react";

import FieldSelect from "./FieldSelect";
import OperatorSelect from "./OperatorSelect";
import ValueInput from "./ValueInput";
import type { FilterRowData } from "../../types/filter";

interface Props {
  filter: FilterRowData;
  onChange: (filter: FilterRowData) => void;
  onDelete: () => void;
}

function FilterRow({
  filter,
  onChange,
  onDelete,
}: Props) {
  return (
    <Grid
      container
      spacing={2}
      alignItems="center"
      sx={{ mb: 2 }}
    >
      <Grid size={3}>
        <FieldSelect
          value={filter.field}
          onChange={(field) =>
            onChange({
              ...filter,
              field,
              operator: "",
              value: "",
            })
          }
        />
      </Grid>

      <Grid size={3}>
        <OperatorSelect
          field={filter.field}
          value={filter.operator}
          onChange={(operator) =>
            onChange({
              ...filter,
              operator,
            })
          }
        />
      </Grid>

      <Grid size={5}>
        <ValueInput
          value={filter.value}
          onChange={(value) =>
            onChange({
              ...filter,
              value,
            })
          }
        />
      </Grid>

      <Grid size={1}>
        <IconButton
          color="error"
          onClick={onDelete}
        >
          <Trash2 size={18} />
        </IconButton>
      </Grid>
    </Grid>
  );
}

export default FilterRow;