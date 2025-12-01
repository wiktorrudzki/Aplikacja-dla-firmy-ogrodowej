import { Field } from "@chakra-ui/react";
import { InputRootProps } from "@src/types/form";
import React from "react";

type Props = InputRootProps & {
  children: React.ReactNode;
  errorMessage?: string;
};

const InputRoot = ({ children, required, label, errorMessage }: Props) => {
  const isInvalid = errorMessage != null;

  return (
    <Field.Root invalid={isInvalid} required={required}>
      {label && (
        <Field.Label>
          {label} {required && <Field.RequiredIndicator />}
        </Field.Label>
      )}
      {children}
      {isInvalid && <Field.ErrorText>{errorMessage}</Field.ErrorText>}
    </Field.Root>
  );
};

export default InputRoot;
