import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableWithoutFeedback,
  SafeAreaView,
  Image,
  Button,
  Alert,
  TextInput,
  ScrollView,
} from "react-native";

export default function App() {
  const [newCider, addNewCider] = useState("");
  const [currentCiders, addCiderToList] = useState([]);
  const textInputHandler = (enteredText) => {
    addNewCider(enteredText);
  };
  const addNewCiderToList = () => {
    addCiderToList((currentCiders) => [...currentCiders, newCider]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.ciderRow}>
        <TextInput
          placeholder="Add cider here..."
          style={styles.textInputStyle}
          onChangeText={textInputHandler}
          value={newCider}
        ></TextInput>
        <View style={styles.buttonView}>
          <Button
            title="Add Cider"
            onPress={() => {
              addNewCiderToList();
            }}
          />
        </View>
      </View>
      <ScrollView style={styles.listContainer}>
        {currentCiders.map((cider) => (
            <View style={styles.rounder} >
          <Text style={styles.ciderCard} key={cider}>{cider}</Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    backgroundColor: "white",
  },
  listContainer: {
    flexDirection: "column",
    backgroundColor: "white",
  },
  ciderRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    marginLeft: 20,
    marginRight: 10,
  },
  textInputStyle: {
    flex: 1,
    backgroundColor: "white",
    borderBottomWidth: 2,
    borderBottomColor: "dodgerblue",
    marginRight: 10,
  },
  buttonView: {
    backgroundColor: "white",
    alignContent: "center",
    justifyContent: "center",
  },
  ciderCard: {
    margin: 5,
    padding: 5,
  },
  rounder: {
    backgroundColor: "dodgerblue",
    borderRadius: 10,
    borderWidth: 3,
    margin: 5,
  },
});
