import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import Training from "./training";
import TodaysTrainingContent from "./todaysTraining/todaysTraining";
import PlanTrainingNavigator from "./planTraining/planTrainingNavigator";
import TrainingStatsContent from "./trainingStats/trainingStats";
import TrainingHistoryContent from "./trainingHistory/trainingHistory";

export default function TrainingNavigator() {
    return (
      
        <Stack.Navigator initialRouteName="Training">
          <Stack.Screen
            name="Training"
            options={{header: () => null}}
            component={Training}
            
          />
          <Stack.Screen name="TodaysTrainingContent" component={TodaysTrainingContent} options={{header: () => null}} />
          <Stack.Screen name="PlanTrainingContent" component={PlanTrainingNavigator} options={{header: () => null}} />
          <Stack.Screen name="TrainingStatsContent" component={TrainingStatsContent} options={{header: () => null}} />
          <Stack.Screen name="TrainingHistoryContent" component={TrainingHistoryContent} options={{header: () => null}} />
        </Stack.Navigator>
      
      
    );
  }