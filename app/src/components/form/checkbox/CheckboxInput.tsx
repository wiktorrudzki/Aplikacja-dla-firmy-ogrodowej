import React from "react";
import { Checkbox, Field } from "@chakra-ui/react";

import { InputRootProps } from "@src/types/form";
import InputRoot from "../InputRoot";
import { useErrorMessage } from "../hooks";
import { t } from "@src/utils/i18n";

type Props = InputRootProps & {
  children: React.ReactNode;
  name: string;
  onInvalid?: (e: React.FormEvent<HTMLInputElement>) => void;
};

const CheckboxInput = ({ name, required, children, onInvalid }: Props) => {
  const { errorMessage, clearErrorMessage, setErrorMessage } =
    useErrorMessage();

  return (
    <InputRoot required={required} errorMessage={errorMessage}>
      <Checkbox.Root name={name} invalid={!!errorMessage}>
        <Checkbox.HiddenInput
          onInput={clearErrorMessage}
          onInvalid={(e) => {
            e.preventDefault();

            const value = e.currentTarget.checked;

            if (required && !value) {
              setErrorMessage(t("To pole jest wymagane."));
            }

            const error = onInvalid?.(e);

            if (error) {
              setErrorMessage(error);
            }
          }}
        />
        <Checkbox.Control colorPalette={"primary"} />
        <Checkbox.Label>
          {children} {required && <Field.RequiredIndicator />}
        </Checkbox.Label>
      </Checkbox.Root>
    </InputRoot>
  );
};

export default CheckboxInput;
