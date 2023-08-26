import { SafeAreaView, StyleSheet } from "react-native";
import Login from "./modules/login";

const App = () => {

  return (
    <SafeAreaView>
      <Login />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#ddd',
    margin: 16
  }
})

export default App;
