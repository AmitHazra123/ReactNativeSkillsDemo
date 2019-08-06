import React, { Component } from 'react';
import { Text, StyleSheet, View, Button, AsyncStorage } from 'react-native';
import Logo from './Logo';

export default class HomeScreen extends Component {
  //static navigationOptions = {
  // title: 'Home'
  // headerTitle: <Logo />,
  // headerRight: (
  //   <Button onPress={() => alert('This is a button!')} title='Info' />
  // )
  // headerStyle: {
  //   backgroundColor: '#f4511e'
  // },
  // headerTintColor: '#fff',
  // headerTitleStyle: {
  //   fontWeight: 'bold'
  // }
  //};

  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: <Logo />,
      headerRight: (
        <Button onPress={navigation.getParam('increaseCount')} title='+1' />
      )
    };
  };

  componentDidMount() {
    this.props.navigation.setParams({ increaseCount: this._increaseCount });
  }

  state = {
    count: 0
  };

  _increaseCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  _signOutAsync = async () => {
    await AsyncStorage.clear();
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'space-around' }}>
        <Text> HomeScreen Component </Text>
        <Text> Count {this.state.count} </Text>
        <Button
          title='Go to Details'
          onPress={() =>
            this.props.navigation.navigate('Details', {
              itemId: 86,
              otherParam: 'anything you want here'
            })
          }
        />
        <Button title='Log Out' onPress={this._signOutAsync} />
      </View>
    );
  }
}

const styles = StyleSheet.create({});
