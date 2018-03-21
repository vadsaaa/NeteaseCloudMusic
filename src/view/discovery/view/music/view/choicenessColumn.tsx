/*
 * @Author: vic.du 
 * @Date: 2018-03-21 11:26:57 
 * @Last Modified by: vic.du
 * @Last Modified time: 2018-03-21 14:02:34
 */

// 音乐 -> 发现音乐 -> 精选专栏 (没找到接口)

import React, { Component } from 'react'
import { StyleSheet, View, Image, Text } from 'react-native'
import screen from 'src/common/screen'
import colorConfig from 'src/config/color'
import CategoryTitle from '../../../components/categoryTitle'

const color = colorConfig.day

class SpecialColumn extends Component {
  state = {
    list: [
      {
        id: 111,
        name: '"皇室套路?" 为什么兄弟总是会爱上同一个女人',
        count: 12175,
        picUrl: 'http://p1.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg'
      },
      {
        id: 222,
        name: '遇到李宗盛之后, 这位乐坛"新人"终于红了',
        count: 12175,
        picUrl: 'http://p1.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg'
      },
      {
        id: 333,
        name: '扒一扒《寻梦环游记》里面的墨西哥音乐',
        count: 12175,
        picUrl: 'http://p1.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg'
      }
    ]
  }

  //  点击title跳转
  handleTitleClick = () => {
    //
  }

  render() {
    const { list } = this.state
    return (
      <View>
        <CategoryTitle title="精选专栏" onPress={this.handleTitleClick} />
        <View style={styles.root}>
          {list.map(item => (
            <View style={styles.container} key={item.id}>
              <View style={styles.leftPart}>
                <Text numberOfLines={2} style={styles.title}>
                  <View style={styles.typeContainer}>
                    <Text style={styles.type}>专栏</Text>
                  </View>
                  {item.name}
                </Text>
                <Text numberOfLines={1} style={styles.subTitle}>
                  阅读 {item.count}
                </Text>
              </View>
              <Image style={styles.image} source={{ uri: item.picUrl }} />
            </View>
          ))}
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  root: {
    borderTopWidth: screen.onePixel,
    borderColor: color.borderLightDark,
    borderStyle: 'solid'
  },
  container: {
    width: screen.width,
    flexDirection: 'row',
    alignItems: 'flex-start',
    flexWrap: 'wrap'
  },
  leftPart: {
    width: screen.width * 0.7,
    height: 84,
    borderBottomWidth: screen.onePixel,
    borderColor: color.borderLightDark,
    borderStyle: 'solid',
    padding: 10,
    paddingBottom: 0
  },
  title: {
    fontSize: 16,
    paddingBottom: 10
  },
  subTitle: {
    fontSize: 12,
    color: color.textLightDark
  },
  typeContainer: {
    width: 22,
    height: 13,
    borderWidth: screen.onePixel,
    borderColor: color.textRed,
    borderStyle: 'solid'
  },
  type: {
    color: color.textRed,
    fontSize: 10
  },
  image: {
    width: screen.width * 0.3,
    height: 82,
    marginTop: 2
  }
})

export default SpecialColumn
