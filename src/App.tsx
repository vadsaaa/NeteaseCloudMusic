/*
 * @Author: vic.du 
 * @Date: 2018-03-13 18:26:55 
 * @Last Modified by: vic.du
 * @Last Modified time: 2018-03-15 19:15:06
 */

import React, { Component } from 'react'
import { StatusBar } from 'react-native'
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation'
import { Provider } from 'react-redux'
import store from './store/index'
import DiscoveryScene from './view/discovery/index'
import MusicScene from './view/music/index'
import FriendsScene from './view/friends/index'
import AccountScene from './view/account/index'

import TabBarItem from './components/tabBarItem'
import colorConfig from './config/color'

const color = colorConfig.day

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
      headerBackTitle: null
    }
  }
)

class RootScene extends Component {
  constructor(props: {}) {
    super(props)
    StatusBar.setBarStyle('light-content')
  }

  render() {
    return (
      <Provider store={store}>
        <Navigator />
      </Provider>
    )
  }
}

export default RootScene
