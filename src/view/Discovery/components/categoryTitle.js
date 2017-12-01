import React, { PureComponent } from 'react'
import { Text, StyleSheet, TouchableOpacity, Image, View } from 'react-native'
import color from 'src/common/color'
import screen from 'src/common/screen'

class CategoryTitle extends PureComponent {
  render() {
    const { title, titleStyle, onPress } = this.props

    return (
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <View style={styles.textContainer}>
          {title && <Text style={[styles.title, titleStyle]}>{title}</Text>}
          <Image
            style={styles.arrowStyle}
            source={require('src/images/Discovery/common/cm2_icn_notify_arrow.png')}
          />
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 50
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderLeftWidth: screen.onePixel * 4,
    borderColor: color.textRed,
    borderStyle: 'solid'
  },
  title: {
    fontSize: 16,
    color: color.textDark,
    paddingLeft: 8,
    paddingRight: 6
  },
  arrowStyle: {
    width: 18
  }
})

export default CategoryTitle
