import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import screen from 'src/common/screen'
import colorConfig from 'src/config/color'

interface CategoryItem {
  title: string
  picUrl: string
}

const color = colorConfig.day

const CategoryItem = (props: CategoryItem) => {
  const { title, picUrl } = props
  return (
    <View style={styles.container}>
      <Image style={styles.icon} source={{ uri: picUrl }} />
      <Text style={styles.title}>{title}</Text>
      <View style={styles.separator} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexBasis: '50%',
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    paddingLeft: 36,
    borderBottomWidth: screen.onePixel,
    borderColor: color.borderLightDark,
    borderStyle: 'solid'
  },
  icon: {
    width: 26,
    height: 26
  },
  title: {
    fontSize: 16,
    paddingLeft: 10
  },
  separator: {
    flexGrow: 1,
    height: 26,
    borderRightWidth: screen.onePixel,
    borderColor: color.borderLightDark,
    borderStyle: 'solid'
  }
})

export default CategoryItem
