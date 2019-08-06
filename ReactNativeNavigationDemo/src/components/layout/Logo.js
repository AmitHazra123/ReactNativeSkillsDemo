import React, { Component } from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';

export default class Logo extends Component {
  render() {
    return (
      <View>
        <Image
          source={{
            uri:
              'https://upload.wikimedia.org/wikipedia/commons/1/18/React_Native_Logo.png'
          }}
          style={{ width: 50, height: 40 }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({});
