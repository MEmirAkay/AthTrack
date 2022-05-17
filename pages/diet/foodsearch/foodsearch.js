import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Alert,
  TouchableOpacity,
  TextInput,
  Modal,
  FlatList,
} from "react-native";

import { Component, useEffect, useState } from "react";

export default class FoodSearch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      kCal: 0,
      foodName: "",
      foodGr: 0,
      foodCarb: 0,
      foodProt: 0,
      foodFat: 0,

      dataSource: [],

      selectedFoodId: 0,
      selectedFoodGr: 0,
      selectedFoodCarb: 0,
      selectedFoodProt: 0,
      selectedFoodFat: 0,
      selectedFoodGrMemo: 0,
      selectedFoodName: "",

      date: "",
    };
  }

  postNewFood = () => {
    if (
      this.state.foodName == "" ||
      this.state.foodCarb == 0 ||
      this.state.foodProt == 0 ||
      this.state.foodFat == 0 ||
      this.state.foodGr == 0
    ) {
      Alert.alert("Please fill all fields");
    } else {
      console.log("Posting: \n");
      console.log("Food Name: " + this.state.foodName);
      console.log("Gr: " + this.state.foodGr);
      console.log("Carb: " + this.state.foodCarb);
      console.log("Prot: " + this.state.foodProt);
      console.log("Fat: " + this.state.foodFat);
      console.log("Kcal: " + this.state.kCal);

      fetch(
        "https://mustafaemirakay.com/pages/projects/bitirme/api/foodNew.php",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            foodName: this.state.foodName,
            foodGr: this.state.foodGr,
            foodCarbgr: this.state.foodCarb,
            foodProtgr: this.state.foodProt,
            foodFatgr: this.state.foodFat,
            foodKcal: this.state.kCal,
          }),
        }
      );
    }
  };

  dietForm = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [kcal, setKcal] = useState(0);
    const [carb, setCarb] = useState(0);
    const [prot, setProt] = useState(0);
    const [fat, setFat] = useState(0);

    return (
      <View>
        <Modal visible={modalOpen} animationType="slide" transparent={true}>
          <View style={styles.modalContainer}>
            <View style={styles.modalRow}>
              <TextInput
                style={styles.modaInput}
                placeholder="Name"
                keyboardType="web-search"
                onChangeText={(e) => this.setState({ foodName: e })}
              />
            </View>

            <View style={styles.modalRow}>
              <TextInput
                style={styles.modaInput}
                placeholder="Carbohydrate (gr)"
                keyboardType="numeric"
                onChangeText={(e) => {
                  setCarb(e);
                  this.setState({ foodCarb: e });
                  setKcal(carb * 4 + prot * 4 + fat * 9);
                  console.log(
                    "carb :" +
                      carb +
                      " " +
                      "prot: " +
                      prot +
                      " " +
                      "fat: " +
                      fat
                  );
                }}
              />
            </View>
            <View style={styles.modalRow}>
              <TextInput
                style={styles.modaInput}
                placeholder="Protein (gr)"
                keyboardType="numeric"
                onChangeText={(e) => {
                  setProt(e);
                  this.setState({ foodProt: e });
                  setKcal(carb * 4 + prot * 4 + fat * 9);
                  console.log(
                    "carb :" +
                      carb +
                      " " +
                      "prot: " +
                      prot +
                      " " +
                      "fat: " +
                      fat
                  );
                }}
              />
            </View>

            <View style={styles.modalRow}>
              <TextInput
                style={styles.modaInput}
                placeholder="Fat (gr)"
                keyboardType="numeric"
                onChangeText={(e) => {
                  setFat(e);
                  this.setState({ foodFat: e });
                  setKcal(carb * 4 + prot * 4 + fat * 9);
                  console.log(
                    "carb :" +
                      carb +
                      " " +
                      "prot: " +
                      prot +
                      " " +
                      "fat: " +
                      fat
                  );
                }}
              />
            </View>

            <View style={styles.modalRow}>
              <TextInput
                style={styles.modaInput}
                placeholder="gr"
                keyboardType="numeric"
                onChangeText={(e) => {
                  this.setState({ foodGr: e });
                  console.log(
                    "carb :" +
                      carb +
                      " " +
                      "prot: " +
                      prot +
                      " " +
                      "fat: " +
                      fat
                  );
                  setCarb(this.state.foodCarb);
                  setProt(this.state.foodProt);
                  setFat(this.state.foodFat);
                  setKcal(carb * 4 + prot * 4 + fat * 9);
                  this.setState({ kCal: kcal });
                }}
              />
            </View>

            <View style={styles.modalRow}>
              <Text
                style={{
                  color: this.state.foodGr != 0 ? "white" : "transparent",
                  fontSize: 30,
                }}
              >
                {kcal} kcal
              </Text>
            </View>

            <View style={styles.modalCol}>
              <TouchableOpacity
                style={styles.Submit}
                onPress={() => {
                  setModalOpen(false);
                  this.postNewFood();
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

        <View style={{ flexDirection: "column" }}>
          <TouchableOpacity
            style={styles.submitButton}
            onPress={() => {
              setModalOpen(true);
            }}
          >
            <Text style={{ color: "white", fontSize: 20, alignSelf: "center" }}>
              Add New Food +
            </Text>
          </TouchableOpacity>

          <View
            style={{
              marginVertical: 20,
              alignSelf: "center",
              justifyContent: "center",
              width: 400,
              backgroundColor: "#c7c7c7",
              height: 1.5,
              borderRadius: 30,
            }}
          ></View>
        </View>
      </View>
    );
  };

  dietRecommended = () => {
    const [filterdData, setfilterdData] = useState([]);
    const [masterData, setmasterData] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [search, setsearch] = useState("");
    const [selectedkcal, setselectedKcal] = useState(0);

    const selectedFoodOperations = (idx) => {
      console.log(idx);

      const grPercent =
        this.state.selectedFoodGr / this.state.selectedFoodGrMemo;
      const carbGr = this.state.selectedFoodCarb * grPercent;
      const protGr = this.state.selectedFoodProt * grPercent;
      const fatGr = this.state.selectedFoodFat * grPercent;

      const foodKcal = carbGr * 4 + protGr * 4 + fatGr * 9;

      fetch(
        "https://mustafaemirakay.com/pages/projects/bitirme/api/newdailyFood.php",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            foodName: this.state.selectedFoodName,
            foodGr: this.state.selectedFoodGr,
            foodCarbgr: carbGr,
            foodProtgr: protGr,
            foodFatgr: fatGr,
            foodKcal: foodKcal,
            date: this.state.date,
          }),
        }
      );
    };

    useEffect(() => {
      fetchPosts();
      const d = new Date();
      const year = d.getFullYear();
      const month = d.getMonth() +1;
      const day = d.getDate();

      const Today = day + "-" + month + "-" + year;

      console.log(Today);
      this.setState({ date: Today });

      return () => {};
    }, []);

    const fetchPosts = () => {
      fetch(
        "https://mustafaemirakay.com/pages/projects/bitirme/api/fetchFoods.php"
      )
        .then((response) => response.json())
        .then((responseJson) => {
          setfilterdData(responseJson);
          setmasterData(responseJson);
          console.log(responseJson);
        });
    };

    const searchFilter = (text) => {
      if (text) {
        const newData = masterData.filter((item) => {
          const itemData = item.foodname
            ? item.foodname.toUpperCase()
            : "".toUpperCase();

          const textData = text.toUpperCase();
          return itemData.indexOf(textData) > -1;
        });

        setfilterdData(newData);
        setsearch(text);
      } else {
        setfilterdData(masterData);
        setsearch(text);
      }
    };

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
              console.log(item.id);
              this.setState({ selectedFoodName: item.foodname });
              this.setState({ selectedFoodId: item.id });
              this.setState({ selectedFoodCarb: item.foodcarbgr });
              this.setState({ selectedFoodProt: item.foodprotgr });
              this.setState({ selectedFoodFat: item.foodfatgr });
              this.setState({ selectedFoodGrMemo: item.foodgr });
              setModalOpen(true);
            }}
          >
            <Text style={{ color: "white", alignSelf: "center", fontSize: 30 }}>
              {item.foodname}
            </Text>
          </TouchableOpacity>
        </View>
      );
    };

    return (
      <View>
        <Modal visible={modalOpen} animationType="slide" transparent={true}>
          <View style={styles.modalContainer}>
            <View style={styles.modalRow}>
              <TextInput
                style={styles.modaInput}
                placeholder="gr"
                keyboardType="numeric"
                onChangeText={(e) => {
                  this.setState({ selectedFoodGr: e });
                }}
              />
            </View>

            <View style={styles.modalCol}>
              <TouchableOpacity
                style={styles.Submit}
                onPress={() => {
                  selectedFoodOperations(this.state.selectedFoodId);
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
        <TextInput
          style={styles.textInput}
          placeholder="Search"
          onChangeText={(text) => searchFilter(text)}
        ></TextInput>
        <FlatList
          style={{ height: 450 }}
          data={filterdData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={ItemView}
        />
      </View>
    );
  };

  render() {

    
    return (
      <SafeAreaView style={styles.safe}>
        <StatusBar hidden={true} />
        <ScrollView>
          <Text
            style={{
              textAlign: "center",
              color: "black",
              fontFamily: "Roboto",
              fontSize: 50,
            }}
          >
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
    width: 300,
    padding: 10,
    elevation: 20,
    backgroundColor: "blue",
  },
  modalContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
    position: "absolute",
    top: 30,
    backgroundColor: "#262a45",
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

    alignItems: "center",
    width: 390,
    backgroundColor: "#202B3F",
  },
  exerciseListContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
});
