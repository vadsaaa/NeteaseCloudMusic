import React from 'react'
import { View, StyleSheet } from 'react-native'
import color from '../common/color.js'

const styles = StyleSheet.create({
  container: {
    height: 10,
    backgroundColor: color.spacingBg
  }
})

const SpacingView = () => <View style={styles.container} />

export default SpacingView
