import React, {Component} from 'react';

import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

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
  }
  render() {
    return (
      <View>
        <Text>This is the login screen</Text>
        <TouchableOpacity onPress={this.onPushPress.bind(this)}>
          <Text style={styles.button}>Chat List</Text>
        </TouchableOpacity>
      </View>
      )
  }
  onPushPress() {
      this.props.navigator.push({
        title: "Chat List",
        screen: "app.ChatList"
      });
  }
}