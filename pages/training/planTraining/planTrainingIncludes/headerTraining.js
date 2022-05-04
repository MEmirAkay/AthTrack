import { setStatusBarBackgroundColor, StatusBar } from "expo-status-bar";
import React, { Component, useRef, useCallback } from "react";

import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";

import { Calendar } from "react-native-calendars";
import { useState, useMemo } from "react/cjs/react.development";

export default class HeaderPlanTraining extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      start_day: "",
      mon: "1",
      tue: "1",
      wed: "1",
      thu: "1",
      fri: "1",
      sat: "1",
      sun: "1",
      length_of_program:"",
    };
  }

  registration_Function = () => {
    if (this.state.title == "") {
      Alert.alert("Please fill title.");
    } else if (this.state.start_day == "") {
      Alert.alert("Please fill select date.");
    } else if (this.state.title == "" && this.state.start_day == "") {
      Alert.alert("Please fill title and select date.");
    } else {
      fetch("https://mustafaemirakay.com/pages/projects/bitirme/api/PostData.php", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: this.state.title,
          start_day: this.state.start_day,
          mon: this.state.mon,
          tue: this.state.tue,
          wed: this.state.wed,
          thu: this.state.thu,
          fri: this.state.fri,
          sat: this.state.sat,
          sun: this.state.sun,
          length_of_program: this.state.length_of_program
        }),
      });
      this.props.navigation.navigate("ExercisePlanTraining");
    }
  };

  CalendarContent = () => {
    const [selected, setSelected] = useState("");
    const [monD, monSelected] = useState("0");
    const [tueD, tueSelected] = useState("0");
    const [wedD, wedSelected] = useState("0");
    const [thuD, thuSelected] = useState("0");
    const [friD, friSelected] = useState("0");
    const [satD, satSelected] = useState("0");
    const [sunD, sunSelected] = useState("0");

    const onDayPress = (day) => {
      setSelected(day.dateString);
      this.setState({ start_day: day.dateString });
    };

    const marked = useMemo(() => {
      return {
        [selected]: {
          selected: true,
          disableTouchEvent: true,
          selectedColor: "#2A69F7",
          selectedTextColor: "white",
        },
      };
    }, [selected]);

    return (
      <View
        style={{
          flex: 1,
          height: "100%",
          backgroundColor: "transparent",
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            flex: 1,
            color: "white",
            paddingVertical: 20,
            textAlign: "center",
          }}
        >
          Which days you'll train in a week :
        </Text>
        <View
          style={{ flex: 1, flexDirection: "row", justifyContent: "center" , paddingBottom: 20}}
        >
          <TouchableOpacity
            style={{
              margin: 4,
              backgroundColor: monD == "1" ? '#2A69F7' :'white' ,
              width: 50,
              height: 50,
              borderRadius: 20,
              justifyContent: "center",
              alignContent: "center",
              elevation:20,
            }}
            onPress={() => {
              monD == "1"
                ? (monSelected("0"),console.log(monD), this.setState({ mon: monD }))
                : (monSelected("1"),console.log(monD), this.setState({ mon: monD }));
            }}
          >
            <View>
              <Text style={{ textAlign: "center", color: monD == "1" ? 'white' :'black' }}>Mon</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              margin: 4,
              backgroundColor: tueD == "1" ? '#2A69F7' :'white',
              width: 50,
              height: 50,
              borderRadius: 20,
              justifyContent: "center",
              alignContent: "center",
              elevation:20,
            }}
            onPress={() =>
              tueD == "1"
                ? (tueSelected("0"), this.setState({ tue: tueD }))
                : (tueSelected("1"), this.setState({ tue: tueD }))
            }
          >
            <View>
              <Text style={{ textAlign: "center", color: tueD == "1" ? 'white' :'black'  }}>Tue</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              margin: 4,
              backgroundColor: wedD == "1" ? '#2A69F7' :'white',
              width: 50,
              height: 50,
              borderRadius: 20,
              justifyContent: "center",
              alignContent: "center",
              elevation:20,
            }}
            onPress={() =>
              wedD == "1"
                ? (wedSelected("0"), this.setState({ wed: wedD }))
                : (wedSelected("1"), this.setState({ wed: wedD }))
            }
          >
            <View>
              <Text style={{ textAlign: "center", color: wedD == "1" ? 'white' :'black'  }}>Wed</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              margin: 4,
              backgroundColor: thuD == "1" ? '#2A69F7' :'white',
              width: 50,
              height: 50,
              borderRadius: 20,
              justifyContent: "center",
              alignContent: "center",
              elevation:20,
            }}
            onPress={() =>
              thuD == "1"
                ? (thuSelected("0"), this.setState({ thu: thuD }))
                : (thuSelected("1"), this.setState({ thu: thuD }))
            }
          >
            <View>
              <Text style={{ textAlign: "center", color: thuD == "1" ? 'white' :'black'  }}>Thu</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              margin: 4,
              backgroundColor: friD == "1" ? '#2A69F7' :'white',
              width: 50,
              height: 50,
              borderRadius: 20,
              justifyContent: "center",
              alignContent: "center",
              elevation:20,
            }}
            onPress={() =>
              friD == "1"
                ? (friSelected("0"), this.setState({ fri: friD }))
                : (friSelected("1"), this.setState({ fri: friD }))
            }
          >
            <View>
              <Text style={{ textAlign: "center", color: friD=="1" ? 'white' :'black'  }}>Fri</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              margin: 4,
              backgroundColor: satD == "1" ? '#2A69F7' :'white',
              width: 50,
              height: 50,
              borderRadius: 20,
              justifyContent: "center",
              alignContent: "center",
              elevation:20,
            }}
            onPress={() =>
              satD == "1"
                ? (satSelected("0"), this.setState({ sat: satD }))
                : (satSelected("1"), this.setState({ sat: satD }))
            }
          >
            <View>
              <Text style={{ textAlign: "center", color: satD == "1" ? 'white' :'black'  }}>Sat</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              margin: 4,
              backgroundColor: sunD == "1" ? '#2A69F7' :'white',
              width: 50,
              height: 50,
              borderRadius: 20,
              justifyContent: "center",
              alignContent: "center",
              elevation:20,
            }}
            onPress={() =>
              sunD == "1"
                ? (sunSelected("0"), this.setState({ sun: sunD }))
                : (sunSelected("1"), this.setState({ sun: sunD }))
            }
          >
            <View>
              <Text style={{ textAlign: "center", color: sunD == "1" ? 'white' :'black'  }}>Sun</Text>
            </View>
          </TouchableOpacity>
        </View>

        <TextInput
                style={styles.input}
                onChangeText={(data) => this.setState({ length_of_program: data })}
                placeholder="Lenght of Program (Week)"
                keyboardType="numeric"
              />



        <Text
          style={{
            flex: 1,
            color: "white",
            paddingVertical: 20,
            textAlign: "center",
          }}
        >
          Select start day of program :
        </Text>

        <Calendar
          onDayPress={onDayPress}
          markedDates={marked}
          firstDay={1}
          style={{
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            paddingBottom: 10,
            elevation: 20,
          }}
        />
        <TouchableOpacity
          style={styles.SubmitButton}
          onPress={() => {
            this.registration_Function();
          }}
        >
          <View>
            <Text
              style={{
                alignContent: "center",
                justifyContent: "center",
                color: "white",
                fontSize: 30,
                textAlign: "center",
                elevation:20,
              }}
            >
              Next
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  render() {
    return (
      <SafeAreaView>
        <StatusBar hidden={true} />
        <ScrollView contentContainerStyle={styles.container}>
          <View style={{ flex: 1, paddingBottom: 120 }}>
            <SafeAreaView style={styles.container}>
              <TextInput
                style={styles.input}
                onChangeText={(a) => this.setState({ title: a })}
                placeholder="Title Of Program"
                keyboardType="web-search"
              />

              <this.CalendarContent />
            </SafeAreaView>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#131A26",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    flex: 1,
    height: 40,
    margin: "auto",
    borderWidth: 1,
    padding: 10,
    width:400,
    borderColor: "white",
    backgroundColor: "white",
    borderRadius: 10,
  },
  calendarText: {
    backgroundColor: "#131A26",
    justifyContent: "center",
    alignContent: "center",
  },
  SubmitButton: {
    margin:'auto',
    backgroundColor: "#2A69F7",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    padding: 10,
    justifyContent: "center",
    alignContent: "center",
    elevation: 20,
  },
  daysChekboxText: {
    color: "white",
    textAlign: "center",
  },
  days: {
    margin: 4,
    backgroundColor: "white",
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignContent: "center",
  },
});
