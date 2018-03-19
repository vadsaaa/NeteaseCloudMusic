/*
 * @Author: vic.du 
 * @Date: 2018-03-19 19:00:15 
 * @Last Modified by: vic.du
 * @Last Modified time: 2018-03-19 19:30:25
 */

import React, { Component } from 'react'
import { Image, Text, StyleSheet, View } from 'react-native'
import screen from 'src/common/screen'
import colorConfig from 'src/config/color'

const color = colorConfig.day

class SearchBar extends Component {
  gotoSearch = () => {
    // 搜索
  }
  render() {
    return (
      <View style={styles.searchBar}>
        <Image source={require('src/images/Discovery/topbar_icn_search.png')} style={styles.searchIcon} />
        <Text onPress={this.gotoSearch} style={styles.text}>
          你很棒棒哦
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
