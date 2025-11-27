import React from "react";
import { TextInput } from "./text-input";
import { TextArea } from "./text-area";

type Props<T extends object> = {
  children: React.ReactNode;
  style?: React.CSSProperties;
  onFinish: (data: T) => void;
};

const Form = <T extends object>({ children, style, onFinish }: Props<T>) => {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const values: Record<string, FormDataEntryValue> = {};

    const fd = new FormData(e.currentTarget);

    fd.forEach((value, key) => (values[key] = value));

    onFinish(values as T); // trust the form author :D
  };

  return (
    <form style={style} onSubmit={onSubmit}>
      {children}
    </form>
  );
};

Form.TextInput = TextInput;
Form.TextArea = TextArea;

export default Form;
