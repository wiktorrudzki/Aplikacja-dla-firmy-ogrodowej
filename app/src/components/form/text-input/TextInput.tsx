import { Input } from "@chakra-ui/react";
import { InputRootProps } from "@src/types/form";
import React, { HTMLInputTypeAttribute } from "react";
import InputRoot from "../InputRoot";
import { useErrorMessage } from "../hooks";
import { t } from "@src/utils/i18n";

type Props = InputRootProps & {
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
  name: string;
  pattern?: string;
  onInvalid?: (e: React.FormEvent<HTMLInputElement>) => void;
};

const TextInput = ({
  name,
  type,
  required,
  placeholder,
  pattern,
  label,
  onInvalid,
}: Props) => {
  const { errorMessage, clearErrorMessage, setErrorMessage } =
    useErrorMessage();

  return (
    <InputRoot required={required} label={label} errorMessage={errorMessage}>
      <Input
        pattern={pattern}
        borderRadius={8}
        size="xl"
        width="100%"
        borderWidth={2}
        borderColor="primary.400"
        type={type}
        name={name}
        placeholder={placeholder}
        onInvalid={(e) => {
          e.preventDefault();

          const value = e.currentTarget.value;

          if (required && !value) {
            setErrorMessage(t("To pole jest wymagane."));
          }

          const error = onInvalid?.(e);

          if (error) {
            setErrorMessage(error);
          }
        }}
        onInput={clearErrorMessage}
      />
    </InputRoot>
  );
};

export default TextInput;
