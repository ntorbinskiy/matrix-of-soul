import { TextField } from "@mui/material";
import { FC } from "react";

interface InputFieldProps {
  value: string;
  onChangeValue: (value: string) => void;
}

export const InputNameField: FC<InputFieldProps> = (props) => {
  return (
    <TextField
      label="Nome"
      placeholder="Inserisci il tuo nome"
      value={props.value}
      required
      onChange={(event) => props.onChangeValue(event.target.value)}
      autoComplete="name"
    />
  );
};
