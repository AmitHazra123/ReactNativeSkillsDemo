import React from 'react';
import { View, SectionList, Text, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <SectionList
        sections={[
          {
            title: 'D',
            data: ['Devin']
          },
          {
            title: 'J',
            data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel']
          }
        ]}
        renderItem={({ item }) => (
          <Text style={{ padding: 10, fontSize: 18, height: 44 }}>{item}</Text>
        )}
        renderSectionHeader={({ section }) => (
          <Text
            style={{
              fontSize: 14,
              paddingTop: 2,
              paddingBottom: 2,
              paddingLeft: 10,
              paddingRight: 10,
              fontWeight: 'bold'
            }}
          >
            {section.title}
          </Text>
        )}
        keyExtractor={(item, index) => index}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default App;
