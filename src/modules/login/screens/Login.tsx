import { Text, View } from "react-native"
import { ContainerLogin } from "../styles/login.styles";
import Input from "../../../shared/components/inputs/Input";

const Login = () => {
  return (
    <View>
      <ContainerLogin>
        <Text>login</Text>
        <Input />
      </ContainerLogin>
    </View>
  )
}

export default Login;
