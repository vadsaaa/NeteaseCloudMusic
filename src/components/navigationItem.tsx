/*
 * @Author: vic.du 
 * @Date: 2018-03-14 16:48:56 
 * @Last Modified by: vic.du
 * @Last Modified time: 2018-03-15 14:27:54
 */

import React from 'react'
import { Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { GestureResponderEvent, ImageURISource, ImageStyle } from 'react-native'
import colorConfig from 'src/config/color'

const color = colorConfig.day

interface NavigationItemProps {
  icon?: ImageURISource
  iconStyle?: ImageStyle
  title?: string
  titleStyle?: ImageStyle
  onPress?: (event: GestureResponderEvent) => void
}

export default (props: NavigationItemProps) => {
  const { icon, iconStyle, title, titleStyle, onPress } = props
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {icon && <Image style={[styles.icon, iconStyle]} source={icon} />}
      {title && <Text style={[styles.title, titleStyle]}>{title}</Text>}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  icon: {
    width: 26,
    height: 26,
    margin: 8
  },
  title: {
    fontSize: 15,
    color: color.headerText,
    margin: 8
  }
})
