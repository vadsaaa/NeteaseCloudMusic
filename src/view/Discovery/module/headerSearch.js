import React, { Component } from 'react'
import { Image, Text, StyleSheet, View } from 'react-native'

import screen from '../../../common/screen'
import color from '../../../common/color'

class SearchBar extends Component {
  gotoSearch = () => {
    // 搜索
  }
  render() {
    return (
      <View style={styles.searchBar}>
        <Image source={require('../../../images/Discovery/topbar_icn_search.png')} style={styles.searchIcon} />
        <Text onPress={this.gotoSearch} style={styles.text}>
          搜索音乐、视频、歌词、电台
        </Text>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  searchBar: {
    width: screen.width * 0.7,
    height: 30,
    borderRadius: 18,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    alignSelf: 'center'
  },
  searchIcon: {
    width: 20,
    height: 20,
    margin: 5
  },
  text: {
    color: color.textLightDark
  }
})

export default SearchBar
