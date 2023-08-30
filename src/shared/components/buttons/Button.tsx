import { TouchableOpacityProps } from "react-native";
import { ButtonContainer } from "./button.style";
import Text from "../text/Text";
import { theme } from "../../themes/theme";
import { textTypes } from "../text/text.types";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  margin?: string;
}

const Button = ({title, margin, ...props}: ButtonProps) => {
  return (
    <ButtonContainer margin={margin} {...props}>
      <Text type={textTypes.BUTTON_BOLD} color={theme.colors.neutral.white}>{title}</Text>
    </ButtonContainer>
  );
}

export default Button;
