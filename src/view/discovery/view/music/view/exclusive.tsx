/*
 * @Author: vic.du 
 * @Date: 2018-03-20 21:41:12 
 * @Last Modified by: vic.du
 * @Last Modified time: 2018-03-21 18:36:48
 */

// 音乐 -> 发现音乐 -> 独家放送

import React, { Component } from 'react'
import { StyleSheet, View, Image } from 'react-native'
import { axios, api } from 'src/common/common'
import colorConfig from 'src/config/color'
import screen from 'src/common/screen'
import CategoryTitle from '../../../components/categoryTitle'
import ListItemWithIcon from '../../../components/listItemWithIcon'

type ExclusiveItem = {
  id: number
  picUrl: string
  sPicUrl: string
  name: string
}

interface ExclusiveState {
  list: ExclusiveItem[]
}

const color = colorConfig.day

class Exclusive extends Component<{}, ExclusiveState> {
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
        <CategoryTitle title="独家放送" onPress={this.handleTitleClick} />
        <View style={styles.categoryContainer}>
          {list.map((item, index) => (
            <ListItemWithIcon
              key={item.id}
              rootStyle={index !== 2 ? styles.rootStyle : styles.specialRootStyle}
              imgBg={index !== 2 ? item.sPicUrl : item.picUrl}
              imgBgStyle={index !== 2 ? styles.imgBgStyle : styles.imgSpecialBgStyle}
              TextIcon={<Image style={styles.textIcon} source={require('src/images/Discovery/music/cm4_disc_type_video.png')} />}
              downside={item.name}
              downsideStyle={styles.downsideStyle}
            />
          ))}
        </View>
      </View>
    )
  }

  componentDidMount() {
    axios.get(api.privateContent).then(res => {
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
    width: screen.width / 2 - 2
  },
  specialRootStyle: {
    width: screen.width
  },
  imgBgStyle: {
    width: screen.width / 2 - 2,
    height: 106,
    marginBottom: 6
  },
  imgSpecialBgStyle: {
    width: screen.width,
    height: 140,
    marginBottom: 4
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

export default Exclusive
