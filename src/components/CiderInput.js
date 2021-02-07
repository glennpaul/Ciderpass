import React, { useState } from "react";
import { View, TextInput, StyleSheet, Button } from "react-native";

const CiderInput = (props) => {
  const [newCider, addNewCider] = useState("");
  const textInputHandler = (enteredText) => {
    addNewCider(enteredText);
  };
  return (
    <View style={styles.ciderRow}>
      <TextInput
        placeholder="Karen is #3 in duolingo"
        style={styles.textInputStyle}
        onChangeText={textInputHandler}
        value = {newCider}
      ></TextInput>
      <View style={styles.buttonView}>
        <Button
          title="Add Cider"
          color="black"
          onPress={() => { 
            props.onAddCider(newCider);
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ciderRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    marginLeft: 20,
    marginRight: 10,
  },
  textInputStyle: {
    flex: 1,
    fontSize: 20,
    backgroundColor: "white",
    borderBottomWidth: 2,
    borderBottomColor: "dodgerblue",
    marginRight: 10,
  },
  buttonView: {
    borderRadius: 10,
    backgroundColor: "dodgerblue",
    alignContent: "center",
    justifyContent: "center",
    borderWidth: 2,
  },
});

export default CiderInput;
