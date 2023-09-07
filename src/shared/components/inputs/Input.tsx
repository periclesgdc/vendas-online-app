import { useState } from "react";
import { TextInputProps, View } from "react-native";
import { theme } from "../../themes/theme";
import { DisplayFlexColumn } from "../styles/global.view.style";
import Text from "../text/Text";
import { textTypes } from "../text/text.types";
import { ContainerInput, IconEye } from "./input.style";

interface InputProps extends TextInputProps {
  title?: string;
  errorMessage?: string;
}

const Input = ({ title, secureTextEntry, errorMessage, ...props }: InputProps) => {
  const [currentSecure, setCurrentSecure] = useState<boolean>(!secureTextEntry);

  const handleOnPressEye = () => setCurrentSecure(!currentSecure);

  return (
    <DisplayFlexColumn>
      {title && (
        <Text
          type={textTypes.PARAGRAPH_SMALL_BOLD}
          color={theme.colors.gray.gray80}
        >{title}</Text>
      )}
      <View>
        <ContainerInput secureTextEntry={currentSecure} hasError={!!errorMessage} {...props} />
        {secureTextEntry && <IconEye name={currentSecure ? 'eye' : 'eye-blocked'} size={20} onPress={handleOnPressEye} />}
      </View>
      {errorMessage && (
        <Text type={textTypes.PARAGRAPH_SMALL_REGULAR} color={theme.colors.alert.error} >
          {errorMessage}
        </Text>
      )}
    </DisplayFlexColumn>
  );
}

export default Input;
