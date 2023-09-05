import styled from "styled-components/native";
import { theme } from "../../themes/theme";
import LinearGradient from "react-native-linear-gradient";

interface ButtonContainerProps {
  margin?: string;
}

export const ButtonContainer = styled.TouchableOpacity<ButtonContainerProps>`
  height: 50px;
  width: 100%;
  border-radius: 5px;
  ${(props: ButtonContainerProps) => (props.margin ? `margin: ${props.margin};` : '')}
  justify-content: center;
  align-items: center;
`
export const ButtonSecondary = styled(ButtonContainer)<ButtonContainerProps>`
  ${(props: ButtonContainerProps) => (props.margin ? `margin: ${props.margin};` : '')}
  background-color: ${theme.colors.neutral.white};
  border-width: 1px;
  border-color: ${theme.colors.main.primary};
`
export const ButtonGradient = styled(LinearGradient)<ButtonContainerProps>`
  width: 100%;
  height: 100%;
  border-radius: 5px;
  ${(props: ButtonContainerProps) => (props.margin ? `margin: ${props.margin};` : '')}
  justify-content: center;
  align-items: center;
`;
