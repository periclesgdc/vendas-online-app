import { TextProps as TextPropsNative } from "react-native";
import { ContainerText } from "./text.styles";
import { textTypes } from "./text.types";
import { useMemo } from "react";

interface TextProps extends TextPropsNative {
  color?: string;
  type?: string;
}

const Text = ({color, type, ...props}: TextProps) => {

  const handleFontSize = useMemo(() => {
    switch (type) {
      case textTypes.TITLE:
        return '32px';
      default:
        return '16px';
    }
  }, [type]);

  return (
    <ContainerText fontSize={handleFontSize} color={color} {...props} />
  );
}

export default Text;
