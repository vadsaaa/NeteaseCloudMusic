/**
 *  发现音乐 -> 音乐 -> 推荐歌单
 */

import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import Icon from 'react-native-vector-icons/SimpleLineIcons'
import { times } from 'lodash'
import color from 'src/common/color'
import screen from 'src/common/screen'
import CategoryTitle from '../../components/categoryTitle'
import ListItemWithIcon from '../../components/listItemWithIcon'

class Playlist extends Component {
  state = {
    list: []
  }

  renderIconText = props => {
    let { count } = props
    if (count >= 10000) {
      count = `${Math.round(count / 10000)}万`
    }
    return (
      <Icon name="earphones" size={10} color="#fff" style={styles.textIcon}>
        &nbsp;{count}
      </Icon>
    )
  }

  render() {
    const { list } = this.state

    return (
      <View>
        <CategoryTitle title="推荐歌单" />
        <View style={styles.categoryContainer}>
          {times(6, index => {
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
