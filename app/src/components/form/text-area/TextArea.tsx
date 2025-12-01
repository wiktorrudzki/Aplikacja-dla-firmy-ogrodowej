import React from "react";
import { Textarea } from "@chakra-ui/react";
import InputRoot from "../InputRoot";
import { InputRootProps } from "@src/types/form";
import { useErrorMessage } from "../hooks";
import { t } from "@src/utils/i18n";

type Props = InputRootProps & {
  name: string;
  placeholder?: string;
};

const CustomTextArea = ({ required, label, placeholder, name }: Props) => {
  const { errorMessage, clearErrorMessage, setErrorMessage } =
    useErrorMessage();

  return (
    <InputRoot errorMessage={errorMessage} label={label} required={required}>
      <Textarea
        borderRadius={8}
        size="xl"
        borderWidth={2}
        borderColor="primary.400"
        name={name}
        placeholder={placeholder}
        onInvalid={(e) => {
          e.preventDefault();

          const value = e.currentTarget.value;

          if (required && !value) {
            setErrorMessage(t("To pole jest wymagane."));
          }
        }}
        onInput={clearErrorMessage}
      />
    </InputRoot>
  );
};

export default CustomTextArea;
