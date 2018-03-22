import React, { ReactElement } from 'react'
import { Text, StyleSheet, TouchableOpacity, Image, View } from 'react-native'
import { TextStyle, GestureResponderEvent, ViewStyle } from 'react-native'
import colorConfig from 'src/config/color'
import screen from 'src/common/screen'

interface CategoryTitleProps {
  containerStyle?: ViewStyle
  title?: string | number
  titleStyle?: TextStyle
  icon?: ReactElement<{}>
  showArrow?: boolean
  onPress?: (event: GestureResponderEvent) => void
}

const color = colorConfig.day

const CategoryTitle = (props: CategoryTitleProps) => {
  const { title, titleStyle, onPress, icon, containerStyle, showArrow = true } = props
  return (
    <TouchableOpacity style={[styles.container, containerStyle]} onPress={onPress}>
      <View style={styles.textContainer}>
        {icon && icon}
        {title && <Text style={[styles.title, titleStyle]}>{title}</Text>}
        {showArrow && (
          <Image style={styles.arrowStyle} source={require('src/images/Discovery/common/cm2_icn_notify_arrow.png')} />
        )}
      </View>
    </TouchableOpacity>
  )
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
    borderStyle: 'solid',
    paddingLeft: 8
  },
  title: {
    fontSize: 16,
    color: color.textDark,
    paddingRight: 6
  },
  arrowStyle: {
    width: 18
  }
})

export default CategoryTitle
