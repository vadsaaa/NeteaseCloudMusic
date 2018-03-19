/*
 * @Author: vic.du 
 * @Date: 2018-03-19 19:09:35 
 * @Last Modified by: vic.du
 * @Last Modified time: 2018-03-19 19:10:25
 */

import React, { PureComponent } from 'react'
import { StyleSheet, ScrollView } from 'react-native'
import colorConfig from 'src/config/color'
// import Recommend from './recommend'
// import Category from './category'

const color = colorConfig.day

interface StationTabProps {
  tabLabel: string
}

export default class Station extends PureComponent<StationTabProps, {}> {
  state = {}

  render() {
    return (
      <ScrollView style={styles.container}>
        {/* <Recommend /> */}
        {/* <Category /> */}
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.bgCommon
  }
})
