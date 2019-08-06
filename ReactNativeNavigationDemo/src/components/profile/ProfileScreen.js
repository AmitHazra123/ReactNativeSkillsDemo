import React, { Component } from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class ProfileScreen extends Component {
  static navigationOptions = {
    title: 'Profile'
  };

  render() {
    return (
      <View>
        <Text> ProfileScreen Component </Text>
        <Ionicons name='logo-skype' />
        <Button
          title='Open a Modal'
          onPress={() => this.props.navigation.navigate('ModalStack')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({});
