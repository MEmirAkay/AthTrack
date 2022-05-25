import { StatusBar } from "expo-status-bar";
import { Component } from "react";
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
  exercises = () => {
    const exerciseData = [
      {
        exerciseId:1,
        exerciseName: "Squat",
        exerciseSet: "3",
        exerciseRep: "5",
        exerciseKg: "100",
        exerciseSuccess: "Undone",
      },
      {
        exerciseId:2,
        exerciseName: "Deadlift",
        exerciseSet: "3",
        exerciseRep: "5",
        exerciseKg: "100",
        xerciseSuccess: "Undone",
      },
      {
        exerciseId:3,
        exerciseName: "Bench Press",
        exerciseSet: "3",
        exerciseRep: "5",
        exerciseKg: "100",
        exerciseSuccess: "Undone",
      },
      {
        exerciseId:4,
        exerciseName: "Squat",
        exerciseSet: "3",
        exerciseRep: "5",
        exerciseKg: "100",
        exerciseSuccess: "Undone",
      },
      {
        exerciseName: "Deadlift",
        exerciseSet: "3",
        exerciseRep: "5",
        exerciseKg: "100",
        xerciseSuccess: "Undone",
      },
      {
        exerciseName: "Bench Press",
        exerciseSet: "3",
        exerciseRep: "5",
        exerciseKg: "100",
        exerciseSuccess: "Undone",
      },
      {
        exerciseName: "Squat",
        exerciseSet: "3",
        exerciseRep: "5",
        exerciseKg: "100",
        exerciseSuccess: "Undone",
      },
      {
        exerciseName: "Deadlift",
        exerciseSet: "3",
        exerciseRep: "5",
        exerciseKg: "100",
        xerciseSuccess: "Undone",
      },
      {
        exerciseName: "Bench Press",
        exerciseSet: "3",
        exerciseRep: "5",
        exerciseKg: "100",
        exerciseSuccess: "Undone",
      },
      
    ];

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
                  backgroundColor: "white",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={{ color: "black", fontSize: 20, marginLeft: 10 }}>
                  {item.exerciseName}
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
                    {item.exerciseSet} x {item.exerciseRep}
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
                    {item.exerciseKg} KG
                  </Text>
                </View>
              </View>
            </View>
            <View style={{flexDirection:"row"}}>
                  <TouchableOpacity style={{
                    width:70,height:70,marginTop:5,marginLeft:5,backgroundColor:"#E34C4C",justifyContent:"center",alignItems:"center",borderRadius:20,elevation:10

                  }}>
                    <Text style={{fontSize:20}}>
                    👎🏻
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={{
                    width:70,height:70,marginTop:5, marginLeft:5,backgroundColor:"#4CE39B",justifyContent:"center",alignItems:"center",borderRadius:20,elevation:10

                  }}>
                    <Text style={{fontSize:20}}>
                    👍🏻
                    </Text>
                  </TouchableOpacity>
            </View>
          </View>
        </View>
      );
    };

    return (
      <FlatList
        style={{ height: 450 }}
        data={exerciseData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={ItemView}
      />
    );
  };

  render() {
    return (
      <SafeAreaView>
        <StatusBar hidden={true} />
        <View style={styles.container}>
          <this.exercises />
          <TouchableOpacity style={{
           
            width:Dimensions.get("window").width,
            height:60,
            
            justifyContent:'center',
            alignItems:'center',
             
             backgroundColor:"#4CE39B",
             elevation:20,
          }}>
            <Text style={{fontSize:20,color:'white'}}>
              Submit
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#6B9FED",
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
    alignItems: "center",
    justifyContent: "center",
  },
});
