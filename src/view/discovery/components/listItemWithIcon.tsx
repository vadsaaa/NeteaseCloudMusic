/*
 * @Author: vic.du 
 * @Date: 2018-03-20 18:57:32 
 * @Last Modified by: vic.du
 * @Last Modified time: 2018-03-20 19:19:30
 */

import React, { PureComponent, ReactElement } from 'react'
import { Text, StyleSheet, View, ImageBackground } from 'react-native'
import { ImageStyle, TextStyle, ViewStyle } from 'react-native'
import colorConfig from 'src/config/color'

interface ListItemWithIconProps {
  imgBg?: string
  imgBgStyle?: ImageStyle
  downside?: string
  TextIcon?: ReactElement<any>
  downsideStyle?: TextStyle
  rootStyle?: ViewStyle
}

const color = colorConfig.day

class ListItemWithIcon extends PureComponent<ListItemWithIconProps, {}> {
  render() {
    const { imgBg, imgBgStyle, downside, TextIcon, downsideStyle, rootStyle } = this.props

    const ImgComp = (
      <ImageBackground style={imgBgStyle} source={{ uri: imgBg }}>
        {TextIcon}
      </ImageBackground>
    )

    return (
      <View style={[styles.container, rootStyle]}>
        {imgBg && ImgComp}
        {downside && (
          <Text numberOfLines={2} style={[styles.text, downsideStyle]}>
            {downside}
          </Text>
        )}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 12,
    color: color.textLightDark
  }
})

export default ListItemWithIcon
