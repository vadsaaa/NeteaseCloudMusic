import React, { PureComponent } from 'react'
import { Text, StyleSheet, View, ImageBackground } from 'react-native'
import color from 'src/common/color'

class ListItem extends PureComponent {
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

export default ListItem
