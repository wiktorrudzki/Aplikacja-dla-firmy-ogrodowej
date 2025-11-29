import { Input } from "@chakra-ui/react";
import { InputRootProps } from "@src/types/form";
import React from "react";
import InputRoot from "../InputRoot";

type Props = InputRootProps & {
  name: string;
};

const TextInput = ({ name, required, label }: Props) => {
  return (
    <InputRoot required={required} label={label}>
      <Input borderWidth={2} borderColor="secondary.500" name={name} />
    </InputRoot>
  );
};

export default TextInput;
