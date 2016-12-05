import React, {Component} from 'react';
import ws from '../../server/client';

import {
  Text,
  View,
  TextInput
} from 'react-native';

import { Navigation } from 'react-native-navigation';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Icon, InputGroup, Input } from 'native-base';

var sock;
export default class NewMessageView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bodyText: ''
    }
  }
  updateMessageBody(e) {
    this.setState({bodyText: e.target.value});
  }
  componentDidMount() {
    sock = ws.then(function(socket) {
      socket.subscribe(function(message) {
        console.log('message:', message)
      }) 
    })

  } 
  sendPoof() {
    var that = this
    sock.then(function(socket) {
      console.warn(socket)

      socket.sendMessage('joe', that.state.bodyText)
    })
  }
  render() {
    return (
      <Container>
        <Header>
          <Title>New Message</Title>
        </Header>
        <Content>
          <InputGroup borderType='rounded' >
              <Icon name='ios-home' style={{color:'#384850'}}/>
              <Input placeholder='Send a Poof to'/>
          </InputGroup>
          <InputGroup iconRight>
              <Icon name='ios-swap' style={{color:'#00C497'}}/>
              <Input onChange={this.updateMessageBody.bind(this)} value={this.state.bodyText} placeholder='Enter your Poof here'/>
          </InputGroup>
          <Button onPress={this.sendPoof.bind(this)}>Send</Button>
        </Content>
      </Container>
      )
  }
}