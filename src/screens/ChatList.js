import React, {Component} from 'react';

import {
  Text,
  View
} from 'react-native';

import { Navigation } from 'react-native-navigation';

export default class ChatList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View>
        <Text>This is the Chat List</Text>
      </View>
      )
  }
}