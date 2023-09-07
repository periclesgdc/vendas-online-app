import styled from "styled-components/native";
import { theme } from "../../themes/theme";

interface ContainerInputProps {
  hasError?: boolean;
}

export const ContainerInput = styled.TextInput<ContainerInputProps>`
  width: 100%;
  height: 50px;
  padding: 16px;
  background-color: ${theme.colors.neutral.white};
  color: grey;
  border-radius: 5px;
  border-width: 1px;
  border-color: ${(props: ContainerInputProps) => props.hasError ? theme.colors.alert.error : theme.colors.gray.gray80};
`;
