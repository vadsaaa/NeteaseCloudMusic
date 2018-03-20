/*
 * @Author: vic.du 
 * @Date: 2018-03-20 22:19:31 
 * @Last Modified by: vic.du
 * @Last Modified time: 2018-03-20 22:40:25
 */

import React from 'react'
import { Text, StyleSheet, View, ImageBackground } from 'react-native'
import { TextStyle, ViewStyle, ImageStyle } from 'react-native'
import colorConfig from 'src/config/color'

interface ListItemProps {
  imgBg?: string
  imgBgStyle?: ImageStyle
  title?: string
  titleStyle?: TextStyle
  subTitle?: string
  subTitleStyle?: TextStyle
  numberOfLines?: number
  downsideStyle?: TextStyle
  rootStyle?: ViewStyle
}
const color = colorConfig.day

const ListItem = (props: ListItemProps) => {
  const { imgBg, imgBgStyle, title, subTitle, titleStyle, subTitleStyle, rootStyle, numberOfLines } = props
  return (
    <View style={[styles.container, rootStyle]}>
      {imgBg && <ImageBackground style={imgBgStyle} source={{ uri: imgBg }} />}
      {title && (
        <Text numberOfLines={numberOfLines || 1} style={[styles.text, titleStyle]}>
          {title}
        </Text>
      )}
      {subTitle && (
        <Text numberOfLines={1} style={[styles.subTitle, subTitleStyle]}>
          {subTitle}
        </Text>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  text: {
    alignSelf: 'flex-start',
    color: color.textDark,
    padding: 2,
    paddingLeft: 6,
    fontSize: 13
  },
  subTitle: {
    alignSelf: 'flex-start',
    color: color.textLightDark,
    padding: 2,
    paddingLeft: 6,
    fontSize: 12,
    marginBottom: 12
  }
})

export default ListItem
