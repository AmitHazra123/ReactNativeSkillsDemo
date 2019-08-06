import React, { Component } from 'react';
import {
  View,
  ActivityIndicator,
  StatusBar,
  Alert,
  AsyncStorage
} from 'react-native';

export default class AuthLoadingScreen extends Component {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }

  didFocusSubscription = this.props.navigation.addListener(
    'didFocus',
    payload => {
      this._bootstrapAsync();
    }
  );

  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('userToken');
    this.props.navigation.navigate(userToken ? 'Profile' : 'SignIn');
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <ActivityIndicator size={50} />
        <StatusBar barStyle='default' />
      </View>
    );
  }
}
