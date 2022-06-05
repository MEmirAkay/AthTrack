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
      weightScore: 0,
    };
  }

  submitWeight = () => {
    if (this.state.weight != "" && this.state.hunger != "") {
      console.log("Weight : %d", this.state.weight);
      console.log("Hunger : %s", this.state.hunger);

      fetch(
        "https://mustafaemirakay.com/pages/projects/bitirme/api/weight.php",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            weight: this.state.weight,
            hunger: this.state.hunger,
            time: new Date().getTime(),
          }),
        }
      );
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
        <Text style={{ textAlign: "center" }}>
          How feel your body?
        </Text>
        <View
          style={{ flexDirection: "row", margin: 10, justifyContent: "center" }}
        >
          <TouchableOpacity
            style={{
              margin: 4,
              backgroundColor:
                this.state.hunger == "Perfect" ? "#d4410d" : "white",
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
                this.state.hunger == "Good" ? "#d4410d" : "white",
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
                this.state.hunger == "Balanced" ? "#d4410d" : "white",
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
              backgroundColor: this.state.hunger == "Bad" ? "#d4410d" : "white",
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
                this.state.hunger == "Worst" ? "#d4410d" : "white",
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
              this.props.navigation.navigate("Main");
            }}
          >
            <Text style={{ textAlign: "center", color: "white", fontSize: 25 }}>
              Submit
            </Text>
          </TouchableOpacity>
        </View>
        
      </View>
    );
  };

  weightContent = () => {
    useEffect(() => {
      fetch(
        "https://mustafaemirakay.com/pages/projects/bitirme/api/weightData.php",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      )
        .then((response) => response.json())
        .then((responseJson) => {
          this.setState({ weightData: responseJson.reverse() });
          this.setState({ weight1: this.state.weightData[0] });
          this.setState({ weight2: this.state.weightData[1] });
          this.setState({ weight3: this.state.weightData[2] });
          this.setState({ weight4: this.state.weightData[3] });
          this.setState({ weight5: this.state.weightData[4] });
          this.setState({ weight6: this.state.weightData[5] });

         
        });

        fetch(
          "https://mustafaemirakay.com/pages/projects/bitirme/api/weightScore.php",
          {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          }
        )
          .then((response) => response.json())
          .then((responseJson) => {
            this.setState({ weightScore: responseJson.weightScore });
            
          });

      return () => {};
    }, []);

    return (
      <View>
        <LineChart
          data={{
            labels: ["1", "2", "3", "4", "5", "6", "7"],
            datasets: [
              {
                data: [
                  this.state.weight1,
                  this.state.weight2,
                  this.state.weight3,
                  this.state.weight4,
                  this.state.weight5,
                  this.state.weight6,
                ],
                color: (opacity = 1) => `rgba(212, 65, 13, ${opacity})`, // optional
                strokeWidth: 2, // optional
              },
            ],
          }}
          width={Dimensions.get("window").width*0.9} // from react-native
          height={230}
          yAxisSuffix="KG"
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: "#e26a00",
            backgroundGradientFrom: "#F2F2F2",
            backgroundGradientTo: "#F2F2F2",
            decimalPlaces: 0, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(247, 112, 64, ${opacity})`,
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
            alignSelf:"center",
            marginVertical: 10,
            borderRadius: 20,
            
          }}
        />
      </View>
    );
  };

  score = () => {
    var score = this.state.weightScore;
    return (
      <View style={{width:Dimensions.get("window").width, height:Dimensions.get("window").height, alignItems:"center"}}>
        <View style={{width:Dimensions.get("window").width*0.4, height:Dimensions.get("window").width*0.4, backgroundColor:"#d4410d", elevation:20, borderRadius:120, alignItems:"center", justifyContent:"center"}}>
        <View style={{width:Dimensions.get("window").width*0.35, height:Dimensions.get("window").width*0.35, backgroundColor:"white", elevation:20, borderRadius:120, alignItems:"center", justifyContent:"center"}}>
          <Text style={{fontSize:60}}>
            {score}
          </Text>
        </View>
        </View>
      </View>
    );
  };


  render() {
    return (
      <SafeAreaView style={styles.safe}>
        <StatusBar hidden={true} />
        <ScrollView style={{
              backgroundColor: "#f77040",
              width: Dimensions.get("window").width,
              height: Dimensions.get("window").height,
            }}>
          <View
           
          >
            
            <this.weightForm />
            <this.weightContent />
           <this.score />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  

  textInput: {
    borderRadius: 20,
    padding: 10,
    marginVertical: 30,
    marginHorizontal: 20,
    justifyContent: "center",
    backgroundColor: "white",
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
    backgroundColor: "#d4410d",
  },
});
