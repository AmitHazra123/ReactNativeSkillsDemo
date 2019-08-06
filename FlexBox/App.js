/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from "react";
import { StyleSheet, View, Text } from "react-native";

const App = () => {
  return (
    <View style={styles.mainView}>
      <View style={styles.subView1} />
      <View style={styles.subView2} />
      <View style={styles.subView3} />
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    display: "flex",
    flexDirection: "column",
    // flexDirection: "column-reverse",
    // flexDirection: "row",
    // flexDirection: "row-reverse",
    // justifyContent: "space-between",
    justifyContent: "space-around",
    // alignItems: "flex-start",
    flex: 1,
    backgroundColor: "yellow"
  },
  subView1: {
    // flex: 1,
    height: 100,
    backgroundColor: "red"
  },
  subView2: {
    // flex: 2,
    height: 100,
    backgroundColor: "orange"
  },
  subView3: {
    // flex: 3,
    height: 100,
    backgroundColor: "green"
  }
});

export default App;
