import React, { Component } from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

export default class SettingsScreen extends Component {
  static navigationOptions = {
    title: 'Settings'
  };

  render() {
    return (
      <View>
        <Text> SettingsScreen Component </Text>
        <Button
          title='Go to Profile'
          onPress={() => this.props.navigation.navigate('Profile')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({});
