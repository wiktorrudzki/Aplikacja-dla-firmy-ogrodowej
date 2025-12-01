import React, { useState } from "react";

const useErrorMessage = () => {
  const [state, setState] = useState<string | undefined>(undefined);

  const clearErrorMessage = () => {
    if (state) setState(undefined);
  };

  const setErrorMessage = (message: string) => {
    setState(message);
  };

  return { errorMessage: state, clearErrorMessage, setErrorMessage };
};

export default useErrorMessage;
