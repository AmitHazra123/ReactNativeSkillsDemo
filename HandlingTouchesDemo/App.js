import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Button,
  Alert,
  TouchableHighlight,
  Text,
  TouchableOpacity,
  TouchableNativeFeedback,
  TouchableWithoutFeedback
} from "react-native";

class App extends Component {
  _onPressEvent() {
    Alert.alert("You tapped the button!");
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "space-around"
        }}
      >
        <Button title="Press Me" color="blue" onPress={this._onPressEvent} />
        <TouchableHighlight underlayColor="orange" onPress={this._onPressEvent}>
          <View>
            <Text style={{ color: "blue" }}>TouchableHighlight</Text>
          </View>
        </TouchableHighlight>
        <TouchableOpacity onPress={this._onPressEvent}>
          <View>
            <Text style={{ color: "blue" }}>TouchableOpacity</Text>
          </View>
        </TouchableOpacity>
        <TouchableNativeFeedback onPress={this._onPressEvent}>
          <View>
            <Text style={{ color: "blue" }}>TouchableNativeFeedback</Text>
          </View>
        </TouchableNativeFeedback>
        <TouchableWithoutFeedback onPress={this._onPressEvent}>
          <View>
            <Text style={{ color: "blue" }}>TouchableWithoutFeedback</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableHighlight
          underlayColor="orange"
          onLongPress={this._onPressEvent}
        >
          <View>
            <Text style={{ color: "blue" }}>TouchableHighlightOnLongPress</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({});

export default App;
