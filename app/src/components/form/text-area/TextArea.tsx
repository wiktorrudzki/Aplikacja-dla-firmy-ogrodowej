import React from "react";
import { Textarea } from "@chakra-ui/react";
import InputRoot from "../InputRoot";
import { InputRootProps } from "@src/types/form";

type Props = InputRootProps & {
  name: string;
  placeholder?: string;
};

const CustomTextArea = ({ required, label, placeholder, name }: Props) => (
  <InputRoot label={label} required={required}>
    <Textarea
      borderRadius={8}
      size="xl"
      borderWidth={2}
      borderColor="primary.400"
      name={name}
      placeholder={placeholder}
    />
  </InputRoot>
);

export default CustomTextArea;
