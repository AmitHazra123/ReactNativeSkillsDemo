import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet, View, Image } from 'react-native';
import {
  createAppContainer,
  createStackNavigator,
  createBottomTabNavigator,
  DrawerItems,
  createDrawerNavigator
} from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from './src/components/layout/HomeScreen';
import DetailsScreen from './src/components/details/DetailsScreen';
import SettingsScreen from './src/components/layout/SettingsScreen';
import ProfileScreen from './src/components/profile/ProfileScreen';
import ModalScreen from './src/components/modal/ModalScreen';
import IconWidthBadge from './src/components/common/IconWithBadge';
import IconOptions from './src/components/common/IconOptions';
import SideMenu from './src/components/common/SideMenu';
import SignIn from './src/components/auth/SignIn';
import AuthLoadingScreen from './src/components/auth/AuthLoadingScreen';

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: '#f4511e'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold'
      },
      headerLeft: (
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <IconOptions color='white' />
        </TouchableOpacity>
      )
    }),
    navigationOptions: {
      tabBarLabel: 'Home!',
      drawerIcon: ({ focused, horizontal, tintColor }) => {
        return <Ionicons name='ios-home' size={25} color={tintColor} />;
      }
    }
  }
);

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen,
    Profile: ProfileScreen
  },
  {
    initialRouteName: 'Settings',
    defaultNavigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: '#f4511e'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold'
      },
      headerLeft: (
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <IconOptions color='white' />
        </TouchableOpacity>
      )
    })
  }
);

const AuthStack = createStackNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    SignIn: SignIn
  },
  {
    headerMode: 'none',
    initialRouteName: 'AuthLoading'
  }
);

const ModalStack = createStackNavigator(
  {
    Settings: SettingsStack,
    ModalStack: ModalScreen
  },
  {
    mode: 'modal',
    headerMode: 'none',
    navigationOptions: {
      tabBarLabel: 'Settings',
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        return <Ionicons name='ios-options' size={25} color={tintColor} />;
      },
      drawerLabel: 'Settings',
      drawerIcon: ({ focused, horizontal, tintColor }) => {
        return <Ionicons name='ios-options' size={25} color={tintColor} />;
      }
    }
  }
);

export const HomeIconWithBadge = props => {
  return <IconWidthBadge {...props} badgeCount={3} />;
};

// Tab Navigator
// const TabNavigator = createBottomTabNavigator(
//   {
//     Home: HomeStack,
//     Modal: ModalStack
//   },
//   {
//     defaultNavigationOptions: ({ navigation }) => ({
//       tabBarIcon: ({ focused, horizontal, tintColor }) => {
//         const { routeName } = navigation.state;
//         let IconComponent = Ionicons;
//         let iconName;
//         if (routeName === 'Home') {
//           iconName = `ios-information-circle${focused ? '' : '-outline'}`;
//           // Sometimes we want to add badges to some icons.
//           // You can check the implementation below.
//           IconComponent = HomeIconWithBadge;
//         } else if (routeName === 'Settings') {
//           iconName = `ios-options`;
//         }

//         // You can return any component that you like here!
//         return <IconComponent name={iconName} size={25} color={tintColor} />;
//       }
//     }),

//     tabBarOptions: {
//       activeTintColor: 'tomato',
//       inactiveTintColor: 'gray'
//     }
//   }
// );

const DrawerNavigator = createDrawerNavigator(
  {
    Home: HomeStack,
    Modal: ModalStack,
    Auth: AuthStack
  },
  {
    hideStatusBar: false,
    drawerBackgroundColor: 'rgba(255,255,255,.9)',
    drawerWidth: 250,
    overlayColor: '#6b52ae',
    contentOptions: {
      activeTintColor: '#fff',
      activeBackgroundColor: '#6b52ae'
    },
    initialRouteName: 'Home',
    contentComponent: SideMenu
  }
);

const AppContainer = createAppContainer(DrawerNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  drawerHeader: {
    height: 200,
    backgroundColor: 'white'
  },
  drawerImage: {
    height: 150,
    width: 150,
    borderRadius: 75
  }
});
