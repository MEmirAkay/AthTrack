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
  Modal,
  TouchableOpacity,
  TextInput,
  FlatList,
  Dimensions,
} from "react-native";
import { Component, useState, useEffect } from "react";

export default class Saturday extends Component {
  constructor(props) {
    super(props);

    this.state = {
      exerciseDay: "Saturday",
      exerciseName: "",
      exerciseSets: 0,
      exerciseReps: 0,
      exerciseTime: 0,
      exerciseStartWeight: 0,
      exerciseIncrease: 0,
      exercise_ProgramStartDay: "",

      dataSource: [],
    };
  }

  componentDidMount() {
    fetch("https://mustafaemirakay.com/pages/projects/bitirme/api/fetchStartDay.php", {
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
        const startDay = responseJson;
        this.setState({ exercise_ProgramStartDay: startDay });
      });
  }

  registration_Function = () => {
    if (this.state.exerciseName == "") {
      Alert.alert("Please fill name of exercise.");
    } else if (this.state.exerciseSets == "") {
      Alert.alert("Please fill sets of exercise.");
    } else if (this.state.exerciseReps == "" || this.state.exerciseTime == "") {
      Alert.alert(
        "Please fill repetition of exercise or count time of exercise."
      );
    } else if (this.state.exerciseStartWeight == "") {
      Alert.alert("Please set starting weight of program.");
    } else if (this.state.exerciseIncrease == "") {
      Alert.alert(
        "Please set how will you increase your rate.(If you filled rep section program will automaticely set for repetition or if you filled time section it'll set automaticely for time.)"
      );
    } else {
      fetch("https://mustafaemirakay.com/pages/projects/bitirme/api/exercise.php", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          exercise_day: this.state.exerciseDay,
          exercise_name: this.state.exerciseName,
          exercise_set: this.state.exerciseSets,
          exercise_rep: this.state.exerciseReps,
          exercise_time: this.state.exerciseTime,
          exercise_start_kg: this.state.exerciseStartWeight,
          exercise_increase: this.state.exerciseIncrease,
          program_start_day: this.state.exercise_ProgramStartDay,
        }),
      })
        .then((response) => response.json())
        .then((responseJson) => {
          this.setState({ dataSource: responseJson });
        });
    }
  };

  _renderItem = ({ item, index }) => {
    return (
      <View>
        <TouchableOpacity
          style={styles.exerciseList}
          onPress={() => console.log(item.id)}
        >
          <View style={{ flexDirection: "row", flex: 1 }}>
            <View
              style={{
                backgroundColor: "white",
                flex: 1,
                flexDirection: "row",
                borderRadius: 20,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text>{item.exercise_name}</Text>
            </View>
            <View style={{ flexDirection: "row", flex: 1 }}>
              <View
                style={{
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={{ color: "white" }}>
                  Set : {item.exercise_set}
                </Text>
                <Text style={{ color: "white" }}>
                  Rep : {item.exercise_rep}
                </Text>
                <Text style={{ color: "white" }}>
                  Time : {item.exercise_time}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={{ color: "white" }}>
                  Starting Weight : {item.exercise_start_kg}
                </Text>
                <Text style={{ color: "white" }}>
                  Increase Weight : {item.exercise_increase}
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  MondayPage = () => {
    const [modalOpen, setModalOpen] = useState(false);

    return (
      <View style={styles.container}>
        <Modal visible={modalOpen} animationType="slide" transparent={true}>
          <View style={styles.modalContainer}>
            <View style={styles.modalRow}>
              <TextInput
                style={styles.modaInput}
                placeholder="Exercise Name"
                keyboardType="web-search"
                onChangeText={(e) => this.setState({ exerciseName: e })}
              />
              <TextInput
                style={styles.modaInput}
                placeholder="Sets"
                keyboardType="web-search"
                onChangeText={(e) => this.setState({ exerciseSets: e })}
              />
            </View>
            <View style={styles.modalRow}>
              <TextInput
                style={styles.modaInput}
                placeholder="Reps"
                keyboardType="web-search"
                onChangeText={(e) => this.setState({ exerciseReps: e })}
              />
              <Text style={{ marginHorizontal: 20, color: "white" }}>Or</Text>
              <TextInput
                style={styles.modaInput}
                placeholder="Time(Second)"
                keyboardType="web-search"
                onChangeText={(e) => this.setState({ exerciseTime: e })}
              />
            </View>
            <View style={styles.modalRow}>
              <TextInput
                style={styles.modaInput}
                placeholder="Starting Weight"
                keyboardType="web-search"
                onChangeText={(e) => this.setState({ exerciseStartWeight: e })}
              />
              <TextInput
                style={styles.modaInput}
                placeholder="Increase Per Week"
                keyboardType="web-search"
                onChangeText={(e) => this.setState({ exerciseIncrease: e })}
              />
            </View>
            <View style={styles.modalCol}>
              <TouchableOpacity
                style={styles.Submit}
                onPress={() => {
                  this.registration_Function();
                  setModalOpen(false);
                }}
              >
                <Text style={{ color: "white", fontSize: 20 }}>Submit</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.Cancel}
                onPress={() => setModalOpen(false)}
              >
                <Text style={{ color: "white", fontSize: 20 }}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        <Text
          style={{
            textAlign: "center",
            color: "white",
            
            fontSize: 50,
          }}
        >
          Monday
        </Text>

        <TouchableOpacity
          name="add"
          size={50}
          onPress={() => setModalOpen(true)}
          style={{
            backgroundColor: "white",
            borderRadius: 20,
            padding: 20,
            margin: 20,
          }}
        >
          <Text style={{ fontSize: 30 }}>+ Add Exercise</Text>
        </TouchableOpacity>
      </View>
    );
  };
  render() {
    return (
      <View>
        <StatusBar hidden={true} />
        <this.MondayPage />
          <View>
            <FlatList
              data={this.state.dataSource}
              renderItem={this._renderItem}
            />
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2A69F7",
    alignItems: "center",
    justifyContent: "center",
  },
  modalContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
    position: "absolute",
    top: 120,
    backgroundColor: "#2A69F7",
    borderRadius: 20,
    elevation: 10,
    alignSelf: "center",
    padding: 15,
  },
  modalRow: {
    flexDirection: "row",
    paddingTop: 10,
    margin: 10,
    justifyContent: "center",
    alignContent: "center",
    textAlign: "center",
    textAlignVertical: "center",
    alignItems: "center",
  },
  modalCol: {
    flex: 1,
  },
  modaInput: {
    fontSize: 15,
    flex: 1,
    textAlign: "center",
    backgroundColor: "white",
    borderRadius: 10,
    marginHorizontal: 10,
    height: 45,
    elevation: 10,
  },
  Submit: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    width: 360,
    height: 50,
    backgroundColor: "#04ba4d",
    margin: 5,
    elevation: 10,
  },
  Cancel: {
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    borderRadius: 20,
    backgroundColor: "#e62929",
    margin: 5,
    elevation: 10,
  },
  exerciseList: {
    marginTop: 20,
    borderRadius: 20,
    shadowColor: "#0C0B0B",
    elevation: 5,
    padding: 5,
    alignSelf: "center",
    alignItems: "center",
    width: Dimensions.get("window").width * 0.9,
    backgroundColor: "#2A69F7",
  },
  exerciseListContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
});
