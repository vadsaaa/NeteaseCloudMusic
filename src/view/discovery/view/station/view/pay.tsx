/*
 * @Author: vic.du 
 * @Date: 2018-03-21 16:48:29 
 * @Last Modified by: vic.du
 * @Last Modified time: 2018-03-21 17:23:41
 */

// 发现 -> 主播电台 -> 付费精品

import React, { Component } from 'react'
import { StyleSheet, View, Text, ImageBackground } from 'react-native'
import screen from 'src/common/screen'
import CategoryTitle from '../../../components/categoryTitle'
import colorConfig from 'src/config/color'

const color = colorConfig.day

class NewMusic extends Component {
  state = {
    list: [
      {
        id: 1,
        name: '陈立客厅',
        subtitle: '影响你未来的100次心理谈话',
        picUrl: 'http://p1.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg',
        date: '12月4日更新',
        price: '99',
        section: '▷ [027] 价值观的内涵: 明白自己想要什么'
      },
      {
        id: 2,
        name: '焦享乐',
        subtitle: '焦元溥古典音乐入门指南',
        picUrl: 'http://p1.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg',
        date: '12月5日更新',
        price: '99',
        section: '▷ [27-乐曲纯享] 斯特拉文斯基'
      },
      {
        id: 3,
        name: '人类简史',
        subtitle: '微信之父张小龙推荐必读之书',
        picUrl: 'http://p1.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg',
        date: '11月10日更新',
        price: '34',
        section: '▷ 致谢'
      }
    ]
  }

  render() {
    const { list } = this.state

    return (
      <View style={styles.container}>
        <CategoryTitle title="付费精品" />
        <View style={styles.categoryContent}>
          {list.map(item => {
            return (
              <View style={styles.rootStyle} key={item.id}>
                <ImageBackground style={styles.image} source={{ uri: item.picUrl }} />
                <Text style={styles.updateTime}>{item.date}</Text>
                <View style={styles.itemDesc}>
                  <Text style={styles.itemName} numberOfLines={1}>
                    {item.name}
                  </Text>
                  <Text style={styles.itemSubtitle} numberOfLines={1}>
                    {item.subtitle}
                  </Text>
                  <Text style={styles.itemSubtitle} numberOfLines={1}>
                    {item.section}
                  </Text>
                  <Text style={styles.price}>¥{item.price}</Text>
                </View>
              </View>
            )
          })}
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    marginTop: 10
  },
  categoryContent: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    paddingBottom: 16
  },
  rootStyle: {
    width: screen.width,
    height: screen.width / 3 - 2,
    flexDirection: 'row',
    borderBottomWidth: screen.onePixel,
    borderStyle: 'solid',
    borderBottomColor: color.borderLightDark,
    marginBottom: 2
  },
  image: {
    width: screen.width / 3 - 2,
    height: screen.width / 3 - 2
  },
  updateTime: {
    position: 'absolute',
    color: '#fff',
    fontSize: 12,
    left: 4,
    bottom: 2,
    fontWeight: 'bold'
  },
  itemDesc: {
    paddingLeft: 8
  },
  itemName: {
    fontSize: 16,
    paddingTop: 14,
    paddingBottom: 14,
    width: screen.width / 3 * 2 - 8
  },
  itemSubtitle: {
    fontSize: 12,
    color: color.textLightDark,
    width: screen.width / 3 * 2 - 8,
    marginBottom: 6
  },
  price: {
    color: color.textRed,
    marginTop: 4
  }
})

export default NewMusic
