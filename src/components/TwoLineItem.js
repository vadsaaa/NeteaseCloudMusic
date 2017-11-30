import React, { PureComponent } from 'react'
import { Image, Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import color from '../common/color'
import screen from '../common/screen'

class TwoLineItem extends PureComponent {
  render() {
    const { icon, iconStyle, upside, upsideStyle, downside, downsideStyle, containerStyle } = this.props

    return (
      <TouchableOpacity>
        <View style={[styles.container, containerStyle]}>
          {icon && <Image style={[styles.icon, iconStyle]} source={icon} />}
          {upside && <Text style={[styles.text, upsideStyle]}>{upside}</Text>}
          {downside && <Text style={[styles.text, downsideStyle]}>{downside}</Text>}
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: screen.onePixel,
    borderRightColor: color.borderBlack,
    borderStyle: 'solid'
  },
  icon: {
    width: 15,
    height: 15,
    marginBottom: 5
  },
  text: {
    fontSize: 12,
    color: color.textLightDark,
  }
})

export default TwoLineItem
