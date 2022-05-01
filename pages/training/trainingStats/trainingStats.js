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
} from "react-native";

export default function TrainingStatsContent() {
  return (
    <SafeAreaView>
      <StatusBar hidden={true} />

      <ScrollView contentContainerStyle={styles.container}>
        <Text
          style={{
            textAlign: "center",
            paddingTop: 300,
            color: "white",
            fontFamily: "Roboto",
            fontSize: 100,
          }}
        >
          Training Stats
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
  