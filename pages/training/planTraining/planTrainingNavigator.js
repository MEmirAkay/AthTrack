import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Monday from './planTrainingIncludes/days/monday';
import Tuesday from './planTrainingIncludes/days/tuesday';
import Wednesday from './planTrainingIncludes/days/wednesday';
import Thursday from './planTrainingIncludes/days/thursday';
import Friday from './planTrainingIncludes/days/friday';
import Saturday from './planTrainingIncludes/days/saturday';
import Sunday from './planTrainingIncludes/days/sunday';
import ExercisePlanTraining from './planTrainingIncludes/exercises';
import HeaderPlanTraining from './planTrainingIncludes/headerTraining';
import PreviewPlanTraining from './planTrainingIncludes/previewTraning';

const Stack = createNativeStackNavigator();

export default function PlanTrainingNavigator() {
    return (
      
        <Stack.Navigator initialRouteName="HeaderPlanTraining">
          <Stack.Screen name="HeaderPlanTraining"  component={HeaderPlanTraining} options={{header: () => null}}/>
          
          <Stack.Screen name="Monday"  component={Monday} options={{header: () => null}}/>
          <Stack.Screen name="Tuesday" component={Tuesday} options={{header: () => null}} />
          <Stack.Screen name="Wednesday" component={Wednesday} options={{header: () => null}} />
          <Stack.Screen name="Thursday" component={Thursday} options={{header: () => null}} />
          <Stack.Screen name="Friday" component={Friday} options={{header: () => null}} />
          <Stack.Screen name="Saturday" component={Saturday} options={{header: () => null}} />
          <Stack.Screen name="Sunday" component={Sunday} options={{header: () => null}} />
          
          <Stack.Screen name="ExercisePlanTraining" component={ExercisePlanTraining} options={{header: () => null}} />
          <Stack.Screen name="PreviewPlanTraining" component={PreviewPlanTraining} options={{header: () => null}} />
        </Stack.Navigator>
      
      
    );
  }