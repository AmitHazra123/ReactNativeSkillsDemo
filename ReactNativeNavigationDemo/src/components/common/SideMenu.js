import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  StatusBar
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationActions } from 'react-navigation';
import IconOptions from './IconOptions';

export default class SideMenu extends Component {
  navigateToScreen = route => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
    this.props.navigation.closeDrawer();
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor='#ef5350' barStyle='light-content' />
        <TouchableOpacity onPress={() => this.props.navigation.toggleDrawer()}>
          <IconOptions color='gray' />
        </TouchableOpacity>
        <Image
          source={{
            uri:
              'https://upload.wikimedia.org/wikipedia/commons/1/18/React_Native_Logo.png'
          }}
          style={{
            width: 100,
            height: 100,
            alignSelf: 'center',
            borderRadius: 70
          }}
        />
        <ScrollView>
          <View>
            <Text style={styles.sectionHeadingStyle}>Section 1</Text>
            <TouchableOpacity
              style={styles.navSectionStyle}
              onPress={this.navigateToScreen('Home')}
            >
              <Ionicons
                name='ios-home'
                size={25}
                color={'white'}
                style={{ alignSelf: 'center' }}
              />
              <Text
                style={styles.navItemStyle}
                onPress={this.navigateToScreen('Home')}
              >
                Home
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.sectionHeadingStyle}>Section 2</Text>
            <TouchableOpacity
              style={styles.navSectionStyle}
              onPress={this.navigateToScreen('Modal')}
            >
              <Ionicons
                name='ios-options'
                size={25}
                color={'white'}
                style={{ alignSelf: 'center' }}
              />
              <Text style={styles.navItemStyle}>Settings</Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.sectionHeadingStyle}>Authentication</Text>
            <TouchableOpacity
              style={styles.navSectionStyle}
              onPress={this.navigateToScreen('Auth')}
            >
              <Ionicons
                name='person'
                size={25}
                color={'white'}
                style={{ alignSelf: 'center' }}
              />
              <Text style={styles.navItemStyle}>Login</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
        <View>
          <Text>This is my fixed footer</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    flex: 1,
    padding: 5
  },
  sectionHeadingStyle: {
    paddingVertical: 10,
    paddingHorizontal: 5,
    fontSize: 15
  },
  navSectionStyle: {
    flexDirection: 'row',
    backgroundColor: '#ba68c8',
    paddingLeft: 10
  },
  navItemStyle: {
    padding: 10,
    color: 'white',
    fontSize: 20
  }
});
