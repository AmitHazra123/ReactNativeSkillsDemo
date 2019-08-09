import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from './src/navigation/Home';
import AlbumDetails from './src/navigation/AlbumDetails';

// Redux
import { Provider } from 'react-redux';
import store from './src/store';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({});

const HomeStack = createStackNavigator(
  {
    Home: {
      title: 'Music Player',
      screen: Home
    },
    AlbumDetails: {
      screen: AlbumDetails
    }
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none'
  }
);

const AppContainer = createAppContainer(HomeStack);
