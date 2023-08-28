import { View } from "react-native"
import { ContainerLogin } from "../styles/login.styles";
import Input from "../../../shared/components/inputs/Input";
import Button from "../../../shared/components/buttons/Button";

const Login = () => {
  return (
    <View>
      <ContainerLogin>
        <Input />
        <Button title="Entrar" margin="5px" />
      </ContainerLogin>
    </View>
  );
}

export default Login;
