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
  TextInput,
  Dimensions,
} from "react-native";

import { Component, useState } from "react";
import { LineChart } from "react-native-chart-kit";

export default class Sleep extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mood: "1",
      mood_Perfect: "1",
      mood_Good: "1",
      mood_Balanced: "1",
      mood_Bad: "1",
      mood_Worst: "1",
    };
  }

  sleepForm = () => {
    const [mood, moodSelected] = useState("0");
    const [mood_Perfect, mood_PerfectSelected] = useState("0");
    const [mood_Good, mood_GoodSelected] = useState("0");
    const [mood_Balanced, mood_BalancedSelected] = useState("0");
    const [mood_Bad, mood_BadSelected] = useState("0");
    const [mood_Worst, mood_WorstSelected] = useState("0");

    return (
      <View>
        <View style={{ flexDirection: "column" }}>
          <TextInput
            style={styles.textInput}
            placeholder="When did you get in bed? (Example : 23:00)"
          ></TextInput>
          <TextInput
            style={styles.textInput}
            placeholder="Sleep Time (Only Hour) (Example : 8)"
          ></TextInput>
        </View>
        <Text style={{ textAlign: "center", marginTop: 20 }}>
          How you feeling right now?
        </Text>
        <View
          style={{ flexDirection: "row", margin: 20, justifyContent: "center" }}
        >
          <TouchableOpacity
            style={{
              margin: 4,
              backgroundColor: mood_Perfect == "1" ? "#2A69F7" : "white",
              width: 50,
              height: 50,
              borderRadius: 20,
              justifyContent: "center",
              alignContent: "center",
              elevation: 20,
            }}
            onPress={() => {
              mood_Perfect == "1"
                ? (mood_PerfectSelected("0"),
                  moodSelected("0"),
                  console.log(mood_Perfect),
                  this.setState({ mood_Perfect: mood_Perfect }))
                : (mood_PerfectSelected("1"),
                  moodSelected("0"),
                  console.log(mood_Perfect),
                  this.setState({ mood_Perfect: mood_Perfect }));
            }}
          >
            <Text style={{ textAlign: "center", fontSize: 30 }}>😀</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              margin: 4,
              backgroundColor: mood_Good == "1" ? "#2A69F7" : "white",
              width: 50,
              height: 50,
              borderRadius: 20,
              justifyContent: "center",
              alignContent: "center",
              elevation: 20,
            }}
            onPress={() => {
              mood_Good == "1"
                ? (mood_GoodSelected("0"),
                  moodSelected("0"),
                  console.log(mood_Good),
                  this.setState({ mood_Good: mood_Good }))
                : (mood_GoodSelected("1"),
                  moodSelected("0"),
                  console.log(mood_Good),
                  this.setState({ mood_Good: mood_Good }));
            }}
          >
            <Text style={{ textAlign: "center", fontSize: 30 }}>🙂</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              margin: 4,
              backgroundColor: mood_Balanced == "1" ? "#2A69F7" : "white",
              width: 50,
              height: 50,
              borderRadius: 20,
              justifyContent: "center",
              alignContent: "center",
              elevation: 20,
            }}
            onPress={() => {
              mood_Balanced == "1"
                ? (mood_BalancedSelected("0"),
                  moodSelected("0"),
                  console.log(mood_Balanced),
                  this.setState({ mood_Balanced: mood_Balanced }))
                : (mood_BalancedSelected("1"),
                  moodSelected("0"),
                  console.log(mood_Balanced),
                  this.setState({ mood_Balanced: mood_Balanced }));
            }}
          >
            <Text style={{ textAlign: "center", fontSize: 30 }}>😐</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              margin: 4,
              backgroundColor: mood_Bad == "1" ? "#2A69F7" : "white",
              width: 50,
              height: 50,
              borderRadius: 20,
              justifyContent: "center",
              alignContent: "center",
              elevation: 20,
            }}
            onPress={() => {
              mood_Bad == "1"
                ? (mood_BadSelected("0"),
                  moodSelected("0"),
                  console.log(mood_Bad),
                  this.setState({ mood_Bad: mood_Bad }))
                : (mood_BadSelected("1"),
                  moodSelected("0"),
                  console.log(mood_Bad),
                  this.setState({ mood_Bad: mood_Bad }));
            }}
          >
            <Text style={{ textAlign: "center", fontSize: 30 }}>😴</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              margin: 4,
              backgroundColor: mood_Worst == "1" ? "#2A69F7" : "white",
              width: 50,
              height: 50,
              borderRadius: 20,
              justifyContent: "center",
              alignContent: "center",
              elevation: 20,
            }}
            onPress={() => {
              mood_Worst == "1"
                ? (mood_WorstSelected("0"),
                  moodSelected("0"),
                  console.log(mood_Worst),
                  this.setState({ mood_Worst: mood_Worst }))
                : (mood_WorstSelected("1"),
                  moodSelected("0"),
                  console.log(mood_Worst),
                  this.setState({ mood_Worst: mood_Worst }));
            }}
          >
            <Text style={{ textAlign: "center", fontSize: 30 }}>💩</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "column" }}>
          <TouchableOpacity style={styles.submitButton}>
            <Text style={{ textAlign: "center", color: "white", fontSize: 25 }}>
              Submit
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            marginVertical: 20,
            alignSelf: "center",
            justifyContent: "center",
            width: 400,
            backgroundColor: "#c7c7c7",
            height: 1.5,
            borderRadius: 30,
          }}
        ></View>
      </View>
    );
  };

  sleepContent = () => {
    return (
      <View>
        <LineChart
          data={{
            labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
            datasets: [
              {
                data: [8, 7, 7, 7, 8, 7, 9],
              },
            ],
          }}
          width={Dimensions.get("window").width} // from react-native
          height={230}
          yAxisSuffix="Hour"
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: "#e26a00",
            backgroundGradientFrom: "#F2F2F2",
            backgroundGradientTo: "#F2F2F2",
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: "4",
              strokeWidth: "1",
              stroke: "black",
            },
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 0,
          }}
        />
      </View>
    );
  };

  sleepRecommended = () => {
    return (
      <View>
        <View style={{ borderRadius: 20, margin: 8, backgroundColor: "blue" }}>
          <Text style={{ color: "white", margin: 20 }}>Recommadation</Text>
        </View>
        <View style={{ borderRadius: 20, margin: 8, backgroundColor: "blue" }}>
          <Text style={{ color: "white", margin: 20 }}>Recommadation</Text>
        </View>
        <View style={{ borderRadius: 20, margin: 8, backgroundColor: "blue" }}>
          <Text style={{ color: "white", margin: 20 }}>Recommadation</Text>
        </View>
        
      </View>
    );
  };

  render() {
    return (
      <SafeAreaView style={styles.safe}>
        <StatusBar hidden={true} />
        <ScrollView>
          <Text
            style={{
              textAlign: "center",
              color: "black",
              fontFamily: "Roboto",
              fontSize: 50,
            }}
          >
            Sleep
          </Text>
          <this.sleepForm />
          <this.sleepContent />
          <this.sleepRecommended />
        </ScrollView>
      </SafeAreaView>
    );
  }
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
    width: "90%",
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
  textInput: {
    borderRadius: 20,
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 20,
    justifyContent: "center",
    backgroundColor: "#c7c7c7",
    elevation: 20,
  },
  submitButton: {
    borderRadius: 20,
    textAlign: "center",
    alignContent: "center",
    justifyContent: "center",
    alignSelf: "center",
    width: 300,
    padding: 10,
    backgroundColor: "blue",
  },
});
