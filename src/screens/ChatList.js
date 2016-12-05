import React, {Component} from 'react';

import {
  Text,
  View,
  TouchableOpacity,
  Image,
  StyleSheet
} from 'react-native';

import { Navigation } from 'react-native-navigation';

const styles = StyleSheet.create({
  button: {
    height: 100,
    marginBottom: 10,
    marginTop: 10
  }
});

export default class ChatList extends Component {
  constructor(props) {
    super(props);
  }
  newPoof() {
    this.props.navigator.push({
      title: "New Message",
      screen: "app.NewMessageView"
    });
  }
  render() {
    return (
      <View>
        <Text>This is the Chat List</Text>
        <View>
          <TouchableOpacity onPress={this.newPoof.bind(this)}>
            <Image
                    style={styles.button}
                    source={require('../../img/Clip-art-cloud-clipart.png')}
            />
          </TouchableOpacity>

        </View>
      </View>
      )
  }
}