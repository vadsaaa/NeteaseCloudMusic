/*
 * @Author: vic.du 
 * @Date: 2018-03-14 16:35:18 
 * @Last Modified by: vic.du
 * @Last Modified time: 2018-03-19 16:31:45
 */

import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import screen from 'src/common/screen'
import TwoLineItem from 'src/components/twoLineItem'
import colorConfig from 'src/config/color'

const color = colorConfig.day
class UserInfo extends Component {
  /**
   * 签到
   */
  signIn = () => {
    //
  }
  render() {
    return (
      <View>
        <View style={styles.userInfoContainer}>
          <View style={styles.userInfo}>
            <Image style={styles.avatar} source={require('src/images/Account/avatar.png')} />
            <TwoLineItem
              containerStyle={styles.userNoBorder}
              upside="假逗逗"
              upsideStyle={styles.nickname}
              downside="Lv. 88"
              downsideStyle={styles.lever}
            />
          </View>
          <TouchableOpacity style={styles.signIn} onPress={this.signIn}>
            <Image style={styles.signInIcon} source={require('src/images/Account/cm2_pop_icn_jifen.png')} />
            <Text style={styles.signInText}>签到</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.main}>
          <TwoLineItem
            containerStyle={styles.userRelated}
            upside="动态"
            upsideStyle={styles.userRelatedUpside}
            downside="7"
            downsideStyle={styles.userRelatedDownside}
          />
          <TwoLineItem
            containerStyle={styles.userRelated}
            upside="关注"
            upsideStyle={styles.userRelatedUpside}
            downside="3"
            downsideStyle={styles.userRelatedDownside}
          />
          <TwoLineItem
            containerStyle={styles.userRelated}
            upside="粉丝"
            upsideStyle={styles.userRelatedUpside}
            downside="3"
            downsideStyle={styles.userRelatedDownside}
          />
          <TwoLineItem
            containerStyle={styles.userRelated}
            icon={require('src/images/Account/cm2_set_icn_edit.png')}
            iconStyle={styles.iconStyle}
            downside="我的资料"
            upsideStyle={styles.userRelatedUpside}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  userInfoContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: color.bgCommon,
    paddingBottom: 8
  },
  main: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: screen.onePixel,
    borderTopColor: color.borderBlack,
    borderStyle: 'solid',
    backgroundColor: color.bgCommon
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  avatar: {
    width: screen.width * 0.18,
    height: screen.width * 0.18,
    margin: 10,
    borderRadius: screen.width * 0.1
  },
  lever: {
    fontSize: 8,
    marginTop: 5,
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 5,
    paddingRight: 5,
    borderRadius: screen.width * 0.02,
    borderWidth: screen.onePixel,
    borderColor: color.lightBlack,
    borderStyle: 'solid',
    textAlign: 'center'
  },
  nickname: {
    fontSize: 16,
    color: color.textDark
  },
  signIn: {
    flexDirection: 'row',
    marginRight: 10,
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 8,
    paddingRight: 8,
    borderRadius: screen.width * 0.03,
    borderWidth: screen.onePixel,
    borderColor: color.theme,
    borderStyle: 'solid'
  },
  signInIcon: {
    width: 16,
    height: 16
  },
  signInText: {
    fontSize: 12,
    paddingLeft: 2,
    lineHeight: 14,
    color: color.theme
  },
  userRelated: {
    width: screen.width * 0.25,
    marginTop: 8,
    marginBottom: 8,
    borderRightWidth: screen.onePixel,
    borderRightColor: color.borderBlack,
    borderStyle: 'solid'
  },
  userNoBorder: {
    borderRightWidth: 0
  },
  userRelatedUpside: {
    fontWeight: '100',
    marginBottom: 2
  },
  userRelatedDownside: {
    fontWeight: 'bold',
    color: color.textDark
  },
  iconStyle: {
    width: 15,
    height: 15
  }
})

export default UserInfo
