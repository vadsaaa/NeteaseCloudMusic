import React, { Component } from 'react'
import { StatusBar } from 'react-native'
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation'
import { useStrict } from 'mobx'
import { Provider } from 'mobx-react'
import './common/common'
import stores from './store'
import DiscoveryScene from './view/Discovery/index'
import MusicScene from './view/Music/index'
import FriendsScene from './view/Friends/index'
import AccountScene from './view/Account/index'

import TabBarItem from './components/TabBarItem'
import color from './common/color'

useStrict(true)
// function getCurrentRouteName(navigationState) {
//   if (!navigationState) {
//     return null
//   }
//   const route = navigationState.routes[navigationState.index]
//   if (route.routes) {
//     return getCurrentRouteName(route)
//   }
//   return route.routeName
// }

const Tab = TabNavigator(
  {
    Discovery: {
      screen: DiscoveryScene,
      navigationOptions: () => ({
        tabBarLabel: '发现音乐',
        tabBarIcon: ({ focused, tintColor }) => (
          <TabBarItem
            tintColor={tintColor}
            focused={focused}
            normalImage={require('./images/Discovery/discovery.png')}
            selectedImage={require('./images/Discovery/discovery_select.png')}
          />
        )
      })
    },
    Music: {
      screen: MusicScene,
      navigationOptions: () => ({
        tabBarLabel: '我的音乐',
        tabBarIcon: ({ focused, tintColor }) => (
          <TabBarItem
            tintColor={tintColor}
            focused={focused}
            normalImage={require('./images/Music/music.png')}
            selectedImage={require('./images/Music/music_select.png')}
          />
        )
      })
    },

    Friends: {
      screen: FriendsScene,
      navigationOptions: () => ({
        tabBarLabel: '朋友',
        tabBarIcon: ({ focused, tintColor }) => (
          <TabBarItem
            tintColor={tintColor}
            focused={focused}
            normalImage={require('./images/Friends/friends.png')}
            selectedImage={require('./images/Friends/friends_select.png')}
          />
        )
      })
    },

    Account: {
      screen: AccountScene,
      navigationOptions: () => ({
        tabBarLabel: '账号',
        tabBarIcon: ({ focused, tintColor }) => (
          <TabBarItem
            tintColor={tintColor}
            focused={focused}
            normalImage={require('./images/Account/account.png')}
            selectedImage={require('./images/Account/select_account.png')}
          />
        )
      })
    }
  },
  {
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    lazy: true,
    tabBarOptions: {
      activeTintColor: color.tabActive,
      inactiveTintColor: color.tabInactive,
      style: { backgroundColor: color.black }
    }
  }
)

const Navigator = StackNavigator(
  {
    Tab: { screen: Tab }
  },
  {
    navigationOptions: {
      headerStyle: { backgroundColor: color.theme },
      headerBackTitle: null,
      showIcon: true
    }
  }
)

class RootScene extends Component {
  constructor() {
    super()
    StatusBar.setBarStyle('light-content')
  }

  render() {
    return (
      <Provider {...stores}>
        <Navigator
          onNavigationStateChange={(prevState, currentState) => {
            // const currentScene = getCurrentRouteName(currentState)
            // const previousScene = getCurrentRouteName(prevState)
          }}
        />
      </Provider>
    )
  }
}

export default RootScene
