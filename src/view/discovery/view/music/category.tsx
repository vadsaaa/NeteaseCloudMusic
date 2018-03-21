import React, { Component } from 'react'
import { View } from 'react-native'
import defaultMusicComOrder from 'src/config/defaultMusicComOrder'
import PlayList from './view/playlist'
import Exclusive from './view/exclusive'
import LatestMusic from './view/latestMusic'
import Vip from './view/vip'
import ChoicenessColumn from './view/choicenessColumn'
import Radio from './view/radio'
import RecommendSinger from './view/recommendSinger'
import MusicLive from './view/musicLive'
import GuessLike from './view/guessLike'
import MusicFooter from './view/musicFooter'

class Category extends Component {
  switchCom = val => {
    switch (val) {
      case 'playlist':
        return <PlayList key="playlist" />
      case 'exclusive':
        return <Exclusive key="exclusive" />
      case 'latestMusic':
        return <LatestMusic key="newMusic" />
      case 'vip':
        return <Vip key="mv" />
      case 'choicenessColumn':
        return <ChoicenessColumn key="choicenessColumn" />
      case 'radio':
        return <Radio key="radio" />
      case 'recommendSinger':
        return <RecommendSinger key="recommendSinger" />
      case 'musicLive':
        return <MusicLive key="musicLive" />
      case 'guessLike':
        return <GuessLike key="guessLike" />
      default:
        return null
    }
  }

  render() {
    const musicComOrder = defaultMusicComOrder

    return (
      <View>
        {musicComOrder.map(val => this.switchCom(val))}
        {musicComOrder.length && <MusicFooter />}
      </View>
    )
  }
}

export default Category
