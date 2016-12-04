import {Navigation} from 'react-native-navigation';

import LoginScreen from './LoginScreen';
import ChatList from './ChatList';

export function registerScreens() {
  Navigation.registerComponent('app.LoginScreen', () => LoginScreen);
  Navigation.registerComponent('app.ChatList', () => ChatList);
}