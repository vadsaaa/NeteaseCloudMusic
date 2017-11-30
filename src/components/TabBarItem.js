import React, { PureComponent } from 'react'
import { Image } from 'react-native'

class TabBarItem extends PureComponent {
  render() {
    const { focused, selectedImage, normalImage, tintColor } = this.props
    return <Image source={focused ? selectedImage : normalImage} style={{ tintColor, width: 25, height: 25 }} />
  }
}

export default TabBarItem
