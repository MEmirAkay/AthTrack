import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import Main from "./pages/main/main";
import Sleep from "./pages/sleep/sleep";
import Weight from "./pages/weight/weight";

import TrainingNavigator from "./pages/training/trainingMainNavigator"
import DietNavigator from "./pages/diet/dietNavigator";

export default function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen
          name="Main"
          options={{header: () => null}}
          component={Main}
          
        />
        <Stack.Screen name="TrainingMainNavigator" component={TrainingNavigator} options={{header: () => null}} />
        <Stack.Screen name="DietNavigator" component={DietNavigator} options={{header: () => null}} />
        <Stack.Screen name="Sleep" component={Sleep} options={{header: () => null}} />
        <Stack.Screen name="Weight" component={Weight} options={{header: () => null}} />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}

