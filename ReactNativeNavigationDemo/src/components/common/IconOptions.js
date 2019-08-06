import React, { Component } from 'react';
import { View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class IconOptions extends Component {
  render() {
    return (
      <View style={{ height: 25, width: 25, margin: 10 }}>
        <Ionicons name='ios-options' color={this.props.color} size={30} />
      </View>
    );
  }
}
