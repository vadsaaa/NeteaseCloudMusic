/*
 * @Author: vic.du 
 * @Date: 2018-03-20 18:51:44 
 * @Last Modified by: vic.du
 * @Last Modified time: 2018-03-21 18:37:01
 */

// 音乐 -> 发现音乐 ->  推荐歌单

import React, { Component } from 'react'
import { StyleSheet, View, Image, Text } from 'react-native'
import times from 'lodash/times'
import colorConfig from 'src/config/color'
import screen from 'src/common/screen'
import { axios, api } from 'src/common/common'
import CategoryTitle from '../../../components/categoryTitle'
import ListItemWithIcon from '../../../components/listItemWithIcon'

type PlaylistItem = {
  id: number
  picUrl: string
  playCount: number
  name: string
}

interface PlaylistState {
  list: PlaylistItem[]
}

const color = colorConfig.day

class Playlist extends Component<{}, PlaylistState> {
  constructor(props: {}) {
    super(props)
    this.state = {
      list: []
    }
  }
  //  点击title跳转
  handleTitleClick = () => {
    //
  }

  renderIconText = props => {
    let { count } = props
    if (count >= 100000000) {
      count = `${(count / 100000000).toFixed(1)}亿`
    } else if (count >= 10000) {
      count = `${Math.round(count / 10000)}万`
    }
    return (
      <View style={styles.textContainer}>
        <Image style={styles.textIcon} source={require('src/images/Discovery/music/cm2_note_icn_listen.png')} />
        <Text style={styles.text}>&nbsp;{count}</Text>
      </View>
    )
  }

  render() {
    const { list } = this.state

    return (
      <View>
        <CategoryTitle title="推荐歌单" onPress={this.handleTitleClick} />
        <View style={styles.categoryContainer}>
          {times(6, (index: number) => {
            const item = list[index]
            if (item) {
              return (
                <ListItemWithIcon
                  key={item.id}
                  rootStyle={styles.rootStyle}
                  imgBg={item.picUrl}
                  imgBgStyle={styles.imgBgStyle}
                  TextIcon={this.renderIconText({ count: item.playCount })}
                  downside={item.name}
                  downsideStyle={styles.downsideStyle}
                />
              )
            }
            return null
          })}
        </View>
      </View>
    )
  }

  componentDidMount() {
    axios.get(api.recommendPlayList).then(res => {
      this.setState({
        list: res.data.result
      })
    })
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
    width: screen.width / 3 - 4
  },
  imgBgStyle: {
    width: screen.width / 3 - 2,
    height: screen.width / 3 - 2,
    marginBottom: 6
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingRight: 8,
    paddingTop: 2
  },
  textIcon: {
    height: 14,
    width: 30,
    position: 'relative',
    right: -10
  },
  text: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold'
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

export default Playlist
