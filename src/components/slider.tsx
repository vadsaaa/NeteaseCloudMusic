/*
 * @Author: vic.du 
 * @Date: 2018-03-19 19:47:46 
 * @Last Modified by: vic.du
 * @Last Modified time: 2018-03-20 18:31:51
 */

// 轮播组件
import React, { Component } from 'react'
import Swiper from 'react-native-swiper'
import { View, Image, StyleSheet, Text } from 'react-native'
import screen from 'src/common/screen'

type BannerItem = {
  targetId: number
  pic: string
  titleColor: string
  typeTitle: string
}
interface SlidersProps {
  banners: BannerItem[]
}
class Slider extends Component<SlidersProps, {}> {
  render() {
    const { banners } = this.props
    return (
      <View>
        <Swiper
          autoplay
          height={146}
          dot={<View style={styles.dot} />}
          activeDot={<View style={styles.activeDot} />}
          paginationStyle={{
            bottom: 4
          }}
        >
          {banners.map(item => {
            return (
              <View style={styles.slide} key={item.targetId}>
                <Image resizeMode="stretch" style={styles.image} source={{ uri: item.pic }} />
                <View style={styles.typeTitleContainer}>
                  <Text style={[styles.typeTitle, { backgroundColor: item.titleColor }]}>{item.typeTitle}</Text>
                </View>
              </View>
            )
          })}
        </Swiper>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },
  dot: {
    backgroundColor: 'rgba(0,0,0,.2)',
    width: 6,
    height: 6,
    borderRadius: 6,
    marginLeft: 2,
    marginRight: 2,
    marginTop: 2,
    marginBottom: 2
  },
  activeDot: {
    backgroundColor: '#C52627',
    width: 6,
    height: 6,
    borderRadius: 6,
    marginLeft: 2,
    marginRight: 2,
    marginTop: 2,
    marginBottom: 2
  },
  image: {
    width: screen.width,
    flex: 1
  },
  typeTitleContainer: {
    position: 'absolute',
    right: 2,
    bottom: 4,
    borderRadius: 20
  },
  typeTitle: {
    color: '#fff',
    fontSize: 12,
    padding: 4,
    borderRadius: 20
  }
})

export { Slider, BannerItem, SlidersProps }
