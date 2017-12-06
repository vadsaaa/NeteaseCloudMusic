/**
 * 发现音乐 -> 音乐 -> 底部可调整顺序
 */

import React, { Component } from 'react'
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native'
import { observer, inject } from 'mobx-react'
import screen from 'src/common/screen'
import color from 'src/common/color'

@inject('discoveryStore')
@observer
class MusicFooter extends Component {
  /**
   * 调整栏目顺序
   */
  changeComOrder = () => {
    // console.log('调整栏目顺序')
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.btn} onPress={this.changeComOrder}>
          <Text style={styles.btnText}>调整栏目顺序</Text>
        </TouchableOpacity>
        <Text style={styles.goVideo}>看视频, 发现更多有趣内容 &gt;</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    borderTopWidth: screen.onePixel,
    borderColor: color.textLightDark
  },
  btn: {
    width: 110,
    height: 28,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 16,
    borderWidth: screen.onePixel * 2,
    borderColor: '#C52627',
    marginTop: 32,
    marginBottom: 20
  },
  btnText: {
    fontSize: 12,
    color: '#C52627'
  },
  goVideo: {
    fontSize: 13,
    textAlign: 'center',
    color: color.textLightDark,
    marginBottom: 30
  }
})

export default MusicFooter
