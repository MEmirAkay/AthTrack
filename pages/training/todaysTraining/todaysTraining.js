import { StatusBar } from "expo-status-bar";
import { Component, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Dimensions,
  FlatList,
  TouchableOpacity,
} from "react-native";

export default class TodaysTrainingContent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      exerciseData: [],
    };
  }

  changeExerciseStatus = (id, status) => {
    console.log(new Date().getTime());
    fetch(
      "https://mustafaemirakay.com/pages/projects/bitirme/api/exerciseStatus.php",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          exerciseId: id,
          exerciseStatus: status,
        }),
      }
    )
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
      });

      this.checkExercises();

  }

  checkExercises = () => {

    const DateInfo = new Date();
    const milsecInfo = DateInfo.getTime();
    const dayInfo = DateInfo.getDay();
    let Today="";

    if(dayInfo == 0){
      Today ="Sunday";
    }
    else if(dayInfo == 1){
      Today ="Monday";
    }
    else if(dayInfo == 2){
      Today ="Thursday";
    }
    else if(dayInfo == 3){
      Today ="Wednesday";
    }
    else if(dayInfo == 4){
      Today ="Tuesday";
    }
    else if(dayInfo == 5){
      Today ="Friday";
    }
    else if(dayInfo == 6){
      Today ="Saturday";
    }



    fetch(
      "https://mustafaemirakay.com/pages/projects/bitirme/api/fetchExercise.php",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          day: Today,
          start_day: milsecInfo,// değişecek
        }),
      }
    )
      .then((response) => response.json())
      .then((responseJson) => {
       
        this.setState({ exerciseData: responseJson });
        console.log(this.state.exerciseData[0]);
      });
  };

  exercises = () => {
    useEffect(() => {
      this.checkExercises();
    }, []);

    const ItemView = ({ item }) => {

      return (
        <View
          style={{
            flexDirection: "row",
            borderRadius: 20,
            width: Dimensions.get("window").width * 0.9,
            height: 100,
            margin: 8,
            backgroundColor: "#2d6ac4",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <View
              style={{
                flexDirection: "column",
              }}
            >
              <View
                style={{
                  width: 200,
                  marginTop: 5,
                  height: 30,
                  borderRadius: 20,
                  backgroundColor:  item.exercise_status == "Undone" ? "#E34C4C":"#4CE39B",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={{ color: "black" , fontSize: 20, marginLeft: 10 }}>
                  {item.exercise_name}
                </Text>
              </View>

              <View
                style={{
                  flexDirection: "row",
                }}
              >
                <View
                  style={{
                    width: 90,
                    marginTop: 5,
                    height: 30,
                    borderRadius: 20,
                    backgroundColor: "white",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{ color: "black", fontSize: 20, marginLeft: 10 }}
                  >
                    {item.exercise_set} x {item.exercise_rep}
                  </Text>
                </View>
                <View
                  style={{
                    marginTop: 5,
                    marginLeft: 5,
                    width: 90,
                    height: 30,
                    borderRadius: 20,
                    backgroundColor: "white",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{ color: "black", fontSize: 20, marginLeft: 10 }}
                  >
                    {(new Date().getTime() - (item.program_start_day*1000)) != 0 ? parseInt(item.exercise_start_kg)+(item.exercise_increase * (Math.round((new Date().getTime() - (item.program_start_day*1000)) / 604800000)+1)): item.exercise_start_kg} KG
                  </Text>
                </View>
              </View>
            </View>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                style={{
                  width: Dimensions.get("window").width * 0.15,
                  height: Dimensions.get("window").width * 0.16,
                  marginTop: 5,
                  marginLeft: 5,
                  backgroundColor: "#E34C4C",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 20,
                  elevation: 10,
                }}
                onPress={() => {
                  
                  this.changeExerciseStatus(item.id,"Undone");
                  
                }}
              >
                <Text style={{ fontSize: 20 }}>👎🏻</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  width: Dimensions.get("window").width * 0.15,
                  height: Dimensions.get("window").width * 0.16,
                  marginTop: 5,
                  marginLeft: 5,
                  backgroundColor: "#4CE39B",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 20,
                  elevation: 10,
                }}
                onPress={() => {
                  this.changeExerciseStatus(item.id,"Done");
                }}
              >
                <Text style={{ fontSize: 20 }}>👍🏻</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      );
    };

    return (
      <FlatList
        style={{ height: 450 }}
        data={this.state.exerciseData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={ItemView}
      />
    );
  };

  render() {
    return (
      <View>
        <StatusBar hidden={true} />
        <View style={styles.container}>
          <this.exercises />
          <TouchableOpacity
            style={{
              width: Dimensions.get("window").width,
              height: 60,

              justifyContent: "center",
              alignItems: "center",

              backgroundColor: "#4CE39B",
              elevation: 20,
            }}
          >
            <Text style={{ fontSize: 20, color: "white" }}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    backgroundColor: "#6B9FED",
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
    alignItems: "center",
    justifyContent: "center",
  },
});
