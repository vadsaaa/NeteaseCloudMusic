/**
 *  发现音乐 -> 音乐 -> 最新音乐
 */

import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import { times, map } from 'lodash'
import screen from 'src/common/screen'
import CategoryTitle from '../../components/categoryTitle'
import ListItem from '../../components/listItem'

class NewMusic extends Component {
  state = {
    list: []
  }

  render() {
    const { list } = this.state

    return (
      <View>
        <CategoryTitle title="最新音乐" />
        <View style={styles.categoryContainer}>
          <ListItem
            rootStyle={styles.rootStyle}
            imgBg="https://ws2.sinaimg.cn/large/006tNc79ly1fm4vzjdq65j305u05uglf.jpg"
            imgBgStyle={styles.imgBgStyle}
            title="新歌推荐"
            subTitle="推荐合口味的新歌"
            titleStyle={styles.titleStyle}
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
                  titleStyle={styles.titleStyle}
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
        list: res.result
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

export default NewMusic
