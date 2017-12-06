/**
 *  发现音乐 -> 音乐 -> 主播电台
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
        <CategoryTitle title="主播电台" />
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
                  titleStyle={styles.titleStyle}
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

export default NewMusic
