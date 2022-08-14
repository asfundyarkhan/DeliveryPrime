import { Text, SafeAreaView } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import { theme } from "./App.styles";
import AppNavigator from "./src/Navigation/App.navigator";

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <SafeAreaView style={{ flex: 1 }}>
        <AppNavigator />
      </SafeAreaView>
    </PaperProvider>
  );
}
