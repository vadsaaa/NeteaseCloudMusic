/*
 * @Author: vic.du 
 * @Date: 2018-03-13 18:26:55 
 * @Last Modified by: vic.du
 * @Last Modified time: 2018-03-19 19:45:03
 */

// 发现音乐

import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view'
import colorConfig from 'src/config/color'
import screen from 'src/common/screen'
import NavigationItem from 'src/components/navigationItem'
import HeaderSearch from './view/headerSearch'

import Music from './view/music'
import Station from './view/station'

const color = colorConfig.day

class MusicScene extends Component {
  static navigationOptions = {
    headerTitle: <HeaderSearch />,
    headerRight: <NavigationItem icon={require('src/images/common/playing.png')} />,
    headerLeft: <NavigationItem icon={require('src/images/Discovery/cm2_topbar_icn_mic.png')} />
  }

  render() {
    return (
      <ScrollableTabView
        scrollWithoutAnimation
        tabBarActiveTextColor={color.theme}
        tabBarTextStyle={styles.tabBarText}
        tabBarUnderlineStyle={styles.tabBarUnderline}
        renderTabBar={() => <DefaultTabBar style={styles.tabBar} />}
      >
        <Music tabLabel="发现音乐" />
        <Station tabLabel="主播电台" />
      </ScrollableTabView>
    )
  }
}

const styles = StyleSheet.create({
  tabBar: {
    height: 40
  },
  tabBarText: {
    fontSize: 14,
    marginTop: 12
  },
  tabBarUnderline: {
    width: 70,
    marginLeft: (screen.width / 2 - 70) / 2,
    backgroundColor: color.textRed
  }
})

export default MusicScene
