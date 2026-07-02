import { TextField } from "@mui/material";

interface Props {
  value: unknown;
  onChange: (value: unknown) => void;
}

function ValueInput({
  value,
  onChange,
}: Props) {
  return (
    <TextField
      fullWidth
      label="Value"
      value={String(value ?? "")}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

export default ValueInput;