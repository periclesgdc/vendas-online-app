import { View } from "react-native"
import { ContainerLogin } from "../styles/login.styles";
import Input from "../../../shared/components/inputs/Input";
import Button from "../../../shared/components/buttons/Button";
import { theme } from "../../../shared/themes/theme";
import { Icon } from "../../../shared/components/icon/icon";

const Login = () => {
  return (
    <View>
      <ContainerLogin>
        <Icon name="home3" />
        <Input
          placeholder="Type login..."
          title="Login"
        />
        <Input
          secureTextEntry
          placeholder="Type password..."
          title="Password"
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
