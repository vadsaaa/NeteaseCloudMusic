import React, { Component } from 'react'
import Swiper from 'react-native-swiper'
import { View, Image, StyleSheet } from 'react-native'
import TwoLineItem from 'src/components/TwoLineItem'
import screen from 'src/common/screen'
import color from 'src/common/color'

class Recommend extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <View>
        <Swiper
          loop
          loadMinimal
          autoplay
          style={styles.wrapper}
          height={146}
          dot={<View style={styles.dot} />}
          activeDot={<View style={styles.activeDot} />}
          paginationStyle={{
            bottom: 4
          }}
        >
          <View style={styles.slide}>
            <Image
              resizeMode="stretch"
              style={styles.image}
              source={require('src/images/Discovery/music/cm2_default_activity.png')}
            />
          </View>
          <View style={styles.slide}>
            <Image
              resizeMode="stretch"
              style={styles.image}
              source={require('src/images/Discovery/music/cm2_default_activity.png')}
            />
          </View>
          <View style={styles.slide}>
            <Image
              resizeMode="stretch"
              style={styles.image}
              source={require('src/images/Discovery/music/cm2_default_activity.png')}
            />
          </View>
          <View style={styles.slide}>
            <Image
              resizeMode="stretch"
              style={styles.image}
              source={require('src/images/Discovery/music/cm2_default_activity.png')}
            />
          </View>
        </Swiper>
        <View style={styles.recommendFunc}>
          <TwoLineItem
            containerStyle={styles.funcContainer}
            iconBg={require('src/images/Discovery/music/cm4_disc_topbtn.png')}
            iconBgStyle={styles.iconBgStyle}
            icon={require('src/images/Discovery/music/cm4_disc_topbtn_fm.png')}
            iconStyle={styles.iconStyle}
            downsideStyle={styles.downsideText}
            downside="私人FM"
          />
          <TwoLineItem
            containerStyle={styles.funcContainer}
            iconBg={require('src/images/Discovery/music/cm4_disc_topbtn.png')}
            iconBgStyle={styles.iconBgStyle}
            iconBgText={new Date().getDate()}
            iconBgTextStyle={styles.iconBgTextStyle}
            icon={require('src/images/Discovery/music/cm4_disc_topbtn_daily.png')}
            iconStyle={styles.iconStyle}
            downsideStyle={styles.downsideText}
            downside="每日推荐"
          />
          <TwoLineItem
            containerStyle={styles.funcContainer}
            iconBg={require('src/images/Discovery/music/cm4_disc_topbtn.png')}
            iconBgStyle={styles.iconBgStyle}
            icon={require('src/images/Discovery/music/cm4_disc_topbtn_list.png')}
            iconStyle={styles.iconStyle}
            downsideStyle={styles.downsideText}
            downside="歌单"
          />
          <TwoLineItem
            containerStyle={styles.funcContainer}
            iconBg={require('src/images/Discovery/music/cm4_disc_topbtn.png')}
            iconBgStyle={styles.iconBgStyle}
            icon={require('src/images/Discovery/music/cm4_disc_topbtn_rank.png')}
            iconStyle={styles.iconStyle}
            downsideStyle={styles.downsideText}
            downside="排行榜"
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },
  dot: {
    backgroundColor: 'rgba(0,0,0,.2)',
    width: 6,
    height: 6,
    borderRadius: 6,
    marginLeft: 2,
    marginRight: 2,
    marginTop: 2,
    marginBottom: 2
  },
  activeDot: {
    backgroundColor: '#C52627',
    width: 6,
    height: 6,
    borderRadius: 6,
    marginLeft: 2,
    marginRight: 2,
    marginTop: 2,
    marginBottom: 2
  },
  image: {
    width: screen.width,
    flex: 1
  },
  recommendFunc: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: screen.onePixel,
    borderColor: color.borderBlack,
    borderStyle: 'solid',
    paddingTop: 10,
    paddingBottom: 10
  },
  funcContainer: {
    width: screen.width * 0.25,
    marginTop: 8,
    marginBottom: 8,
    borderRightWidth: 0,
    alignItems: 'center'
  },
  downsideText: {
    color: color.textDark,
    paddingTop: 6
  },
  iconStyle: {
    width: 48,
    height: 48
  },
  iconBgStyle: {
    width: 48,
    height: 48
  },
  iconBgTextStyle: {
    color: color.textRed,
    marginTop: 20,
    fontSize: 12,
    textAlign: 'center',
    backgroundColor: 'transparent'
  }
})

export default Recommend
