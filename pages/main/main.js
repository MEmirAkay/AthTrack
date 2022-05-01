import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  
} from "react-native";

export default function Main({ navigation }) {
  const TrainingBox = () => {
    return (
      <TouchableOpacity
        style={styles.boxcontainer}
        onPress={() => navigation.navigate("TrainingMainNavigator")}
      >
        <View style={styles.boxHeader}>
          <Text
            style={{
              fontFamily: "Roboto",
              fontSize: 25,
              textAlign: "center",
              textAlignVertical: "center",
              color: "#F9F9F9",
            }}
          >
            Training
          </Text>
        </View>
        <View>
          <View style={styles.dateBox}>
            <Text
              style={{
                fontFamily: "Roboto",
                fontSize: 40,
                color: "#F9F9F9",
                alignContent: "center",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              Week 2 Day 2
            </Text>
          </View>
        </View>
        <View style={styles.statContainer}>
          <View style={styles.statBar}>
            <Text
              style={{
                fontFamily: "Roboto",
                fontSize: 23,
                flex: 1,
                color: "#F9F9F9",
                paddingLeft: 20,
              }}
            >
              Volume
            </Text>

            <View style={styles.loadbarContainer}>
              <View style={styles.loadbarMain}>
                <View style={styles.ladbarLoad}>
                  <Text></Text>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.statBar}>
            <Text
              style={{
                fontFamily: "Roboto",
                fontSize: 23,
                flex: 1,
                color: "#F9F9F9",
                paddingLeft: 20,
              }}
            >
              Intensty
            </Text>

            <View style={styles.loadbarContainer}>
              <View style={styles.loadbarMain}>
                <View style={styles.ladbarLoad}>
                  <Text></Text>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.statBar}>
            <Text
              style={{
                fontFamily: "Roboto",
                fontSize: 23,
                flex: 1,
                color: "#F9F9F9",
                paddingLeft: 20,
              }}
            >
              Success
            </Text>

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
  const DietBox = () => {
    return (
      <TouchableOpacity
        style={styles.boxcontainer}
        onPress={() => navigation.navigate("DietNavigator")}
      >
        <View style={styles.boxHeader}>
          <Text
            style={{
              fontFamily: "Roboto",
              fontSize: 25,
              textAlign: "center",
              textAlignVertical: "center",
              color: "#F9F9F9",
            }}
          >
            Diet
          </Text>
        </View>
        <View>
          <View style={styles.dateBox}>
            <Text
              style={{
                fontFamily: "Roboto",
                fontSize: 40,
                color: "#F9F9F9",
                alignContent: "center",
                justifyContent: "center",
                textAlign: "center",

              }}
            >
              Week 2 Day 2
            </Text>
          </View>
        </View>
        <View style={styles.statContainer}>
          <View style={styles.statBar}>
            <Text
              style={{
                fontFamily: "Roboto",
                fontSize: 23,
                flex: 1,
                color: "#F9F9F9",
                paddingLeft: 20,
              }}
            >
              Volume
            </Text>

            <View style={styles.loadbarContainer}>
              <View style={styles.loadbarMain}>
                <View style={styles.ladbarLoad}>
                  <Text></Text>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.statBar}>
            <Text
              style={{
                fontFamily: "Roboto",
                fontSize: 23,
                flex: 1,
                color: "#F9F9F9",
                paddingLeft: 20,
              }}
            >
              Intensty
            </Text>

            <View style={styles.loadbarContainer}>
              <View style={styles.loadbarMain}>
                <View style={styles.ladbarLoad}>
                  <Text></Text>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.statBar}>
            <Text
              style={{
                fontFamily: "Roboto",
                fontSize: 23,
                flex: 1,
                color: "#F9F9F9",
                paddingLeft: 20,
              }}
            >
              Success
            </Text>

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
  const SleppBox = () => {
    return (
      <TouchableOpacity
        style={styles.boxcontainer}
        onPress={() => navigation.navigate("Sleep")}
      >
        <View style={styles.boxHeader}>
          <Text
            style={{
              fontFamily: "Roboto",
              fontSize: 25,
              textAlign: "center",
              textAlignVertical: "center",
              color: "#F9F9F9",
              
            }}
          >
            Sleep
          </Text>
        </View>
        <View>
          <View style={styles.dateBox}>
            <Text
              style={{
                fontFamily: "Roboto",
                fontSize: 40,
                color: "#F9F9F9",
                alignContent: "center",
                justifyContent: "center",
                textAlign: "center",
                
              }}
            >
              Week 2 Day 2
            </Text>
          </View>
        </View>
        <View style={styles.statContainer}>
          <View style={styles.statBar}>
            <Text
              style={{
                fontFamily: "Roboto",
                fontSize: 23,
                flex: 1,
                color: "#F9F9F9",
                paddingLeft: 20,
              }}
            >
              Volume
            </Text>

            <View style={styles.loadbarContainer}>
              <View style={styles.loadbarMain}>
                <View style={styles.ladbarLoad}>
                  <Text></Text>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.statBar}>
            <Text
              style={{
                fontFamily: "Roboto",
                fontSize: 23,
                flex: 1,
                color: "#F9F9F9",
                paddingLeft: 20,
              }}
            >
              Intensty
            </Text>

            <View style={styles.loadbarContainer}>
              <View style={styles.loadbarMain}>
                <View style={styles.ladbarLoad}>
                  <Text></Text>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.statBar}>
            <Text
              style={{
                fontFamily: "Roboto",
                fontSize: 23,
                flex: 1,
                color: "#F9F9F9",
                paddingLeft: 20,
              }}
            >
              Success
            </Text>

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

  const WeightBox = () => {
    return (
      <TouchableOpacity
        style={styles.boxcontainer}
        onPress={() => navigation.navigate("Weight")}
      >
        <View style={styles.boxHeader}>
          <Text
            style={{
              fontFamily: "Roboto",
              fontSize: 25,
              textAlign: "center",
              textAlignVertical: "center",
              color: "#F9F9F9",
              
            }}
          >
            Weight
          </Text>
        </View>
        <View>
          <View style={styles.dateBox}>
            <Text
              style={{
                fontFamily: "Roboto",
                fontSize: 40,
                color: "#F9F9F9",
                alignContent: "center",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              Week 2 Day 2
            </Text>
          </View>
        </View>
        <View style={styles.statContainer}>
          <View style={styles.statBar}>
            <Text
              style={{
                fontFamily: "Roboto",
                fontSize: 23,
                flex: 1,
                color: "#F9F9F9",
                paddingLeft: 20,
              }}
            >
              Volume
            </Text>

            <View style={styles.loadbarContainer}>
              <View style={styles.loadbarMain}>
                <View style={styles.ladbarLoad}>
                  <Text></Text>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.statBar}>
            <Text
              style={{
                fontFamily: "Roboto",
                fontSize: 23,
                flex: 1,
                color: "#F9F9F9",
                paddingLeft: 20,
              }}
            >
              Intensty
            </Text>

            <View style={styles.loadbarContainer}>
              <View style={styles.loadbarMain}>
                <View style={styles.ladbarLoad}>
                  <Text></Text>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.statBar}>
            <Text
              style={{
                fontFamily: "Roboto",
                fontSize: 23,
                flex: 1,
                color: "#F9F9F9",
                paddingLeft: 20,
              }}
            >
              Success
            </Text>

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

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar hidden={true} />
      <ScrollView contentContainerStyle={styles.container}>
        <View style={{paddingTop: 30,}}>
          <TrainingBox />
          <DietBox />
          <SleppBox />
          <WeightBox />
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
  dateBox: {
    justifyContent: "center",
    alignContent: "center",
    width: 175,
    height: 175,
    backgroundColor: "#262159",
    borderRadius: 90,
    shadowColor: "#000000",
    elevation: 5,
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
    height: 400,
    marginBottom: 15,
    alignItems: "center",
    width: "100%",
    backgroundColor: "#202B3F",
  },
  boxHeader: {
    fontFamily: "Roboto",
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
