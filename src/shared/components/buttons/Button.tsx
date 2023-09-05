import { TouchableOpacityProps } from "react-native";
import { ButtonContainer, ButtonGradient, ButtonSecondary } from "./button.style";
import Text from "../text/Text";
import { theme } from "../../themes/theme";
import { textTypes } from "../text/text.types";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  margin?: string;
  type?: string;
}

const Button = ({title, margin, type, ...props}: ButtonProps) => {
  switch (type) {
    case theme.buttons.secondary:
      return (
        <ButtonSecondary margin={margin} {...props}>
          <Text type={textTypes.BUTTON_BOLD} color={theme.colors.main.primary}>{title}</Text>
        </ButtonSecondary>
      );
    case theme.buttons.primary:
    default:
      return (
        <ButtonContainer margin={margin} {...props}>
          <ButtonGradient
            start={{ x: 0.0, y: 0.0 }}
            end={{ x: 1.0, y: 1.0 }}
            colors={['#738fca', '#0c1c3d']}
          >
            <Text type={textTypes.BUTTON_BOLD} color={theme.colors.neutral.white}>{title}</Text>
          </ButtonGradient>
        </ButtonContainer>
      );
  }
}

export default Button;
