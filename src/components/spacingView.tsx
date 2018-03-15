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
