/*
 * @Author: vic.du 
 * @Date: 2018-03-21 11:48:47 
 * @Last Modified by: vic.du
 * @Last Modified time: 2018-03-21 14:53:05
 */

// 发现 - 发现音乐 - vip专区(没找到接口)

import React, { Component } from 'react'
import { StyleSheet, View, Image } from 'react-native'
import screen from 'src/common/screen'
import colorConfig from 'src/config/color'
import ListItemWithIcon from '../../../components/listItemWithIcon'
import CategoryTitle from '../../../components/categoryTitle'

const color = colorConfig.day

class VipColumn extends Component {
  state = {
    list: [
      {
        id: 111,
        type: 'song',
        name: '综艺《sugar Man2》最新原声',
        picUrl: 'http://p1.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg'
      },
      {
        id: 222,
        type: 'song',
        name: '姆爷联手 Kehlani 新单',
        picUrl: 'http://p1.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg'
      },
      {
        id: 333,
        type: 'radio',
        name: '说话懂技巧，人生有魅力',
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
        <CategoryTitle
          title="VIP专区"
          titleStyle={styles.categoryTitleStyle}
          icon={<Image source={require('src/images/Discovery/music/cm2_icn_vip_15.png')} />}
          onPress={this.handleTitleClick}
        />
        <View style={styles.categoryContainer}>
          {list.map((item, index) => {
            const TextIcon =
              item.type === 'song' ? (
                <Image style={styles.textIcon} source={require('src/images/Discovery/music/cm4_disc_type_song.png')} />
              ) : (
                <Image style={styles.textIcon} source={require('src/images/Discovery/music/cm4_disc_type_radio.png')} />
              )
            return (
              <ListItemWithIcon
                key={item.id}
                rootStyle={styles.rootStyle}
                imgBg={item.picUrl}
                imgBgStyle={styles.imgBgStyle}
                TextIcon={TextIcon}
                downside={item.name}
                downsideStyle={styles.downsideStyle}
              />
            )
          })}
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  categoryTitleStyle: {
    paddingLeft: 4,
    color: color.vipCatogoryTitle
  },
  categoryContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    flexWrap: 'wrap'
  },
  rootStyle: {
    width: screen.width / 3 - 2
  },
  imgBgStyle: {
    width: screen.width / 3 - 2,
    height: 122,
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

export default VipColumn
