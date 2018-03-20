/*
 * @Author: vic.du 
 * @Date: 2018-03-20 22:42:11 
 * @Last Modified by: vic.du
 * @Last Modified time: 2018-03-20 22:47:21
 */

// 音乐 -> 发现音乐 -> 主播电台

import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import times from 'lodash/times'
import map from 'lodash/map'
import { axios, api } from 'src/common/common'
import screen from 'src/common/screen'
import CategoryTitle from '../../../components/categoryTitle'
import ListItem from '../../../components/listItem'

type RadioItem = {
  program: {
    id: number
    mainSong: {
      artists: any[]
    }
    radio: {
      picUrl: string
      rcmdText?: string
      desc: string
    }
  }
}

interface RadioState {
  list: RadioItem[]
}

class Radio extends Component<{}, RadioState> {
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
        <CategoryTitle title="主播电台" onPress={this.handleTitleClick} />
        <View style={styles.categoryContainer}>
          {times(6, index => {
            const item = list[index] && list[index].program
            if (item) {
              const subTitle = map(item.mainSong.artists, 'name').join('/')
              return (
                <ListItem
                  key={item.id}
                  numberOfLines={2}
                  rootStyle={styles.rootStyle}
                  imgBg={item.radio.picUrl}
                  imgBgStyle={styles.imgBgStyle}
                  title={item.radio.rcmdText || item.radio.desc}
                  subTitle={subTitle}
                  subTitleStyle={styles.subTitleStyle}
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

export default Radio
