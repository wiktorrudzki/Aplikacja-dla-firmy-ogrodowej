import React from "react";
import { TextInput } from "./text-input";
import { TextArea } from "./text-area";

type Props<T extends object> = {
  children: React.ReactNode;
  onFinish: (data: T) => void; // TODO: align this prop type
};

const Form = <T extends object>({ children, onFinish }: Props<T>) => {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const fd = new FormData(e.currentTarget);

    fd.forEach((e) => console.log(e));
    // onFinish(e); // TODO
  };

  return <form onSubmit={onSubmit}>{children}</form>;
};

Form.TextInput = TextInput;
Form.TextArea = TextArea;

export default Form;
