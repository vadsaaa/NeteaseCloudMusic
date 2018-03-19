/*
 * @Author: vic.du 
 * @Date: 2018-03-19 19:47:46 
 * @Last Modified by: vic.du
 * @Last Modified time: 2018-03-19 19:57:43
 */

// 轮播组件
import React, { Component } from 'react'
import Swiper from 'react-native-swiper'
import { View, Image, StyleSheet, Text } from 'react-native'
import { map } from 'lodash'
import screen from 'src/common/screen'

class Recommend extends Component<any, {}> {
  state = {
    banners: []
  }
  render() {
    const { banners } = this.state
    return (
      <View>
        <Swiper
          loop
          autoplay
          height={146}
          dot={<View style={styles.dot} />}
          activeDot={<View style={styles.activeDot} />}
          paginationStyle={{
            bottom: 4
          }}
        >
          {map(banners, item => {
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

  componentDidMount() {
    // axios.get(api.banner).then(res => {
    //   this.setState({
    //     banners: res.banners
    //   })
    // })
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
    padding: 4
  }
})

export default Recommend
