import React, { Component } from 'react'
import { View } from 'react-native'
import wrapper from './wrapperHoc'

interface RecommendTabProps {
  tabLabel: string
}

class MusicTab extends Component<RecommendTabProps, {}> {
  render() {
    return <View>音乐</View>
  }
}

export default wrapper(MusicTab)
