import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import color from 'src/common/color'
import screen from 'src/common/screen'
import TwoLineItem from 'src/components/TwoLineItem'

class UserInfo extends Component {
  /**
   * 签到
   */
  signIn = () => {
    console.log('signin')
  }
  render() {
    return (
      <View>
        <View style={styles.userInfoContainer}>
          <View style={styles.userInfo}>
            <Image style={styles.avatar} source={require('src/images/Account/avatar.png')} />
            <TwoLineItem
              upside="假逗逗"
              containerStyle={styles.userNoBorder}
              upsideStyle={styles.nickname}
              downsideStyle={styles.lever}
              downside="Lv. 88"
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
            downsideStyle={styles.userRelatedDownside}
            downside="7"
          />
          <TwoLineItem
            containerStyle={styles.userRelated}
            upside="关注"
            upsideStyle={styles.userRelatedUpside}
            downsideStyle={styles.userRelatedDownside}
            downside="3"
          />
          <TwoLineItem
            containerStyle={styles.userRelated}
            upside="粉丝"
            upsideStyle={styles.userRelatedUpside}
            downsideStyle={styles.userRelatedDownside}
            downside="3"
          />
          <TwoLineItem
            containerStyle={styles.userRelated}
            icon={require('src/images/Account/cm2_set_icn_edit.png')}
            iconStyle={styles.iconStyle}
            upsideStyle={styles.userRelatedUpside}
            downside="我的资料"
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
