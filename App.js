import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./app/navigation";

export default function App() {
  return (
    <NavigationContainer>
      <AppNavigator/>
    </NavigationContainer>
  );
}


