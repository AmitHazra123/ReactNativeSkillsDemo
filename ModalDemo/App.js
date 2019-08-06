import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TouchableHighlight,
  Text,
  Modal,
  Alert
} from 'react-native';

export default class App extends Component {
  state = {
    modalVisible: false
  };

  setModalVisible(visible) {
    this.setState({
      modalVisible: visible
    });
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: this.state.modalVisible ? 'gray' : 'white',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Modal
          animationType='slide'
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed');
          }}
        >
          <View
            style={{
              flex: 1,
              marginVertical: 140,
              marginHorizontal: 30,
              backgroundColor: 'white'
            }}
          >
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <Text style={{ fontSize: 20, fontWeight: '10' }}>
                Hello World!
              </Text>
              <TouchableHighlight
                onPress={() => this.setModalVisible(false)}
                style={{
                  backgroundColor: '#2196F3',
                  height: 40,
                  width: 120,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 5
                }}
                underlayColor='#673AB7'
              >
                <Text
                  style={{ color: 'white', fontSize: 20, fontWeight: '10' }}
                >
                  Hide Modal
                </Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>
        <TouchableHighlight
          onPress={() => this.setModalVisible(true)}
          style={{
            backgroundColor: '#2196F3',
            height: 40,
            width: 120,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 5
          }}
          underlayColor='#673AB7'
        >
          <Text style={{ color: 'white', fontSize: 20, fontWeight: '10' }}>
            Show Modal
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
