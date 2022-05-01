import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Pressable,
  Alert,
  SectionList,
  TouchableOpacity,
  Button,
} from "react-native";

export default function PreviewPlanTraining({navigation}) {
    const DaysContent = () => {
      return (
        
        <TouchableOpacity
        style={styles.SubmitButton}
          onPress={() => navigation.navigate('Main', {
            screen: 'TrainingMainNavigator'})}
        >
          <View>
            <Text style={{alignContent:'center',justifyContent:'center',color:'white',fontSize:30,textAlign:'center'}}>Next</Text>
          </View>
  
        </TouchableOpacity>
      );
    };
  
    return (
      <SafeAreaView>
        <StatusBar hidden={true} />
        <ScrollView contentContainerStyle={styles.container}>
          <View style={{ paddingTop: 30, paddingBottom: 250,}}>
          <View style={styles.calendarText}>
            <Text style={{alignContent:'center',justifyContent:'center',color:'white',fontSize:30,textAlign:'center'}}>Preview Plan</Text>
        </View>
            <DaysContent />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      backgroundColor: "#131A26",
      alignItems: "center",
      justifyContent: "center",
    },
    daysText: {
        backgroundColor: "#131A26",
    },
    SubmitButton:{
      width:340,
      backgroundColor:'#2A69F7',
      borderRadius:20,
      padding: 10,
      justifyContent:'center',
      alignContent:'center',
      elevation:20,  
    },
});