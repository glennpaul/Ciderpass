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
  FlatList,
} from "react-native";
import Cider from "./src/components/CiderItem";
import CiderInput from "./src/components/CiderInput";

export default function App() {
  const [currentCiders, addCiderToList] = useState([]);
  const addNewCiderToList = ciderToAdd => {
    addCiderToList((currentCiders) => [
      ...currentCiders,
      { id: Math.random().toString(), val: ciderToAdd },
    ]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <CiderInput onAddCider = {addNewCiderToList}/>
      <FlatList
        style={styles.flatlist}
        keyExtractor={(item, index) => item.id}
        data={currentCiders}
        renderItem={(ciderItem) => <Cider cider={ciderItem.item.val} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    backgroundColor: "white",
  },
  flatlist: {
    paddingTop: 10,
    height: "100%",
  },
  listContainer: {
    flexDirection: "column",
    backgroundColor: "white",
  },
});
