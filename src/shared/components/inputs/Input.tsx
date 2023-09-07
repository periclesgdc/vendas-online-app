import { TextInputProps } from "react-native";
import { DisplayFlexColumn } from "../styles/global.view.style";
import { ContainerInput } from "./input.style";
import Text from "../text/Text";
import { textTypes } from "../text/text.types";
import { theme } from "../../themes/theme";

interface InputProps extends TextInputProps {
  title?: string;
  errorMessage?: string;
}

const Input = ({ title, errorMessage, ...props }: InputProps) => {
  return (
    <DisplayFlexColumn>
      {title && (
        <Text
          type={textTypes.PARAGRAPH_SMALL_BOLD}
          color={theme.colors.gray.gray80}
        >{title}</Text>
      )}
      <ContainerInput hasError={!!errorMessage} {...props} />
      {errorMessage && (
        <Text type={textTypes.PARAGRAPH_SMALL_REGULAR} color={theme.colors.alert.error} >
          {errorMessage}
        </Text>
      )}
    </DisplayFlexColumn>
  );
}

export default Input;
