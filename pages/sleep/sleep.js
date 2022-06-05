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

import { Component, useEffect} from "react";
import { LineChart } from "react-native-chart-kit";

export default class Sleep extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sleep_time: 0,
      
      feeling : "",
      date: new Date().getDate() + "-" + (new Date().getMonth()+1) + "-" + new Date().getFullYear(),
      dateCheck: "",
      data1:"",
      data2:"",
      data3:"",
      data4:"",
      data5:"",
      data6:"",
      data7:"",

      st1:"",
      st2:"",
      st3:"",
      st4:"",
      st5:"",
      st6:"",
      st7:"",

      sleepScore:0,
    };
  }

  

  submitSleep = () => {
      if(this.state.dateCheck == this.state.date){
        Alert.alert("You already submitted today's sleep informations. Come back tomorrow.");
      }else{
        console.log("date: ",this.state.date);
        console.log("check: ",this.state.dateCheck);
        if (this.state.sleep_time != "" && this.state.feeling != "") {
      console.log("Sleep time: %d", this.state.sleep_time);
      console.log("Feeling: %s", this.state.feeling);
      console.log("Date : %s", this.state.date);


      fetch("https://mustafaemirakay.com/pages/projects/bitirme/api/sleepSubmit.php", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          
          sleep_time: this.state.sleep_time,
          feeling: this.state.feeling,
          date: this.state.date
        }),
      });

      Alert.alert("Submitted succesfully !");
      
    } else {
      Alert.alert("Please fill the all field and select feeling type.");
    }
      }

    
  }

  sleepForm = () => {
    useEffect(() => {
      fetch("https://mustafaemirakay.com/pages/projects/bitirme/api/checkSleep.php", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        })
        .then((response) => response.json())
        .then((responseJson) => {
          responseJson ? this.setState({dateCheck : responseJson.date}):this.setState({dateCheck : ""})
        });

        fetch("https://mustafaemirakay.com/pages/projects/bitirme/api/sleepFetch.php", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        })
        .then((response) => response.json())
        .then((responseJson) => {
          
          

          this.setState({data1: responseJson[0]});
          this.setState({data2: responseJson[1]});
          this.setState({data3: responseJson[2]});
          this.setState({data4: responseJson[3]});
          this.setState({data5: responseJson[4]});
          this.setState({data6: responseJson[5]});
          this.setState({data7: responseJson[6]});
          this.setState({sleepScore: responseJson[7]});

          console.log(this.state.sleepScore);

          this.setState({st1: responseJson[0].sleepTime});  
          this.setState({st2: responseJson[1].sleepTime});
          this.setState({st3: responseJson[2].sleepTime});
          this.setState({st4: responseJson[3].sleepTime});
          this.setState({st5: responseJson[4].sleepTime});
          this.setState({st6: responseJson[5].sleepTime});
          this.setState({st7: responseJson[6].sleepTime});
         

        });

    }, [])

    return (
      <View>
        <View style={{ flexDirection: "column" ,marginTop:20 }}>
          
          <TextInput
            style={styles.textInput}
            onChangeText={
              
              (data) => this.setState({ sleep_time: data })
            
            }
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
              backgroundColor: this.state.feeling == "Perfect" ? "#FC1CA9" : "white",
              width: 50,
              height: 50,
              borderRadius: 20,
              justifyContent: "center",
              alignContent: "center",
              elevation: 20,
            }}
            onPress={() => {
              this.state.feeling == ""
                ? this.setState({ feeling: "Perfect" })
                : this.setState({ feeling: "" });
            }}
          >
            <Text style={{ textAlign: "center", fontSize: 30 }}>😀</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              margin: 4,
              backgroundColor: this.state.feeling == "Good" ? "#FC1CA9" : "white",
              width: 50,
              height: 50,
              borderRadius: 20,
              justifyContent: "center",
              alignContent: "center",
              elevation: 20,
            }}
            onPress={() => {
              this.state.feeling == ""
                ? this.setState({ feeling: "Good" })
                : this.setState({ feeling: "" });
            }}
          >
            <Text style={{ textAlign: "center", fontSize: 30 }}>🙂</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              margin: 4,
              backgroundColor: this.state.feeling == "Balanced" ? "#FC1CA9" : "white",
              width: 50,
              height: 50,
              borderRadius: 20,
              justifyContent: "center",
              alignContent: "center",
              elevation: 20,
            }}
            onPress={() => {
              this.state.feeling == ""
                ? this.setState({ feeling: "Balanced" })
                : this.setState({ feeling: "" });
            }}
          >
            <Text style={{ textAlign: "center", fontSize: 30 }}>😐</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              margin: 4,
              backgroundColor: this.state.feeling == "Sleepy" ? "#FC1CA9" : "white",
              width: 50,
              height: 50,
              borderRadius: 20,
              justifyContent: "center",
              alignContent: "center",
              elevation: 20,
            }}
            onPress={() => {
              this.state.feeling == ""
                ? this.setState({ feeling: "Sleepy" })
                : this.setState({ feeling: "" });
            }}
          >
            <Text style={{ textAlign: "center", fontSize: 30 }}>🥱</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              margin: 4,
              backgroundColor: this.state.feeling == "Bad" ? "#FC1CA9" : "white",
              width: 50,
              height: 50,
              borderRadius: 20,
              justifyContent: "center",
              alignContent: "center",
              elevation: 20,
            }}
            onPress={() => {
              this.state.feeling == ""
                ? this.setState({ feeling: "Bad" })
                : this.setState({ feeling: "" });
            }}
          >
            <Text style={{ textAlign: "center", fontSize: 30 }}>😴</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "column" }}>
          <TouchableOpacity style={styles.submitButton} onPress={()=>{
            this.submitSleep();

            this.props.navigation.navigate("Main")
          }}>
            <Text style={{ textAlign: "center", fontSize: 25, color:'white'}}>
              Submit
            </Text>
          </TouchableOpacity>
        </View>
        
      </View>
    );
  };

  sleepContent = () => {
    return (
      <View style={{borderRadius:20,alignItems:'center'}}>
        <LineChart
          data={{
            labels: [this.state.data7.date, this.state.data6.date, this.state.data5.date, this.state.data4.date, this.state.data3.date, this.state.data2.date, this.state.data1.date],
            datasets: [
              {
                data: [Number(this.state.st7), Number(this.state.st6), Number(this.state.st5), Number(this.state.st4), Number(this.state.st3), Number(this.state.st2), Number(this.state.st1)],
              },
            ],
          }}
          width={Dimensions.get("window").width*0.9} // from react-native
          height={230}
          yAxisSuffix="Hour"
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: "#e26a00",
            backgroundGradientFrom: "#F2F2F2",
            backgroundGradientTo: "#F2F2F2",
            decimalPlaces: 0, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(252, 28, 169, ${opacity})`,
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
            width:Dimensions.get("window").width*0.9,
            borderRadius:20,
            elevation:20,
            
          }}
        />
      </View>
    );
  };

  score = () => {
    const score = this.state.sleepScore;
    return (
      <View style={{width:Dimensions.get("window").width, height:Dimensions.get("window").height, alignItems:"center", marginTop:20}}>
        <View style={{width:Dimensions.get("window").width*0.4, height:Dimensions.get("window").width*0.4, backgroundColor:"#FC1CA9", elevation:20, borderRadius:120, alignItems:"center", justifyContent:"center"}}>
        <View style={{width:Dimensions.get("window").width*0.35, height:Dimensions.get("window").width*0.35, backgroundColor:"white", elevation:20, borderRadius:120, alignItems:"center", justifyContent:"center"}}>
          <Text style={{fontSize:60}}>
            {score.sleepScore}
          </Text>
        </View>
        </View>
      </View>
    );
  };

  render() {
    return (
      <View>
        <StatusBar hidden={true} />
        <ScrollView style={{backgroundColor:"#FD76CB", height:Dimensions.get("window").height,width:Dimensions.get("window").width}}>
          <View >
            <this.sleepForm />
          <this.sleepContent />
          <this.score />
          </View>        
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FD76CB",
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
    backgroundColor: "white",
    elevation: 20,
  },
  submitButton: {
    marginBottom:20,
    borderRadius: 20,
    textAlign: "center",
    alignContent: "center",
    justifyContent: "center",
    alignSelf: "center",
    width: 300,
    padding: 10,
    backgroundColor: "#FC1CA9",
  },
});
