import {Navigation} from 'react-native-navigation';

import {registerScreens} from './screens';
registerScreens();

const createTabs = () => {
  let tabs = [
    {
      label: 'One',
      screen: 'app.LoginScreen',
      title: 'Login Screen'
    },
    {
      label: 'Two',
      screen: 'app.ChatList',
      title: 'Chat List'
    },
    {
      label: 'Three',
      screen: 'app.ChatView',
      title: 'Chat View'
    },
    {
      label: 'Four',
      screen: 'app.NewMessageView',
      title: 'New Message'
    }
  ];
  return tabs;
}

Navigation.startSingleScreenApp({
  screen: {
    screen: 'app.ChatList', // unique ID registered with Navigation.registerScreen
    navigatorStyle: {navBarHidden: true, navBarNoBorder: true}, // override the navigator style for the screen, see "Styling the navigator" below (optional)
    navigatorButtons: {} // override the nav buttons for the screen, see "Adding buttons to the navigator" below (optional)
  },
  passProps: {}, // simple serializable object that will pass as props to all top screens (optional)
  animationType: 'slide-down' // optional, add transition animation to root change: 'none', 'slide-down', 'fade'
});