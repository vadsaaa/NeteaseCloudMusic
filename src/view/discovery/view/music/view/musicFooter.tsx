/*
 * @Author: vic.du 
 * @Date: 2018-03-21 15:56:42 
 * @Last Modified by: vic.du
 * @Last Modified time: 2018-03-21 16:08:09
 */

/**
 * 音乐 -> 发现音乐 -> 底部可调整顺序
 */

import React, { Component } from 'react'
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native'
import screen from 'src/common/screen'
import colorConfig from 'src/config/color'

const color = colorConfig.day

class MusicFooter extends Component {
  changeComOrder = () => {
    // console.log('调整栏目顺序')
  }
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.btn} onPress={this.changeComOrder}>
          <Text style={styles.btnText}>调整栏目顺序</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 12,
    borderTopWidth: screen.onePixel,
    borderColor: color.borderLightDark,
    paddingTop: 30,
    paddingBottom: 40
  },
  btn: {
    width: 110,
    height: 28,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 16,
    borderWidth: screen.onePixel * 2,
    borderColor: '#C52627'
  },
  btnText: {
    fontSize: 12,
    color: '#C52627'
  }
})

export default MusicFooter
