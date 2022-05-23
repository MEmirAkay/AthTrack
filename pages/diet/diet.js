import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from "react-native";

import { Component, useEffect } from "react";
import { PieChart } from "react-native-chart-kit";

export default class Diet extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataSource: [],
      date: "",

      dailykcal: 0,
      dailykarb: 0,
      dailyprot: 0,
      dailyfat: 0,

      dailykarbPerc: 0,
      dailyprotPerc: 0,
      dailyfatPerc: 0,
    };
  }

  dietForm = () => {
    useEffect(() => { 
      
      const Today = new Date().getDate() + "-" + (new Date().getMonth()+1) + "-" + new Date().getFullYear();
      this.setState({date : Today});
      console.log(Today);

      fetch("https://mustafaemirakay.com/pages/projects/bitirme/api/todaysFoods.php", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          date: Today,
        }),
      })
        .then((response) => response.json())
        .then((responseJson) => {
          this.setState({ dataSource: responseJson });
          console.log(responseJson);
          
        });

      fetch("https://mustafaemirakay.com/pages/projects/bitirme/api/todaysMacronutrients.php", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          date: Today,
        }),
      })
        .then((response) => response.json())
        .then((responseJson) => {
          console.log("responsejson");
          console.log(responseJson);

          this.setState({ dailykcal: responseJson[0].kcalsum });
          this.setState({ dailykarb: responseJson[0].carbsum });
          this.setState({ dailyprot: responseJson[0].protsum });
          this.setState({ dailyfat: responseJson[0].fatsum });

          console.log("daily carb:");
          console.log(typeof(this.state.dailykarb));

          this.setState({
            dailykarbPerc:
              (this.state.dailykarb * 100) /
              (this.state.dailykarb +
                this.state.dailyprot +
                this.state.dailyfat),
          });
          this.setState({
            dailyprotPerc:
              (this.state.dailyprot * 100) /
              (this.state.dailykarb +
                this.state.dailyprot +
                this.state.dailyfat),
          });
          this.setState({
            dailyfatPerc:
              (this.state.dailyfat * 100) /
              (this.state.dailykarb +
                this.state.dailyprot +
                this.state.dailyfat),
          });
        });

      return () => {};
    }, []);
    return (
      <View>
        <View>
          <TouchableOpacity
            style={styles.submitButton}
            onPress={() => this.props.navigation.navigate("FoodSearch")}
          >
            <Text style={{ color: "white", fontSize: 20, alignSelf:"center" }}>Add +</Text>
          </TouchableOpacity>
        </View>

        <View style={{ alignSelf: "center" }}>
          <PieChart
            data={[
              {
                name: "Carbonhydrate",
                population: this.state.dailykarbPerc ? Math.round(this.state.dailykarbPerc) : 0,
                color: "red",
                legendFontColor: "#7F7F7F",
                legendFontSize: 15,
              },
              {
                name: "Protein",
                population: this.state.dailyprotPerc ? Math.round(this.state.dailyprotPerc) : 0,
                color: "blue",
                legendFontColor: "#7F7F7F",
                legendFontSize: 15,
              },
              {
                name: "Fat",
                population: this.state.dailyfatPerc ? Math.round(this.state.dailyfatPerc) : 0,
                color: "yellow",
                legendFontColor: "#7F7F7F",
                legendFontSize: 15,
              },
            ]}
            width={Dimensions.get("window").width}
            height={Dimensions.get("window").height*0.25}
            chartConfig={{
              backgroundGradientFrom: "#1E2923",
              backgroundGradientFromOpacity: 0,
              backgroundGradientTo: "#08130D",
              backgroundGradientToOpacity: 0.5,
              color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
              strokeWidth: 2, // optional, default 3
              barPercentage: 0.5,
              useShadowColorFromDataset: false, // optional
            }}
            accessor={"population"}
            backgroundColor={"transparent"}
            paddingLeft={"15"}
            center={[0, 0]}
            absolute
          />
        </View>
        <Text style={{ alignSelf: "center", fontSize: 20 }}>
      {this.state.dailykcal} kcal
        </Text>
       
      </View>
    );
  };



  dietRecommended = () => {

    const ItemView = ({ item }) => {
      return (
        <View>
          <TouchableOpacity
            style={{
              borderRadius: 20,
              margin: 8,
              backgroundColor: "blue",
              padding: 20,
            }}
            onPress={() => {
              console.log(this.state.dataSource);
              console.log("aa");
              console.log(item);
              this.setState({ selectedFoodName: item.foodname });
              this.setState({ selectedFoodId: item.id });
              this.setState({ selectedFoodCarb: item.foodcarbgr });
              this.setState({ selectedFoodProt: item.foodprotgr });
              this.setState({ selectedFoodFat: item.foodfatgr });
              this.setState({ selectedFoodGrMemo: item.foodgr });
              //setModalOpen(true); // Silmek istediğinize emin misiniz modalı çıksın
            }}
          >
            <Text style={{ color: "white", alignSelf: "center" }}>
              {item.foodname}
            </Text>
          </TouchableOpacity>
        </View>
      );
    };
    return (
      <View>
        <FlatList
        style={{height:Dimensions.get("window").height*0.58}}
        data={this.state.dataSource} renderItem={ItemView} />
      </View>
    );
  };

  render() {
    return (
      <SafeAreaView>
        <StatusBar hidden={true} />
        <ScrollView>
          <Text
            style={{
              textAlign: "center",
              color: "black",
              fontFamily: "Roboto",
              fontSize: 50,
            }}>
            Diet
          </Text>

          <this.dietForm />
        </ScrollView>

        <this.dietRecommended />
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
    width: Dimensions.get("window").width*0.9,
    padding: 10,
    elevation: 20,
    backgroundColor: "blue",
  },
});
