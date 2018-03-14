/*
 * @Author: vic.du 
 * @Date: 2018-03-13 18:51:18 
 * @Last Modified by: vic.du
 * @Last Modified time: 2018-03-14 17:21:12
 */

import React from 'react'
import { Image } from 'react-native'
import { ImageURISource } from 'react-native'

type TabBarItemProps = {
  focused?: boolean
  tintColor?: string
  selectedImage: ImageURISource
  normalImage?: ImageURISource
} | {
  focused?: boolean
  tintColor?: string
  selectedImage?: ImageURISource
  normalImage: ImageURISource
}

export default (props: TabBarItemProps) => {
  const { focused, selectedImage, normalImage, tintColor } = props
  const source = focused ? selectedImage : normalImage
  return <Image source={source!} style={{ tintColor, width: 25, height: 25 }} />
}
