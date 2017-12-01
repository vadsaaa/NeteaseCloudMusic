import React, { PureComponent } from 'react'
import { Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import color from 'src/common/color'

class NavigationItem extends PureComponent {
  render() {
    const { icon, iconStyle, title, titleStyle, onPress } = this.props

    return (
      <TouchableOpacity style={styles.container} onPress={onPress}>
        {icon && <Image style={[styles.icon, iconStyle]} source={icon} />}
        {title && <Text style={[styles.title, titleStyle]}>{title}</Text>}
      </TouchableOpacity>
    )
  }
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

export default NavigationItem
