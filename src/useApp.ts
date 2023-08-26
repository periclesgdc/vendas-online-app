import { useState } from "react";

export const useApp = () => {
  const [value, setValue] = useState('abcd');

  const handleOnPress = () => {
    setValue('def');
  }

  return {
    value,
    handleOnPress,
  };
}
