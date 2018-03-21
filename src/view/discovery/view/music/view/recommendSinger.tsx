/*
 * @Author: vic.du 
 * @Date: 2018-03-21 14:34:55 
 * @Last Modified by: vic.du
 * @Last Modified time: 2018-03-21 15:55:42
 */

// 发现-发现音乐- 推荐歌手(我这里是金玟岐~)

import React, { Component } from 'react'
import { StyleSheet, View, Image } from 'react-native'
import screen from 'src/common/screen'
import colorConfig from 'src/config/color'
import ListItemWithIcon from '../../../components/listItemWithIcon'
import CategoryTitle from '../../../components/categoryTitle'

const color = colorConfig.day

class RecommendSinger extends Component {
  state = {
    list: [
      {
        id: 1,
        title: '动情翻唱金玟岐《爱呀》，小姐姐一抹红唇实在是抢眼',
        coverUrl: 'http://p1.music.126.net/rW82AwdIWzXqjcMpDJ5drg==/109951163025101957.jpg'
      },
      {
        id: 2,
        title: '不思议人生',
        coverUrl: 'http://p3.music.126.net/vQDAHbKmCLrLma0LDI6HJQ==/109951163084550145.jpg'
      },
      {
        id: 3,
        title: '一首《岁月神偷》彻底迷恋上她的嗓音，灵动醉人。',
        coverUrl: 'http://p1.music.126.net/_XjNIp90Zbp3FgUniF109A==/109951162931503209.jpg'
      },
      {
        id: 4,
        title: '《岁月神偷》金玟岐~好美~好好听~',
        coverUrl: 'http://p1.music.126.net/so06fbAtzUM-EAUMXrWjcg==/109951163072040378.jpg'
      }
    ]
  }

  render() {
    const { list } = this.state
    return (
      <View>
        <CategoryTitle title="金玟岐" showArrow={false} />
        <View style={styles.categoryContainer}>
          {list.map((item, index) => (
            <ListItemWithIcon
              key={item.id}
              rootStyle={styles.rootStyle}
              imgBg={item.coverUrl}
              imgBgStyle={styles.imgBgStyle}
              TextIcon={<Image style={styles.textIcon} source={require('src/images/Discovery/music/cm4_disc_type_video.png')} />}
              downside={item.title}
              downsideStyle={styles.downsideStyle}
            />
          ))}
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  categoryContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    flexWrap: 'wrap'
  },
  rootStyle: {
    width: screen.width / 2 - 2
  },
  imgBgStyle: {
    width: screen.width / 2 - 2,
    height: 102,
    marginBottom: 6
  },
  textIcon: {
    position: 'absolute',
    top: 6,
    left: 4
  },
  downsideStyle: {
    color: color.textDark,
    padding: 2,
    paddingLeft: 6,
    fontSize: 13,
    marginBottom: 18,
    alignSelf: 'flex-start'
  }
})

export default RecommendSinger
