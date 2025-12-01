import { InputRootProps } from "@src/types/form";
import React from "react";
import { t } from "@src/utils/i18n";
import TextInput from "./TextInput";

type Props = InputRootProps & {
  placeholder?: string;
  name: string;
};

const PHONE_PATTERN = String.raw`^[0-9\+\-\s]{9,15}$`; // simple validation: 9-15 signs including spaces, + and -

const PhoneInput = ({ name, required, placeholder, label }: Props) => (
  <TextInput
    pattern={PHONE_PATTERN}
    placeholder={placeholder}
    type="tel"
    name={name}
    required={required}
    label={label}
    onInvalid={(e) => {
      if (e.currentTarget.validity.patternMismatch) {
        return t(
          "Podaj poprawny numer telefonu (9–15 znaków w tym dopuszczalne +, -, spacje).",
        );
      }
    }}
  />
);

export default PhoneInput;
