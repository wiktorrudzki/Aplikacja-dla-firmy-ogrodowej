import { InputRootProps } from "@src/types/form";
import React from "react";
import { t } from "@src/utils/i18n";
import TextInput from "./TextInput";

type Props = InputRootProps & {
  placeholder?: string;
  name: string;
};

const EmailInput = ({ name, required, placeholder, label }: Props) => (
  <TextInput
    required={required}
    label={label}
    type="email"
    name={name}
    placeholder={placeholder}
    onInvalid={(e) => {
      if (e.currentTarget.validity.typeMismatch) {
        return t(
          "Podaj poprawny numer telefonu (9–15 znaków w tym dopuszczalne +, -, spacje).",
        );
      }
    }}
  />
);

export default EmailInput;
