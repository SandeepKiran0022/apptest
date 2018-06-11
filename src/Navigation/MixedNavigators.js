import React from 'react';
import { createBottomTabNavigator, StackNavigator, DrawerNavigator } from 'react-navigation';
import Screen1 from '../Screens/Screen1';
import Screen2 from '../Screens/Screen2';
import Screen3 from '../Screens/Screen3';
import Screen4 from '../Screens/sidemenu';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import DrawerScreen from './DrawerScreen';

const TabNav = createBottomTabNavigator({
  Customers: {
    screen: Screen1,
    navigationOptions: () => ({
      tabBarIcon: ({ tintColor }) => {
        return (
          <IconIonicons 
            name='ios-contacts-outline'
            size={26}
            color={tintColor}
          />
        );
      }
    })
  },
 Enroll: {
    screen: Screen2,
    navigationOptions: () => ({
      tabBarIcon: ({ tintColor }) => {
        return (
          <IconIonicons 
            name='ios-contacts-outline'
            size={26}
            color={tintColor}
          />
        );
      }
    })
  },
  Invoices: {
    screen: Screen3,
    navigationOptions: () => ({
      tabBarIcon: ({ tintColor }) => {
        return (
          <IconIonicons 
            name='ios-contacts-outline'
            size={26}
            color={tintColor}
          />
        );
      }
    })
  },
  More: {
    screen: Screen4,
    navigationOptions: () => ({
      tabBarIcon: ({ tintColor }) => {
        return (
          <IconIonicons 
            name='ios-contacts-outline'
            size={26}
            color={tintColor}
          />
        );
      }
    })
  }
}, {
  tabBarOptions: {
    showIcon: true,
    style: {
      backgroundColor: 'grey'
    },
    activeTintColor: 'red'
  }
});

const StackTab = StackNavigator({
  Tabs: TabNav
});

export default Drawer = DrawerNavigator({
  Tabs: {
    screen: StackTab
  },
  customers:
  {
	  screen:Screen1
  }
}, {
  contentComponent: props => <DrawerScreen {...props} />
});