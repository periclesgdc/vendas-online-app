import { ActivityIndicator, TouchableOpacityProps } from "react-native";
import { ButtonContainer, ButtonGradient, ButtonSecondary } from "./button.style";
import Text from "../text/Text";
import { theme } from "../../themes/theme";
import { textTypes } from "../text/text.types";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  margin?: string;
  type?: string;
  disabled?: boolean;
  loading?: boolean;
}

const Button = ({title, margin, loading, type, ...props}: ButtonProps) => {
  const renderText = (color: string) => (
    <Text type={textTypes.BUTTON_BOLD} color={color}>
      {title} {loading ? <ActivityIndicator color={theme.colors.neutral.white} /> : null}
    </Text>
  );

  switch (type) {
    case theme.buttons.secondary:
      return (
        <ButtonSecondary margin={margin} {...props}>
          {renderText(theme.colors.main.primary)}
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
            {renderText(theme.colors.neutral.white)}
          </ButtonGradient>
        </ButtonContainer>
      );
  }
}

export default Button;
