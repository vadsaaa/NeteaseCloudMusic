/*
 * @Author: vic.du 
 * @Date: 2018-03-21 15:31:53 
 * @Last Modified by: vic.du
 * @Last Modified time: 2018-03-21 15:55:03
 */

// 发现-发现音乐-猜你喜欢

import React, { Component } from 'react'
import { StyleSheet, View, Image } from 'react-native'
import screen from 'src/common/screen'
import colorConfig from 'src/config/color'
import ListItemWithIcon from '../../../components/listItemWithIcon'
import CategoryTitle from '../../../components/categoryTitle'

const color = colorConfig.day

class GuessLike extends Component {
  state = {
    list: [
      {
        id: 1,
        title: 'beyond这首歌一推出，震惊娱乐圈，另无数人感觉没面子无法接受！',
        coverUrl: 'http://p1.music.126.net/7gvlA3I88ec9sn-4XIrXDQ==/109951163056823705.jpg'
      },
      {
        id: 2,
        title: 'Slander在Lost Lands的开场',
        coverUrl: 'http://p1.music.126.net/wWWYcuRrq4Neb3omEkj4YQ==/109951163037030415.jpg'
      },
      {
        id: 3,
        title: '郑容和和MAMAMOO颂乐合作演唱《小酒窝》，都两个人的中文好棒',
        coverUrl: 'http://p1.music.126.net/dyHs6e05SjYJQNdTJ1lvWQ==/109951163047536754.jpg'
      },
      {
        id: 4,
        title: '《岁月神偷》金玟岐~好美~好好听~',
        coverUrl: 'http://p1.music.126.net/so06fbAtzUM-EAUMXrWjcg==/109951163072040378.jpg'
      },
      {
        id: 5,
        title: '《岁月神偷》金玟岐~好美~好好听~',
        coverUrl: 'http://p1.music.126.net/so06fbAtzUM-EAUMXrWjcg==/109951163072040378.jpg'
      },
      {
        id: 6,
        title: '《岁月神偷》金玟岐~好美~好好听~',
        coverUrl: 'http://p1.music.126.net/so06fbAtzUM-EAUMXrWjcg==/109951163072040378.jpg'
      },
      {
        id: 7,
        title: '《岁月神偷》金玟岐~好美~好好听~',
        coverUrl: 'http://p1.music.126.net/so06fbAtzUM-EAUMXrWjcg==/109951163072040378.jpg'
      },
      {
        id: 8,
        title: '《岁月神偷》金玟岐~好美~好好听~',
        coverUrl: 'http://p1.music.126.net/so06fbAtzUM-EAUMXrWjcg==/109951163072040378.jpg'
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
        <CategoryTitle title="猜你喜欢" showArrow={false} />
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
    height: 104,
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

export default GuessLike
