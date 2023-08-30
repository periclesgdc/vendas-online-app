import { TextProps as TextPropsNative } from "react-native";
import { ContainerText } from "./text.styles";
import { textTypes } from "./text.types";
import { useMemo } from "react";

interface TextProps extends TextPropsNative {
  color?: string;
  type?: string;
}

const Text = ({color, type, ...props}: TextProps) => {

  const fontSize = useMemo(() => {
    switch (type) {
      case textTypes.TITLE_BOLD:
      case textTypes.TITLE_LIGHT:
      case textTypes.TITLE_REGULAR:
        return '24px';
      case textTypes.SUBTITLE_BOLD:
      case textTypes.SUBTITLE_LIGHT:
      case textTypes.SUBTITLE_REGULAR:
        return '20px';
      case textTypes.BUTTON_BOLD:
      case textTypes.BUTTON_LIGHT:
      case textTypes.BUTTON_REGULAR:
        return '18px';
      case textTypes.PARAGRAPH_SMALL_BOLD:
      case textTypes.PARAGRAPH_SMALL_LIGHT:
      case textTypes.PARAGRAPH_SMALL_REGULAR:
        return '10px';
      case textTypes.PARAGRAPH_BOLD:
      case textTypes.PARAGRAPH_LIGHT:
      case textTypes.PARAGRAPH_REGULAR:
      default:
        return '14px';
    }
  }, [type]);

  const fontFamily = useMemo(() => {
    switch (type) {
      case textTypes.TITLE_BOLD:
      case textTypes.SUBTITLE_BOLD:
      case textTypes.BUTTON_BOLD:
      case textTypes.PARAGRAPH_BOLD:
      case textTypes.PARAGRAPH_SMALL_BOLD:
        return 'Poppins-Bold';
      case textTypes.TITLE_LIGHT:
      case textTypes.SUBTITLE_LIGHT:
      case textTypes.BUTTON_LIGHT:
      case textTypes.PARAGRAPH_LIGHT:
      case textTypes.PARAGRAPH_SMALL_LIGHT:
        return 'Poppins-Light';
      case textTypes.TITLE_REGULAR:
      case textTypes.SUBTITLE_REGULAR:
      case textTypes.BUTTON_REGULAR:
      case textTypes.PARAGRAPH_REGULAR:
      case textTypes.PARAGRAPH_SMALL_REGULAR:
      default:
        return 'Poppins-Regular';
    }
  }, [type]);

  return (
    <ContainerText fontSize={fontSize} fontFamily={fontFamily} color={color} {...props} />
  );
}

export default Text;
