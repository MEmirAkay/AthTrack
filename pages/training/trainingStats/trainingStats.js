import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Dimensions,
  Pressable,
  Alert,
  SectionList,
  TouchableOpacity,
} from "react-native";
import { Component, useEffect } from "react";
import { LineChart } from "react-native-chart-kit";


const ItemView = ({ item }) => {
  return (
    <View>
        <Text style={{ color: "white", alignSelf: "center" }}>
          {item.foodname}
        </Text>
      <View>
      <LineChart
          data={
            {
           
            datasets: [
              {
                data: [1,2,3,4,5,6,7],
                color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
                strokeWidth: 2 // optional
              }
            ],
          }
        }
          width={Dimensions.get("window").width} // from react-native
          height={230}
          yAxisSuffix="KG"
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: "#e26a00",
            backgroundGradientFrom: "#F2F2F2",
            backgroundGradientTo: "#F2F2F2",
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
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
            marginVertical: 8,
            borderRadius: 0,
          }}
        />
      </View>
    </View>
  );
};


export default class TrainingStatsContent extends Component{
  render() {
  return (
    <SafeAreaView>
      <StatusBar hidden={true} />
      <Text
        style={{
          backgroundColor: "#131A26",
          textAlign: "center",
          paddingTop: 10,
          color: "white",
          fontFamily: "Roboto",
          fontSize: 20,
        }}
      >
        Training Stats
      </Text>
      <ScrollView contentContainerStyle={styles.container}>
        <View>
        <LineChart
          data={
            {
            
            datasets: [
              {
                data: [1,2,3,4,5,6,7],
                color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
                strokeWidth: 2 // optional
              }
            ],
          }
        }
          width={Dimensions.get("window").width} // from react-native
          height={230}
          yAxisSuffix="KG"
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: "#e26a00",
            backgroundGradientFrom: "#F2F2F2",
            backgroundGradientTo: "#F2F2F2",
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
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
            marginVertical: 8,
            borderRadius: 0,
          }}
        />
        </View>
      </ScrollView>
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
});
