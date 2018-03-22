/*
 * @Author: vic.du 
 * @Date: 2018-03-21 16:48:35 
 * @Last Modified by:   vic.du 
 * @Last Modified time: 2018-03-21 16:48:35 
 */

import React, { Component } from 'react'
import { View, StyleSheet, TouchableOpacity, Image, Text } from 'react-native'
import { axios, api } from 'src/common/common'
import { Slider, SlidersProps } from 'src/components/slider'
import screen from 'src/common/screen'
import colorConfig from 'src/config/color'

interface RecommendState extends SlidersProps {}

const color = colorConfig.day

class Recommend extends Component<{}, RecommendState> {
  constructor(props: {}) {
    super(props)
    this.state = {
      banners: []
    }
  }
  render() {
    const { banners } = this.state
    return (
      <View>
        <Slider banners={banners} />
        <View style={styles.recommendFunc}>
          <TouchableOpacity style={[styles.funcContainer, styles.sperator]}>
            <Image style={styles.funcIcon} source={require('src/images/Discovery/station/cm4_radio_icn_sort.png')} />
            <Text>电台分类</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.funcContainer}>
            <Image style={styles.funcIcon} source={require('src/images/Discovery/station/cm4_radio_icn_rank.png')} />
            <Text>电台排行</Text>
          </TouchableOpacity>
        </View>
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

const styles = StyleSheet.create({
  recommendFunc: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: screen.onePixel,
    borderColor: color.borderBlack,
    borderStyle: 'solid'
  },
  funcContainer: {
    width: screen.width * 0.5,
    marginTop: 8,
    marginBottom: 8,
    padding: 8,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  sperator: {
    borderRightWidth: screen.onePixel,
    borderColor: color.borderBlack,
    borderStyle: 'solid'
  },
  funcIcon: {
    width: 28,
    height: 28,
    marginRight: 10
  }
})

export default Recommend
