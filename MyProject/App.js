import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

const App = () => {
  return (
    <View style={styles.mainView}>
      <View style={{ top: 50 }}>
        <Greeting name="Amit" />
        <Greeting name="Pradyut" />
      </View>
      <View style={{ top: 100 }}>
        <Blink text="My Name is Amit Hazra" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "orange"
  },
  textStyle: {
    fontSize: 30,
    color: "blue"
  }
});

class Greeting extends Component {
  render() {
    return (
      <View style={{ alignItems: "center" }}>
        <Text style={styles.textStyle}>Hello {this.props.name}!</Text>
      </View>
    );
  }
}

class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowingText: true
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState(state => ({
        isShowingText: !state.isShowingText
      }));
    }, 1000);
  }

  render() {
    if (!this.state.isShowingText) {
      return null;
    }

    return (
      <View style={{ alignItems: "center" }}>
        <Text style={styles.textStyle}>{this.props.text}</Text>
      </View>
    );
  }
}

export default App;
