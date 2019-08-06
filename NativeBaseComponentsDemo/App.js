import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import {
  Container,
  Button,
  Text,
  Header,
  Left,
  Icon,
  Body,
  Title,
  Right,
  Content,
  Footer,
  FooterTab,
  Accordion,
  View
} from 'native-base';

const dataArray = [
  { title: 'First Element', content: 'Lorem ipsum dolor sit amet' },
  { title: 'Second Element', content: 'Lorem ipsum dolor sit amet' },
  { title: 'Third Element', content: 'Lorem ipsum dolor sit amet' }
];

export default class App extends Component {
  _renderHeader(item, expanded) {
    return (
      <View
        style={{
          flexDirection: 'row',
          padding: 10,
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: '#A9DAD6'
        }}
      >
        <Text> {item.title}</Text>
        {expanded ? (
          <Icon style={{ fontSize: 18 }} name='remove-circle' />
        ) : (
          <Icon style={{ fontSize: 18 }} name='add-circle' />
        )}
      </View>
    );
  }

  _renderContent(item) {
    return (
      <Text
        style={{
          padding: 10,
          backgroundColor: '#e3f1f1',
          fontStyle: 'italic'
        }}
      >
        {item.content}
      </Text>
    );
  }

  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
          <Accordion
            icon='add'
            expandedIcon='remove'
            dataArray={dataArray}
            contentStyle={{ backgroundColor: '#ddecf8' }}
            renderHeader={this._renderHeader}
            renderContent={this._renderContent}
          />
        </Content>
        <Footer>
          <FooterTab>
            <Button full>
              <Text>Footer</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

const styles = StyleSheet.create({});
