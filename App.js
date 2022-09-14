import { Text, SafeAreaView } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import { Provider } from "react-redux";
import { theme } from "./App.styles";
// import AppNavigator from "./src/Navigation/App.navigator";
import { store } from "./src/store";
import AppNavigator from "./src/Navigation/App.navigator";

export default function App() {
  return (
    <Provider store={store}>
      <PaperProvider theme={theme}>
        <SafeAreaView style={{ flex: 1 }}>
          <AppNavigator />
        </SafeAreaView>
      </PaperProvider>
    </Provider>
  );
}
