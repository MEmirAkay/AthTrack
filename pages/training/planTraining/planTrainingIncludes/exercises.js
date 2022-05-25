import { StatusBar } from "expo-status-bar";
import { render } from "react-dom";
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
  Button,
} from "react-native";
import { Component } from "react";

export default class ExercisePlanTraining extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mon: "",
      tue: "",
      wed: "",
      thu: "",
      fri: "",
      sat: "",
      sun: "",
    };
  }

  componentDidMount() {
    fetch("https://mustafaemirakay.com/pages/projects/bitirme/api/fetchDaysStatus.php", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        q: "maxid",
      }),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        const daysArray = responseJson.split(",");
        this.setState({ mon: daysArray[0] });
        this.setState({ tue: daysArray[1] });
        this.setState({ wed: daysArray[2] });
        this.setState({ thu: daysArray[3] });
        this.setState({ fri: daysArray[4] });
        this.setState({ sat: daysArray[5] });
        this.setState({ sun: daysArray[6] });
      });
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar hidden={true} />
        <ScrollView contentContainerStyle={styles.container}>
          <View style={{ paddingTop: 30, paddingBottom: 550 }}>
            <View style={styles.calendarText}>
              <Text
                style={{
                  alignContent: "center",
                  justifyContent: "center",
                  color: "white",
                  fontSize: 30,
                  textAlign: "center",
                }}
              >
                Exercise Plan
              </Text>
            </View>
            <View>
              {this.state.mon == "0" ? (
                <TouchableOpacity
                  
                  style={styles.DaysBox}
                  onPress={() => {this.props.navigation.navigate(
                    "Monday"
                  )}}
                >
                  <Text style={styles.DaysBoxText}>Monday</Text>
                </TouchableOpacity>
              ) : (
                <View></View>
              )}
              {this.state.tue == "0" ? (
                <TouchableOpacity
                  style={styles.DaysBox}
                  onPress={() => {this.props.navigation.navigate(
                    "Tuesday"
                  )}}
                >
                  <Text style={styles.DaysBoxText}>Tuesday</Text>
                </TouchableOpacity>
              ) : (
                <View></View>
              )}
              {this.state.wed == "0" ? (
                <TouchableOpacity
                  style={styles.DaysBox}
                  onPress={()=>{this.props.navigation.navigate(
                    "Wednesday"
                  )}}
                >
                  <Text style={styles.DaysBoxText}>Wednesday</Text>
                </TouchableOpacity>
              ) : (
                <View></View>
              )}
              {this.state.thu == "0" ? (
                <TouchableOpacity
                  style={styles.DaysBox}
                  onPress={()=>{this.props.navigation.navigate(
                    "Thursday"
                  )}}
                >
                  <Text style={styles.DaysBoxText}>Thursday</Text>
                </TouchableOpacity>
              ) : (
                <View></View>
              )}
              {this.state.fri == "0" ? (
                <TouchableOpacity
                  style={styles.DaysBox}
                  onPress={()=>{this.props.navigation.navigate(
                    "Friday"
                  )}}
                >
                  <Text style={styles.DaysBoxText}>Friday</Text>
                </TouchableOpacity>
              ) : (
                <View></View>
              )}
              {this.state.sat == "0" ? (
                <TouchableOpacity
                  style={styles.DaysBox}
                  onPress={()=>{this.props.navigation.navigate(
                    "Saturday"
                  )}}
                >
                  <Text style={styles.DaysBoxText}>Saturday</Text>
                </TouchableOpacity>
              ) : (
                <View></View>
              )}
              {this.state.sun == "0" ? (
                <TouchableOpacity
                  style={styles.DaysBox}
                  onPress={()=>{this.props.navigation.navigate(
                    "Sunday"
                  )}}
                >
                  <Text style={styles.DaysBoxText}>Sunday</Text>
                </TouchableOpacity>
              ) : (
                <View></View>
              )}
            </View>
          </View>
        </ScrollView>

        <TouchableOpacity
          style={styles.SubmitButton}
          onPress={() => this.props.navigation.navigate('Main', {
            screen: 'TrainingMainNavigator'})}
        >
          <View>
            <Text
              style={{
                alignContent: "center",
                justifyContent: "center",
                color: "white",
                fontSize: 30,
                textAlign: "center",
              }}
            >
              Next
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#6B9FED",
    alignItems: "center",
    justifyContent: "center",
    padding:20,
  },
  daysText: {
    backgroundColor: "#131A26",
  },
  SubmitButton: {
    position: "absolute",
    bottom: 0,
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    width: 340,
    backgroundColor: "#2A69F7",
    borderRadius: 20,
    padding: 10,
    justifyContent: "center",
    alignContent: "center",
    elevation: 5,
  },
  DaysBox: {
    marginTop: 20,
    borderRadius: 23,
    shadowColor: "#0C0B0B",
    elevation: 5,
    paddingTop: 20,
    paddingBottom: 20,
    alignItems: "center",
    width: 390,
    backgroundColor: "#2A69F7",
    
  },
  DaysBoxText: {
    color:'white',
    fontSize:30,
  },
});
