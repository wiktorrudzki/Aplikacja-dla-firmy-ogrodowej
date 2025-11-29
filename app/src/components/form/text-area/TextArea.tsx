import React from "react";
import { Textarea } from "@chakra-ui/react";
import InputRoot from "../InputRoot";
import { InputRootProps } from "@src/types/form";

type Props = InputRootProps & {
  name: string;
};

const CustomTextArea = ({ required, label, name }: Props) => {
  return (
    <InputRoot label={label} required={required}>
      <Textarea borderWidth={2} borderColor="secondary.500" name={name} />
    </InputRoot>
  );
};

export default CustomTextArea;
