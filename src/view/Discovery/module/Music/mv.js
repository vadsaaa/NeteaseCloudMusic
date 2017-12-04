/**
 *  发现音乐 -> 音乐 -> 最新音乐
 */

import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import { times, map } from 'lodash'
import Icon from 'react-native-vector-icons/Ionicons'
import screen from 'src/common/screen'
import CategoryTitle from '../../components/categoryTitle'
import ListItem from '../../components/listItem'

class Mv extends Component {
  state = {
    list: []
  }

  renderIconText = props => {
    let { count } = props
    if (count >= 100000) {
      count = `${Math.round(count / 100000)}万`
    }
    return (
      <Icon name="ios-videocam-outline" size={14} color="#fff" style={styles.textIcon}>
        &nbsp;{count}
      </Icon>
    )
  }

  render() {
    const { list } = this.state

    return (
      <View>
        <CategoryTitle title="推荐MV" />
        <View style={styles.categoryContainer}>
          {times(4, index => {
            const item = list[index]
            if (item) {
              const subTitle = map(item.artists, 'name').join('/')
              return (
                <ListItem
                  key={item.id}
                  rootStyle={styles.rootStyle}
                  imgBg={item.picUrl}
                  imgBgStyle={styles.imgBgStyle}
                  TextIcon={this.renderIconText({ count: item.playCount })}
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
    axios.get(api.mv).then(res => {
      this.setState({
        list: res.result
      })
    })
  }
}
const styles = StyleSheet.create({
  categoryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap'
  },
  rootStyle: {
    width: screen.width / 2 - 2
  },
  imgBgStyle: {
    width: screen.width / 2 - 2,
    height: 106,
    marginBottom: 6
  },
  textIcon: {
    backgroundColor: 'transparent',
    textAlign: 'right',
    fontSize: 13,
    paddingRight: 4,
    marginTop: 2
  }
})

export default Mv
