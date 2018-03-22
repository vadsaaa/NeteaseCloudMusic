/*
 * @Author: vic.du 
 * @Date: 2018-03-19 19:05:59 
 * @Last Modified by: vic.du
 * @Last Modified time: 2018-03-21 22:26:45
 */

import React, { Component } from 'react'
import { StyleSheet, ScrollView, View, RefreshControl } from 'react-native'
import { noop } from 'lodash'
import colorConfig from 'src/config/color'
import Recommend from './recommend'
import Category from './category'

const color = colorConfig.day

interface MusicTabProps {
  tabLabel: string
}

class Music extends Component<MusicTabProps, {}> {
  handleScroll = event => {
    console.info(event.nativeEvent.contentOffset.y)
  }
  render() {
    return (
      <View>
        <ScrollView
          style={styles.container}
          onScroll={this.handleScroll}
          scrollEventThrottle={5}
          refreshControl={
            <RefreshControl
              refreshing={false}
              onRefresh={noop}
              tintColor="#fff"
              title="首页内容根据你的口味生成"
              titleColor={color.textLightDark}
              colors={['#fff']}
              progressBackgroundColor="#fff"
            />
          }
        >
          <Recommend />
          <Category />
        </ScrollView>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: color.bgCommon
  }
})

export default Music
