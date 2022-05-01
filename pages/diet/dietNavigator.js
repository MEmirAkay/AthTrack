import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

import Diet from "./diet";
import FoodSearch from "./foodsearch/foodsearch";

export default function DietNavigator() {
  return (
    <Stack.Navigator initialRouteName="Diet">
      <Stack.Screen
        name="Diet"
        options={{ header: () => null }}
        component={Diet}
      />
      <Stack.Screen
        name="FoodSearch"
        component={FoodSearch}
        options={{ header: () => null }}
      />
    </Stack.Navigator>
  );
}
