import React, { Component } from 'react'
import { View } from 'react-native'
import wrapper from './wrapperHoc'

interface RecommendTabProps {
  tabLabel: string
}

class MvTab extends Component<RecommendTabProps, {}> {
  render() {
    return <View>Mv</View>
  }
}

export default wrapper(MvTab)
