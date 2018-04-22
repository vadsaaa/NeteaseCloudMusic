/*
 * @Author: vic.du 
 * @Date: 2018-03-13 18:26:55 
 * @Last Modified by: vic.du
 * @Last Modified time: 2018-04-21 18:17:24
 */

// 视频
import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view'
import NavigationItem from 'src/components/navigationItem'
import HeaderSearch from 'src/components/headerSearch'
import colorConfig from 'src/config/color'
import { Recommend, Music, Mv, ShowTime } from './view'

const color = colorConfig.day

export default class VideoScene extends Component {
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
        renderTabBar={() => <ScrollableTabBar style={styles.tabContainer} tabStyle={styles.tabBar} />}
      >
        <Recommend tabLabel="推荐" />
        <Music tabLabel="音乐" />
        <Mv tabLabel="Showtime" />
        <ShowTime tabLabel="MV" />
        <Recommend tabLabel="二次元" />
        <Recommend tabLabel="舞蹈" />
        <Recommend tabLabel="游戏" />
      </ScrollableTabView>
    )
  }
}

const styles = StyleSheet.create({
  tabContainer: {
    height: 40
  },
  tabBar: {
    height: 30,
    marginLeft: 12,
    marginRight: 12,
    paddingLeft: 4,
    paddingRight: 4
  },
  tabBarText: {
    fontSize: 14,
    marginTop: 12
  },
  tabBarUnderline: {
    height: 2,
    backgroundColor: color.textRed
  }
})
