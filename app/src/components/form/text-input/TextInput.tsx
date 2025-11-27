import { Input } from "@chakra-ui/react";
import { InputRootProps } from "@src/types/form";
import React, { HTMLInputTypeAttribute } from "react";
import InputRoot from "../InputRoot";

type Props = InputRootProps & {
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
  name: string;
};

const TextInput = ({ name, type, required, placeholder, label }: Props) => (
  <InputRoot required={required} label={label}>
    <Input
      borderRadius={8}
      size="xl"
      width="100%"
      borderWidth={2}
      borderColor="primary.400"
      type={type}
      name={name}
      placeholder={placeholder}
    />
  </InputRoot>
);

export default TextInput;
