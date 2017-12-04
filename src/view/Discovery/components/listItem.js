import React, { PureComponent } from 'react'
import { Text, StyleSheet, View, ImageBackground } from 'react-native'
import color from 'src/common/color'

class ListItem extends PureComponent {
  render() {
    const { imgBg, imgBgStyle, title, subTitle, TextIcon, titleStyle, subTitleStyle, rootStyle } = this.props

    return (
      <View style={[styles.container, rootStyle]}>
        {imgBg && (
          <ImageBackground style={imgBgStyle} source={{ uri: imgBg }}>
            {TextIcon}
          </ImageBackground>
        )}
        {title && (
          <Text numberOfLines={1} style={[styles.text, titleStyle]}>
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
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
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
    marginBottom: 16
  }
})

export default ListItem
