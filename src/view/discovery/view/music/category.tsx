import React, { Component } from 'react'
import { View } from 'react-native'
import defaultMusicComOrder from 'src/config/defaultMusicComOrder'
import PlayList from './view/playlist'
import Exclusive from './view/exclusive'
import LatestMusic from './view/latestMusic'
// import Mv from './mv'
// import SpecialColumn from './specialColumn'
import Radio from './view/radio'
// import MusicFooter from './musicFooter'

class Category extends Component {
  switchCom = val => {
    switch (val) {
      case 'playlist':
        return <PlayList key="playlist" />
      case 'exclusive':
        return <Exclusive key="exclusive" />
      case 'latestMusic':
        return <LatestMusic key="newMusic" />
      // case 'mv':
      //   return <Mv key="mv" />
      // case 'specialColumn':
      //   return <SpecialColumn key="specialColumn" />
      case 'radio':
        return <Radio key="radio" />
      default:
        return null
    }
  }

  render() {
    const musicComOrder = defaultMusicComOrder

    return (
      <View>
        {musicComOrder.map(val => this.switchCom(val))}
        {/* {musicComOrder.length && <MusicFooter />} */}
      </View>
    )
  }
}

export default Category
