/*
 * @Author: vic.du 
 * @Date: 2018-03-21 17:30:01 
 * @Last Modified by: vic.du
 * @Last Modified time: 2018-03-21 17:48:10
 */

// 发现-> 主播电台 -> 电台个性推荐

import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import { axios, api } from 'src/common/common'
import screen from 'src/common/screen'
import CategoryTitle from '../../../components/categoryTitle'
import ListItem from '../../../components/listItem'

type LatestMusicItem = {
  id: number
  name: string
  picUrl: string
  program: {
    dj: {
      nickname: string
    }
  }
}

interface LatestMusicState {
  list: LatestMusicItem[]
}

class Recommendation extends Component<{}, LatestMusicState> {
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
        <CategoryTitle title="电台个性推荐" onPress={this.handleTitleClick} showArrow={false} />
        <View style={styles.categoryContainer}>
          {list.map(item => {
            return (
              <ListItem
                key={item.id}
                rootStyle={styles.rootStyle}
                numberOfLines={2}
                imgBg={item.picUrl}
                imgBgStyle={styles.imgBgStyle}
                title={item.name}
                subTitle={item.program.dj.nickname}
                subTitleStyle={styles.subTitleStyle}
              />
            )
          })}
        </View>
      </View>
    )
  }

  componentDidMount() {
    axios.get(api.radio).then(res => {
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
    flexWrap: 'wrap',
    paddingBottom: 16
  },
  rootStyle: {
    width: screen.width / 3 - 4,
    height: 180
  },
  imgBgStyle: {
    width: screen.width / 3 - 2,
    height: screen.width / 3 - 2,
    marginBottom: 6
  },
  subTitleStyle: {
    color: '#fff',
    backgroundColor: 'transparent',
    position: 'absolute',
    top: 104
  }
})

export default Recommendation
