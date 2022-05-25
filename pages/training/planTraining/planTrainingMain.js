import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,

} from "react-native";

export default function PlanTrainingContent() {
  return (
    <SafeAreaView>
      <StatusBar hidden={true} />

      <ScrollView contentContainerStyle={styles.container}>
        <Text
          style={{
            textAlign: "center",
            paddingTop: 300,
            color: "white",
            
            fontSize: 100,
          }}
        >
          Plan Training
        </Text>
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
  });
  
