import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Dimensions,
  FlatList,
} from "react-native";
import { Component } from "react";
import { LineChart } from "react-native-chart-kit";

const dataJson = [
  { name: "Squat", lifts: [80, 85, 90, 95, 100, 105, 110, 115, 120, 125, 130] },
  {
    name: "Deadlift",
    lifts: [180, 185, 190, 195, 200, 205, 210, 215, 220, 225, 230],
  },
  {
    name: "Bench Press",
    lifts: [80, 85, 90, 95, 100, 105, 110, 115, 120, 125, 130],
  },
];

const ItemView = ({ item }) => {
  return (
    <View style={{ width: Dimensions.get("window").width }}>

      
      <View
        style={{
          width: Dimensions.get("window").width * 0.9,
          height: 310,
          backgroundColor: "#F2F2F2",
          alignSelf: "center",
          padding: 20,
          margin: 10,
          borderRadius: 20,
          elevation: 20,
        }}
      >
        
          <Text style={{ color: "black", alignSelf: "center" , fontSize:20}}>
            {item.name}
          </Text>
      

        <View>
          <LineChart
            data={{
              datasets: [
                {
                  data: item.lifts,
                  color: (opacity = 1) => `rgba(13, 65, 244, ${opacity})`, // optional
                  strokeWidth: 5, // optional
                },
              ],
            }}
            width={Dimensions.get("window").width * 0.8} // from react-native
            height={250}
            yAxisSuffix="KG"
            yAxisInterval={30} // optional, defaults to 1
            chartConfig={{
              backgroundColor: "#F2F2F2",
              backgroundGradientFrom: "#F2F2F2",
              backgroundGradientTo: "#F2F2F2",
              decimalPlaces: 1, // optional, defaults to 2dp
              color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              style: {
                borderRadius: 20,
              },
              propsForDots: {
                r: "4",
                strokeWidth: "1",
                stroke: "black",
              },
            }}
            style={{
              marginVertical: 10,
              marginHorizontal: 10,
              alignSelf: "center",

              borderRadius: 0,
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default class TrainingStatsContent extends Component {
  render() {
    return (
      <SafeAreaView>
        <StatusBar hidden={true} />

        <View style={styles.container}>
          <FlatList
            style={{
              height: Dimensions.get("window").height,
              backgroundColor: "#6B9FED",
            }}
            data={dataJson}
            renderItem={ItemView}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
        <ScrollView contentContainerStyle={styles.container}></ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#6B9FED",
    alignItems: "center",
    justifyContent: "center",
  },
});
