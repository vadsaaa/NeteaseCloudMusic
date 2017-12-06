import React, { Component } from 'react'
import { View } from 'react-native'
import { observer, inject } from 'mobx-react'
import { map } from 'lodash'
import defaultMusicComOrder from 'src/config/defaultMusicComOrder'
import PlayList from './playlist'
import Exclusive from './exclusive'
import NewMusic from './newMusic'
import Mv from './mv'
import SpecialColumn from './specialColumn'
import Radio from './radio'
import MusicFooter from './musicFooter'

@inject('discoveryStore')
@observer
class Category extends Component {
  switchCom = val => {
    switch (val) {
      case 'playlist':
        return <PlayList key="playlist" />
      case 'exclusive':
        return <Exclusive key="exclusive" />
      case 'newMusic':
        return <NewMusic key="newMusic" />
      case 'mv':
        return <Mv key="mv" />
      case 'specialColumn':
        return <SpecialColumn key="specialColumn" />
      case 'radio':
        return <Radio key="radio" />
      default:
        return null
    }
  }

  render() {
    const musicComOrder = this.props.discoveryStore.get('musicComOrder')

    return (
      <View>
        {map(musicComOrder, val => {
          return this.switchCom(val)
        })}
        {musicComOrder.length && <MusicFooter />}
      </View>
    )
  }

  componentWillMount() {
    // 获取并将排列信息保存在store中
    storage.get('musicComOrder').then(res => {
      if (!res) {
        res = defaultMusicComOrder
      }
      this.props.discoveryStore.setMusicOrder(res)
    })
  }
}

export default Category
