import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Dimensions,
  Alert,
} from "react-native";

import { Component, useEffect, useState } from "react";
import { LineChart } from "react-native-chart-kit";

export default class Weight extends Component {
  constructor(props) {
    super(props);

    this.state = {
      weight: "",
      hunger: "",
      weightData: [],
      weight1: 0,
      weight2: 0,
      weight3: 0,
      weight4: 0,
      weight5: 0,
      weight6: 0,

    };
  }

  submitWeight = () => {
    if (this.state.weight != "" && this.state.hunger != "") {
      console.log("Weight : %d", this.state.weight);
      console.log("Hunger : %s", this.state.hunger);

      fetch("https://mustafaemirakay.com/pages/projects/bitirme/api/weight.php", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          weight: this.state.weight,
          hunger: this.state.hunger,
          time: new Date().getTime()
        }),
      });
      
    } else {
      Alert.alert("Please fill the field and select hunger type.");
    }
  };

  weightForm = () => {
    
    return (
      <View>
        <View style={{ flexDirection: "column" }}>
          <TextInput
            style={styles.textInput}
            placeholder="Current Weight"
            onChangeText={(data) => this.setState({ weight: data })}
          ></TextInput>
        </View>
        <Text style={{ textAlign: "center", marginTop: 20 }}>
          How feel your body?
        </Text>
        <View
          style={{ flexDirection: "row", margin: 20, justifyContent: "center" }}
        >
          <TouchableOpacity
            style={{
              margin: 4,
              backgroundColor:
                this.state.hunger == "Perfect" ? "#2A69F7" : "white",
              width: 50,
              height: 50,
              borderRadius: 20,
              justifyContent: "center",
              alignContent: "center",
              elevation: 20,
            }}
            onPress={() => {
              this.state.hunger == ""
                ? this.setState({ hunger: "Perfect" })
                : this.setState({ hunger: "" });
            }}
          >
            <Text style={{ textAlign: "center", fontSize: 30 }}>🏃🏻‍♂️</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              margin: 4,
              backgroundColor:
                this.state.hunger == "Good" ? "#2A69F7" : "white",
              width: 50,
              height: 50,
              borderRadius: 20,
              justifyContent: "center",
              alignContent: "center",
              elevation: 20,
            }}
            onPress={() => {
              this.state.hunger == ""
                ? this.setState({ hunger: "Good" })
                : this.setState({ hunger: "" });
            }}
          >
            <Text style={{ textAlign: "center", fontSize: 30 }}>💪🏼</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              margin: 4,
              backgroundColor:
                this.state.hunger == "Balanced" ? "#2A69F7" : "white",
              width: 50,
              height: 50,
              borderRadius: 20,
              justifyContent: "center",
              alignContent: "center",
              elevation: 20,
            }}
            onPress={() => {
              this.state.hunger == ""
                ? this.setState({ hunger: "Balanced" })
                : this.setState({ hunger: "" });
            }}
          >
            <Text style={{ textAlign: "center", fontSize: 30 }}>🙂</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              margin: 4,
              backgroundColor: this.state.hunger == "Bad" ? "#2A69F7" : "white",
              width: 50,
              height: 50,
              borderRadius: 20,
              justifyContent: "center",
              alignContent: "center",
              elevation: 20,
            }}
            onPress={() => {
              this.state.hunger == ""
                ? this.setState({ hunger: "Bad" })
                : this.setState({ hunger: "" });
            }}
          >
            <Text style={{ textAlign: "center", fontSize: 30 }}>😒</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              margin: 4,
              backgroundColor:
                this.state.hunger == "Worst" ? "#2A69F7" : "white",
              width: 50,
              height: 50,
              borderRadius: 20,
              justifyContent: "center",
              alignContent: "center",
              elevation: 20,
            }}
            onPress={() => {
              this.state.hunger == ""
                ? this.setState({ hunger: "Worst" })
                : this.setState({ hunger: "" });
            }}
          >
            <Text style={{ textAlign: "center", fontSize: 30 }}>😵</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "column" }}>
          <TouchableOpacity
            style={styles.submitButton}
            onPress={() => {
              this.submitWeight();
            }}
          >
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

  weightContent = () => {

    useEffect(() => { 

    fetch("https://mustafaemirakay.com/pages/projects/bitirme/api/weightData.php", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
    
        this.setState({ weightData : responseJson.reverse()});
        this.setState({ weight1 : this.state.weightData[0]});
        this.setState({ weight2 : this.state.weightData[1]});
        this.setState({ weight3 : this.state.weightData[2]});
        this.setState({ weight4 : this.state.weightData[3]});
        this.setState({ weight5 : this.state.weightData[4]});
        this.setState({ weight6 : this.state.weightData[5]});

                console.log(this.state.weight1);
      });
      
      return () => {};
    }, []);

    return (
      <View>
        <LineChart
          data={
            {
            labels: ["1", "2", "3", "4", "5", "6", "7"],
            datasets: [
              {
                data: [this.state.weight1,this.state.weight2,this.state.weight3,this.state.weight4,this.state.weight5,this.state.weight6],
                color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
                strokeWidth: 2 // optional
              }
            ],
          }
        }
          width={Dimensions.get("window").width} // from react-native
          height={230}
          yAxisSuffix="KG"
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

  weightRecommended = () => {
    return (
      <View>
        <View style={{ borderRadius: 20, margin: 8, backgroundColor: "blue" }}>
          <Text style={{ color: "white", margin: 20 }}>{this.state.weightData[1]}</Text>
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
            Weight
          </Text>
          <this.weightForm />
          <this.weightContent />
          <this.weightRecommended />
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
