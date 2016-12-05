import React, {Component} from 'react';

import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

import { Container, Header, Title, Content, Footer, FooterTab, Button, Icon, Fab } from 'native-base';
import { Navigation } from 'react-native-navigation';

const styles = StyleSheet.create({
  button: {
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 10,
    marginTop: 10,
    color: 'blue'
  }
});

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 'true'
    };
  }
  render() {
    return (
      <Container>
        <Header>
        </Header>
        <Content>
          <Title>Poof</Title>
          <Fab
              active={this.state.active}
              direction="right"
              containerStyle={{ marginLeft: 10 }}
              style={{ backgroundColor: '#5067FF', fontSize: 30 }}
              position="topLeft"
              onPress={() => this.setState({ active: !this.state.active })}
          >
            <Icon name="md-arrow-forward" />
          </Fab>
          <Button transparent>
              <Icon name='ios-call' />
          </Button>  
        </Content>
      </Container>
      )
  }
  onPushPress() {
      this.props.navigator.push({
        screen: "app.ChatList"
      });
  }
}