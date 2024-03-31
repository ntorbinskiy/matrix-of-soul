import { TextField } from "@mui/material";
import { FC } from "react";
import InputMask from "react-input-mask";

interface InputNameFieldProps {
  value: string;
  onChangeValue: (value: string) => void;
}

export const InputNameField: FC<InputNameFieldProps> = (props) => (
  <TextField
    label="Nome"
    placeholder="Inserisci il tuo nome"
    value={props.value}
    required
    onChange={(event) => props.onChangeValue(event.target.value)}
    autoComplete="name"
  />
);

interface InputDateFieldProps {
  value: string;
  onChangeValue: (value: string) => void;
}

export const InputDateField: FC<InputDateFieldProps> = (props) => {
  return (
    <InputMask
      mask="99/99/9999"
      placeholder="Inserisci la tua data di nascita"
      value={props.value}
      onChange={(event) => props.onChangeValue(event.target.value)}
      required
      autoComplete="bday"
    >
      <TextField label={"data di nascita"} sx={{ minWidth: "169px" }} />
    </InputMask>
  );
};
