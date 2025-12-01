import { Field } from "@chakra-ui/react";
import { InputRootProps } from "@src/types/form";
import React from "react";

type Props = InputRootProps & {
  children: React.ReactNode;
};

const InputRoot = ({ children, required, label }: Props) => {
  return (
    <Field.Root required={required}>
      {label && (
        <Field.Label>
          {label} {required && <Field.RequiredIndicator />}
        </Field.Label>
      )}
      {children}
    </Field.Root>
  );
};

export default InputRoot;
