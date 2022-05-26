import { StatusBar } from "expo-status-bar";
import { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from "react-native";

export default class Main extends Component {
  TrainingBox = () => {
    return (
      <TouchableOpacity
        style={{
          marginTop: 0,
          borderRadius: 23,
          elevation: 10,
          paddingTop: 20,
          height: 100,
          marginBottom: 50,
          alignItems: "center",
          width: Dimensions.get("window").width * 0.9,
          backgroundColor: "#6B9FED",
        }}
        onPress={() => this.props.navigation.navigate("TrainingMainNavigator")}
      >
        <View style={styles.boxHeader}>
          <Text
            style={{
              
              fontSize: 35,
              textAlign: "center",
              textAlignVertical: "center",
              color: "#F9F9F9",
            }}
          >
            Training 🏋🏻
          </Text>
        </View>
      </TouchableOpacity>
    );
  };
  DietBox = () => {
    return (
      <TouchableOpacity
        style={{
          marginTop: 0,
          borderRadius: 23,
          elevation: 10,
          paddingTop: 20,
          height: 100,
          marginBottom: 50,
          alignItems: "center",
          width: Dimensions.get("window").width * 0.9,
          backgroundColor: "#5AC994",
        }}
        onPress={() => this.props.navigation.navigate("DietNavigator")}
      >
        <View style={styles.boxHeader}>
          <Text
            style={{
              
              fontSize: 35,
              textAlign: "center",
              textAlignVertical: "center",
              color: "#F9F9F9",
            }}
          >
            Diet 🍏
          </Text>
        </View>
      </TouchableOpacity>
    );
  };
  SleppBox = () => {
    return (
      <TouchableOpacity
        style={{
          marginTop: 0,
          borderRadius: 23,
          elevation: 10,
          paddingTop: 20,
          height: 100,
          marginBottom: 50,
          alignItems: "center",
          width: Dimensions.get("window").width * 0.9,
          backgroundColor: "#FD76CB",
        }}
        onPress={() => this.props.navigation.navigate("Sleep")}
      >
        <View style={styles.boxHeader}>
          <Text
            style={{
              
              fontSize: 35,
              textAlign: "center",
              textAlignVertical: "center",
              color: "#F9F9F9",
            }}
          >
            Sleep 😴
          </Text>
        </View>
      </TouchableOpacity>
    );
  };
  WeightBox = () => {
    return (
      <TouchableOpacity
        style={{
          marginTop: 0,
          borderRadius: 23,
          elevation: 10,
          paddingTop: 20,
          height: 100,
          marginBottom: 50,
          alignItems: "center",
          width: Dimensions.get("window").width * 0.9,
          backgroundColor: "#f77040",
        }}
        onPress={() => this.props.navigation.navigate("Weight")}
      >
        <View style={styles.boxHeader}>
          <Text
            style={{
              
              fontSize: 35,
              textAlign: "center",
              textAlignVertical: "center",
              color: "#F9F9F9",
            }}
          >
            Weight 🧍‍♂️
          </Text>
        </View>
      </TouchableOpacity>
    );
  };
  render() {
    return (
      <View>
        <StatusBar hidden={true} />
        <ScrollView contentContainerStyle={styles.container}>
          <View style={{ paddingTop: 30 }}>
            <this.TrainingBox />
            <this.DietBox />
            <this.SleppBox />
            <this.WeightBox />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    alignItems: "center",
    justifyContent: "center",
  },
  dateBox: {
    justifyContent: "center",
    alignContent: "center",
    width: 175,
    height: 175,
    backgroundColor: "#303642",
    borderRadius: 90,
    elevation: 5,
  },

  boxcontainer: {
    marginTop: 0,
    borderRadius: 23,
    elevation: 20,
    paddingTop: 20,
    height: 100,
    marginBottom: 15,
    alignItems: "center",
    width: Dimensions.get("window").width * 0.9,
    backgroundColor: "#F95F29",
  },
  boxHeader: {
   
    marginVertical: 10,
    width: Dimensions.get("window").width,
  },
});
