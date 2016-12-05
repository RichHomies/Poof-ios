import React, {Component} from 'react';

import {
  Text,
  View,
  TextInput
} from 'react-native';

import { Navigation } from 'react-native-navigation';

export default class NewMessageView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
  }
  render() {
    return (
      <View>
        <TextInput onChangeText={(text) => this.setState({text})} editable={true} value={this.state.text} maxLength={40} />
      </View>
      )
  }
}