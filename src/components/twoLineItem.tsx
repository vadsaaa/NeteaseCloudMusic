import React, { PureComponent } from 'react'
import { Text, StyleSheet, View, TouchableOpacity, ImageBackground } from 'react-native'
import { ImageURISource, ImageBackgroundProperties, TextStyle, ViewStyle, TouchableOpacityProperties } from 'react-native'
import colorConfig from 'src/config/color'

interface TwoLineItemProps {
  icon?: ImageURISource
  iconStyle?: any
  iconBg?: ImageURISource
  iconBgStyle?: ImageBackgroundProperties
  iconBgText?: string
  iconBgTextStyle?: TextStyle
  upside?: string
  upsideStyle?: TextStyle
  downside: string
  downsideStyle?: TextStyle
  containerStyle?: ViewStyle
  rootStyle?: TouchableOpacityProperties
}

const color = colorConfig.day

export default class TwoLineItem extends PureComponent<TwoLineItemProps, {}> {
  render() {
    const {
      icon,
      iconStyle,
      iconBg,
      iconBgStyle,
      iconBgText,
      iconBgTextStyle,
      upside,
      upsideStyle,
      downside,
      downsideStyle,
      containerStyle,
      rootStyle
    } = this.props
    const IconComp = iconBg ? (
      <ImageBackground style={iconBgStyle} source={iconBg}>
        <ImageBackground style={[styles.icon, iconStyle]} source={icon!}>
          {iconBgText && <Text style={iconBgTextStyle}>{iconBgText}</Text>}
        </ImageBackground>
      </ImageBackground>
    ) : (
      <ImageBackground style={[styles.icon, iconStyle]} source={icon!}>
        {iconBgText && <Text style={iconBgTextStyle}>{iconBgText}</Text>}
      </ImageBackground>
    )

    return (
      <TouchableOpacity style={rootStyle}>
        <View style={[styles.container, containerStyle]}>
          {icon && IconComp}
          {upside && <Text style={[styles.text, upsideStyle]}>{upside}</Text>}
          {downside && (
            <Text numberOfLines={2} style={[styles.text, downsideStyle]}>
              {downside}
            </Text>
          )}
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  icon: {
    marginBottom: 5
  },
  text: {
    fontSize: 12,
    color: color.textLightDark
  }
})