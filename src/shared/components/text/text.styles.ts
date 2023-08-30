import styled from "styled-components/native";

interface ContainerTextProps {
  color?: string;
  fontSize: string;
}

export const ContainerText = styled.Text<ContainerTextProps>`
  ${(props: ContainerTextProps) => props.color ? `color: ${props.color};` : ''}
  font-family: Poppins-Bold;
  font-size: ${(props: ContainerTextProps) => props.fontSize}
`;
