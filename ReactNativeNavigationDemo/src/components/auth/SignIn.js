import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  AsyncStorage
} from 'react-native';
import IconOptions from '../common/IconOptions';

export default class SignIn extends Component {
  _signInAsync = async () => {
    await AsyncStorage.setItem('userToken', 'abc');
    this.props.navigation.navigate('Profile');
  };

  render() {
    return (
      <View style={styles.container}>
        <View>
          <TouchableOpacity
            onPress={() => this.props.navigation.toggleDrawer()}
          >
            <IconOptions color='gray' />
          </TouchableOpacity>
        </View>
        <View style={styles.headerSection}>
          <Text style={styles.headerText}>Login</Text>
        </View>
        <View style={styles.bodySection}>
          <TextInput
            style={{
              height: 40,
              borderColor: 'gray',
              borderRadius: 5,
              borderWidth: 1,
              width: 300
            }}
            placeholder='Enter User Name'
          />
          <TextInput
            style={{
              height: 40,
              borderColor: 'gray',
              borderRadius: 5,
              borderWidth: 1,
              width: 300,
              marginTop: 20,
              marginBottom: 20
            }}
            placeholder='Enter Password'
          />
          <TouchableHighlight
            underlayColor='#4527a0'
            onPress={this._signInAsync}
            style={{ backgroundColor: '#42a5f5', borderRadius: 5 }}
          >
            <View
              style={{
                width: 300,
                height: 40,
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Text style={{ fontSize: 20, color: 'white' }}>Login</Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1
  },
  headerSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerText: {
    fontSize: 50
  },
  bodySection: {
    flex: 2,
    alignItems: 'center'
  }
});
