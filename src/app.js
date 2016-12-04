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
    }
  ];
  return tabs;
}

Navigation.startTabBasedApp({
  tabs: createTabs(),
  appStyle: {
    tabBarBackgroundColor: '#0f2362',
    tabBarButtonColor: '#ffffff',
    tabBarSelectedButtonColor: '#63d7cc'
  }
});