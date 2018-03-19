/*
 * @Author: vic.du 
 * @Date: 2018-03-13 18:26:55 
 * @Last Modified by: vic.du
 * @Last Modified time: 2018-03-19 10:54:25
 */

import React from 'react'
import { View, StyleSheet } from 'react-native'
import colorConfig from 'src/config/color'

const color = colorConfig.day

const styles = StyleSheet.create({
  container: {
    height: 10,
    backgroundColor: color.spacingBg
  }
})

const SpacingView = () => <View style={styles.container} />

export default SpacingView
