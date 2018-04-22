import React, { Component } from 'react'
import { View } from 'react-native'
import wrapper from './wrapperHoc'

interface RecommendTabProps {
  tabLabel: string
}

class ShowtimeTab extends Component<RecommendTabProps, {}> {
  render() {
    return <View>Showtime</View>
  }
}

export default wrapper(ShowtimeTab)
