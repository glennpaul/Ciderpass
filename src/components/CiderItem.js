import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Cider = (props) => {
  return (
    <View style={styles.rounder}>
      <Text style={styles.ciderCard}>{props.cider}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  ciderCard: {
    margin: 5,
    padding: 5,
  },
  rounder: {
    backgroundColor: "dodgerblue",
    borderRadius: 10,
    borderWidth: 3,
    margin: 5,
    borderWidth: 2,
  },
});

export default Cider;
