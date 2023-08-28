import styled from "styled-components/native";

interface ButtonContainerProps {
  margin?: string;
}

export const ButtonContainer = styled.TouchableOpacity<ButtonContainerProps>`
  height: 50px;
  width: 100%;
  border-radius: 5px;
  background-color: blue;
  ${(props: ButtonContainerProps) => (props.margin ? `margin: ${props.margin};` : '')}
  justify-content: center;
  align-items: center;
`
