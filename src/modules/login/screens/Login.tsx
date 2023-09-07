import { View } from "react-native"
import { ContainerLogin } from "../styles/login.styles";
import Input from "../../../shared/components/inputs/Input";
import Button from "../../../shared/components/buttons/Button";
import { theme } from "../../../shared/themes/theme";

const Login = () => {
  return (
    <View>
      <ContainerLogin>
        <Input
          placeholder="Digite..."
          title="Login"
          errorMessage="Erro no login"
        />
        <Button
          title="Entrar"
          margin="5px"
          type={theme.buttons.primary}
        />
      </ContainerLogin>
    </View>
  );
}

export default Login;
