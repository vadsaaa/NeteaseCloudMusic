import React, { Component } from 'react'
import { View } from 'react-native'
import { Slider, SlidersProps } from 'src/components/slider'
import { axios, api } from 'src/common/common'
import wrapper from './wrapperHoc'
import VideoItem from '../components/videoItem'

interface RecommendTabProps {
  tabLabel: string
}
interface RecommendTabState extends SlidersProps {}

class RecommendTab extends Component<RecommendTabProps, RecommendTabState> {
  state: RecommendTabState = {
    banners: []
  }

  render() {
    const { banners } = this.state
    console.info(banners)
    return (
      <View>
        <Slider banners={banners} />
        <VideoItem />
      </View>
    )
  }

  componentDidMount() {
    axios.get(api.banner).then(res => {
      this.setState({
        banners: res.data.banners
      })
    })
  }
}

export default wrapper(RecommendTab)
