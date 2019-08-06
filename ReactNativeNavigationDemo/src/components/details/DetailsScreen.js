import React, { Component } from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';
import IconOptions from '../common/IconOptions';

export default class DetailsScreen extends Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state;

    return {
      title: params ? params.otherParam : 'A Nested Details Screen',
      headerStyle: {
        backgroundColor: navigationOptions.headerTintColor
      },
      headerTintColor: navigationOptions.headerStyle.backgroundColor,
      headerLeft: (
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <IconOptions color={navigationOptions.headerStyle.backgroundColor} />
        </TouchableOpacity>
      )
    };
  };

  render() {
    const { navigation } = this.props;
    const itemId = navigation.getParam('itemId');
    const otherParam = navigation.getParam('otherParam');
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <Text> Details Screen </Text>
          <Text>{JSON.stringify(itemId)}</Text>
          <Text>{JSON.stringify(otherParam)}</Text>
        </View>
        <View style={{ flex: 1 }}>
          <Button
            title='Go to Details'
            onPress={() => this.props.navigation.navigate('Details')}
          />
        </View>
        <View style={{ flex: 1 }}>
          <Button
            title='Go to Details... again'
            onPress={() => this.props.navigation.push('Details')}
          />
        </View>
        <View style={{ flex: 1 }}>
          <Button
            title='Go to Home'
            onPress={() => this.props.navigation.navigate('Home')}
          />
        </View>
        <View style={{ flex: 1 }}>
          <Button
            title='Go Back'
            onPress={() => this.props.navigation.goBack()}
          />
        </View>
        <View style={{ flex: 1 }}>
          <Button
            title='Update the title'
            onPress={() =>
              this.props.navigation.setParams({ otherParam: 'Updated!' })
            }
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
