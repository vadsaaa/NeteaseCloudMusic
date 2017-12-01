import React, { PureComponent } from 'react'
import { Text, StyleSheet, View, TouchableOpacity, ImageBackground } from 'react-native'
import color from 'src/common/color'

class TwoLineItem extends PureComponent {
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
        <ImageBackground style={[styles.icon, iconStyle]} source={icon}>
          {iconBgText && <Text style={iconBgTextStyle}>{iconBgText}</Text>}
        </ImageBackground>
      </ImageBackground>
    ) : (
      <ImageBackground style={[styles.icon, iconStyle]} source={icon}>
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

export default TwoLineItem
