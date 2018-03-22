/*
 * @Author: vic.du 
 * @Date: 2018-03-19 19:05:59 
 * @Last Modified by: vic.du
 * @Last Modified time: 2018-03-21 16:50:16
 */

import React, { Component } from 'react'
import { StyleSheet, ScrollView, View } from 'react-native'
import colorConfig from 'src/config/color'
import Recommend from './recommend'
import Category from './category'

const color = colorConfig.day

interface MusicTabProps {
  tabLabel: string
}

class Music extends Component<MusicTabProps, {}> {
  state = {}

  render() {
    return (
      <View>
        <ScrollView style={styles.container}>
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
