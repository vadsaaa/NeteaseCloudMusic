/**
 * 发现音乐
 */

import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view'
import color from 'src/common/color'
import NavigationItem from 'src/components/NavigationItem'
import HeaderSearch from './module/headerSearch'

import Music from './module/Music'
import Station from './module/Station'
import Video from './module/Video'

class MusicScene extends Component {
  static navigationOptions = {
    headerTitle: <HeaderSearch />,
    headerRight: <NavigationItem icon={require('src/images/common/playing.png')} onPress={() => {}} />,
    headerLeft: <NavigationItem icon={require('src/images/Discovery/cm2_topbar_icn_mic.png')} onPress={() => {}} />
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
        <Music tabLabel="音乐" />
        <Video tabLabel="视频" />
        <Station tabLabel="电台" />
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
    backgroundColor: color.textRed
  }
})

export default MusicScene
