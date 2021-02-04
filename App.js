import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableWithoutFeedback, SafeAreaView, Image, Button, Alert } from 'react-native';
import CiderCard from './src/Components/CiderCard';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>This is the start of CiderPass!</Text>
      <Image blurRadius={2}
      source={require("./assets/favicon.png")}/>
      <Image 
        resizeMode="contain"
        blurRadius={10}
        source={{
        uri:"https://picsum.photos/200/300",
        height:300,
        width:200
        }}/>
        <Button title="Click me!" color="dodgerblue" onPress={() => Alert.alert("Message from Paul","Do something!",
        [
            { text: "Do work!", onPress: () => console.log("Do work was pressed.") },
            { text: "Watch Lupin..." },
        ]
        )}/>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightskyblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
