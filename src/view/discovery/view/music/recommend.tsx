import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { axios, api } from 'src/common/common'
import TwoLineItem from 'src/components/twoLineItem'
import { Slider, SlidersProps } from 'src/components/slider'
import screen from 'src/common/screen'
import colorConfig from 'src/config/color'

interface RecommendState extends SlidersProps {}

const color = colorConfig.day

class Recommend extends Component<{}, RecommendState> {
  constructor(props: {}) {
    super(props)
    this.state = {
      banners: []
    }
  }
  render() {
    const { banners } = this.state
    return (
      <View>
        <Slider banners={banners} />
        <View style={styles.recommendFunc}>
          <TwoLineItem
            containerStyle={styles.funcContainer}
            iconBg={require('src/images/Discovery/music/cm4_disc_topbtn.png')}
            iconBgStyle={styles.iconBgStyle}
            icon={require('src/images/Discovery/music/cm4_disc_topbtn_fm.png')}
            iconStyle={styles.iconStyle}
            downside="私人FM"
            downsideStyle={styles.downsideText}
          />
          <TwoLineItem
            containerStyle={styles.funcContainer}
            iconBg={require('src/images/Discovery/music/cm4_disc_topbtn.png')}
            iconBgStyle={styles.iconBgStyle}
            iconBgText={new Date().getDate()}
            iconBgTextStyle={styles.iconBgTextStyle}
            icon={require('src/images/Discovery/music/cm4_disc_topbtn_daily.png')}
            iconStyle={styles.iconStyle}
            downside="每日推荐"
            downsideStyle={styles.downsideText}
          />
          <TwoLineItem
            containerStyle={styles.funcContainer}
            iconBg={require('src/images/Discovery/music/cm4_disc_topbtn.png')}
            iconBgStyle={styles.iconBgStyle}
            icon={require('src/images/Discovery/music/cm4_disc_topbtn_list.png')}
            iconStyle={styles.iconStyle}
            downside="歌单"
            downsideStyle={styles.downsideText}
          />
          <TwoLineItem
            containerStyle={styles.funcContainer}
            iconBg={require('src/images/Discovery/music/cm4_disc_topbtn.png')}
            iconBgStyle={styles.iconBgStyle}
            icon={require('src/images/Discovery/music/cm4_disc_topbtn_rank.png')}
            iconStyle={styles.iconStyle}
            downside="排行榜"
            downsideStyle={styles.downsideText}
          />
        </View>
      </View>
    )
  }

  componentDidMount() {
    axios.get(api.banner).then(res => {
      this.setState({
        banners: res.data.banners
      })
    })
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
  typeTitleContainer: {
    position: 'absolute',
    right: 2,
    bottom: 4,
    borderRadius: 20
  },
  typeTitle: {
    color: '#fff',
    fontSize: 12,
    padding: 4
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
