/*
 * @Author: vic.du 
 * @Date: 2018-03-20 22:17:47 
 * @Last Modified by: vic.du
 * @Last Modified time: 2018-03-20 22:47:22
 */

// 音乐 - 发现音乐- 最新音乐

import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import times from 'lodash/times'
import map from 'lodash/map'
import { axios, api } from 'src/common/common'
import screen from 'src/common/screen'
import CategoryTitle from '../../../components/categoryTitle'
import ListItem from '../../../components/listItem'

type LatestMusicItem = {
  song: {
    id: number
    album: {
      picUrl: string
    }
    name: string
    artists: any[]
  }
}

interface LatestMusicState {
  list: LatestMusicItem[]
}

class LatestMusic extends Component<{}, LatestMusicState> {
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

  render() {
    const { list } = this.state

    return (
      <View>
        <CategoryTitle title="最新音乐" onPress={this.handleTitleClick} />
        <View style={styles.categoryContainer}>
          <ListItem
            rootStyle={styles.rootStyle}
            imgBg="https://ws2.sinaimg.cn/large/006tNc79ly1fm4vzjdq65j305u05uglf.jpg"
            imgBgStyle={styles.imgBgStyle}
            title="新歌推荐"
            subTitle="推荐合口味的新歌"
          />
          {times(5, index => {
            const item = list[index] && list[index].song
            if (item) {
              const subTitle = map(item.artists, 'name').join(' ')
              return (
                <ListItem
                  key={item.id}
                  rootStyle={styles.rootStyle}
                  imgBg={item.album.picUrl}
                  imgBgStyle={styles.imgBgStyle}
                  title={item.name}
                  subTitle={subTitle}
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
    axios.get(api.newsong).then(res => {
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
  textIcon: {
    backgroundColor: 'transparent',
    textAlign: 'right',
    fontSize: 12,
    paddingRight: 4,
    marginTop: 2
  }
})

export default LatestMusic
