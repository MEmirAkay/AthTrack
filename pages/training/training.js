import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Dimensions

} from "react-native";

export default function Training({navigation}) {
  const TodayTraining = () => {
    return (
      <TouchableOpacity
        style={styles.boxcontainer}
        onPress={() => navigation.navigate("TodaysTrainingContent")}
      >
        <View style={styles.boxHeader}>
          <Text style={styles.navigatorHeader}>Today's Training</Text>
        </View>

        <View style={styles.statContainer}>
          <View style={styles.statBar}>
            <Text style={styles.statTexts}>Volume</Text>

            <View style={styles.loadbarContainer}>
              <View style={styles.loadbarMain}>
                <View style={styles.ladbarLoad}>
                  <Text></Text>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.statBar}>
            <Text style={styles.statTexts}>Intensty</Text>

            <View style={styles.loadbarContainer}>
              <View style={styles.loadbarMain}>
                <View style={styles.ladbarLoad}>
                  <Text></Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const TrainingStats = () => {
    return (
      <TouchableOpacity
        style={styles.boxcontainer}
        onPress={() => navigation.navigate("TrainingStatsContent")}
      >
        <View style={styles.boxHeader}>
          <Text style={styles.navigatorHeader}>Training Stats</Text>
        </View>

      </TouchableOpacity>
    );
  };

  const PlanTraining = () => {
    return (
      <TouchableOpacity
        style={styles.boxcontainer}
        onPress={() => navigation.navigate("PlanTrainingContent")}
      >
        <View style={styles.boxHeader}>
          <Text style={styles.navigatorHeader}>Plan Training</Text>
        </View>

      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView>
      <StatusBar hidden={true} />
      <ScrollView contentContainerStyle={styles.container}>
        <View style={{ paddingTop: 30, height: Dimensions.get("window").height}}>
          <TodayTraining />
          <TrainingStats />
          <PlanTraining  />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#6B9FED",
    alignItems: "center",
    justifyContent: "center",
  },

  navigatorHeader: {
    fontFamily: "Roboto",
    fontSize: 30,
    textAlign: "center",
    textAlignVertical: "center",
    width: 400,
    color: "#F9F9F9",
  },

  statTexts: {
    fontFamily: "Roboto",
    fontSize: 23,
    flex: 1,
    color: "#F9F9F9",
    paddingLeft: 20,
  },
  
  statContainer: {
    flexDirection: "column",
  },
  statBar: {
    marginTop: 10,
    width: 355,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  boxcontainer: {
    marginTop: 0,
    borderRadius: 23,
    shadowColor: "#0C0B0B",
    elevation: 20,
    paddingTop: 20,
    paddingBottom: 20,
    marginBottom: 15,
    alignItems: "center",
    width: 390,
    backgroundColor: "#2d6ac4",
  },
  boxHeader: {
    fontFamily: "Roboto",
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    width: 100,
  },
  loadbarContainer: {
    flex: 1,
    justifyContent: "center",
  },
  loadbarMain: {
    flexDirection: "row",
    backgroundColor: "#444C59",
    width: 150,
    height: 25,
    borderRadius: 20,
  },
  ladbarLoad: {
    borderRadius: 20,
    backgroundColor: "#35C09F",
    width: 70,
    shadowColor: "#000000",
    elevation: 6,
  },
});
