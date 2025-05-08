import { Controller } from "react-hook-form";
import { TextField } from "@mui/material";

const FormInput = ({ name, control, label, type = "text", rules }) => (
  <Controller
    name={name}
    control={control}
    rules={rules}
    render={({ field, fieldState: { error } }) => (
      <TextField
        {...field}
        label={label}
        type={type}
        variant="outlined"
        error={!!error}
        helperText={error ? error.message : ""}
        className="mb-4"
      />
    )}
  />
);

export default FormInput;