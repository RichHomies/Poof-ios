import {Navigation} from 'react-native-navigation';

import LoginScreen from './LoginScreen';
import ChatList from './ChatList';
import ChatView from './ChatView';
import NewMessageView from './NewMessageView';
export function registerScreens() {
  Navigation.registerComponent('app.LoginScreen', () => LoginScreen);
  Navigation.registerComponent('app.ChatList', () => ChatList);
  Navigation.registerComponent('app.ChatView', () => ChatView);
  Navigation.registerComponent('app.NewMessageView', () => NewMessageView);

}