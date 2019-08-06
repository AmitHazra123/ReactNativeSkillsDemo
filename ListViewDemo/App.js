import React, { Component } from "react";
import { StyleSheet, View, FlatList, Text } from "react-native";

class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={[
            { key: "Devin" },
            { key: "Jackson" },
            { key: "James" },
            { key: "Joel" },
            { key: "John" },
            { key: "Jillian" },
            { key: "Jimmy" },
            { key: "Julie" }
          ]}
          renderItem={({ item }) => (<Text style={{ fontSize: 18, padding: 10 }}>{item.key}</Text>)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({});

export default App;
