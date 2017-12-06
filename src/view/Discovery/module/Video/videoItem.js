/**
 *  TODO: 目前使用的网易云播放接口 无法直接在组件内使用, uri先写死
 */
import React, { PureComponent } from 'react'
import { Text, StyleSheet, View, Image, TouchableWithoutFeedback } from 'react-native'
import Video from 'react-native-video'
import screen from 'src/common/screen'
import color from 'src/common/color'

class VideoItem extends PureComponent {
  setTimeTimes = 0
  state = {
    isLike: false,
    iconVisible: true
  }

  /**
   * 点赞
   */
  handleLike = () => {
    this.setState({
      isLike: !this.state.isLike
    })
  }
  /**
   * 播放/暂停
   */
  onPress = () => {
    const { onPressItem, dataIndex, id } = this.props
    onPressItem(dataIndex, id)
    this.setTimeTimes = 0
    this.setState({
      iconVisible: true
    })
  }

  /**
   * 获取播放进度, 用于隐藏控制按钮
   */
  setTime = () => {
    this.setTimeTimes += 1
    if (this.setTimeTimes >= 10) {
      this.setState({
        iconVisible: false
      })
    }
  }
  render() {
    const { item, selected, id } = this.props
    const { isLike, iconVisible } = this.state
    const likeClass = isLike ? [styles.likeText, styles.isLike] : [styles.likeText]
    const isSelected = selected.id === id
    const isPlaying = isSelected && !selected.paused

    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={this.onPress}>
          <View>
            {isSelected && (
              <Video
                style={styles.video}
                source={{
                  uri:
                    'http://pgccdn.v.baidu.com/1478111690_1300064528_20171205174007.mp4?authorization=bce-auth-v1%2Fc308a72e7b874edd9115e4614e1d62f6%2F2017-12-05T09%3A43%3A31Z%2F-1%2F%2F8e839e2a7de61c4cb7ad17323747011b52a310319a685046204729993ca76a81&responseCacheControl=max-age%3D8640000&responseExpires=Thu%2C+15+Mar+2018+17%3A43%3A31+GMT&xcode=e43167005a5daeea2f792f8d5f221a62d0a3650f77973f1c&time=1512555109&_=1512471969330'
                }}
                rate={1.0} // 控制暂停/播放，0 代表暂停paused, 1代表播放normal.
                volume={1.0} // 声音的放大倍数，0 代表没有声音，就是静音muted, 1 代表正常音量 normal，更大的数字表示放大的倍数
                muted={false} // true代表静音，默认为false.
                paused={!isPlaying} // true代表暂停，默认为false
                resizeMode="cover" // 视频的自适应伸缩铺放行为，
                repeat={false} // 是否重复播放
                playInBackground // 当app转到后台运行的时候，播放是否暂停
                playWhenInactive
                onProgress={this.setTime} //  进度控制，每250ms调用一次，以获取视频播放的进度
              />
            )}

            <Image
              style={isSelected ? [styles.backgroundVideo, styles.hidden] : styles.backgroundVideo}
              source={{ uri: item.cover }}
              defaultSource={require('src/images/Discovery/video/cm2_default_act.png')}
            />

            <Image
              style={isPlaying ? [styles.videoStatus, styles.hidden] : styles.videoStatus}
              source={require('src/images/Discovery/video/cm2_act_cmt_play.png')}
            />
            {iconVisible &&
              isPlaying && (
                <Image
                  style={styles.videoStatus}
                  source={require('src/images/Discovery/video/cm2_act_cmt_pause.png')}
                />
              )}
          </View>
        </TouchableWithoutFeedback>
        <View style={styles.descContainer}>
          <Text style={styles.title} numberOfLines={2}>
            {item.briefDesc}
          </Text>
          <TouchableWithoutFeedback style={styles.commonContainer} onPress={this.handleLike}>
            <View style={styles.commonContainer}>
              {isLike ? (
                <Image
                  style={styles.likeIcon}
                  source={require('src/images/Discovery/video/cm4_list_video_icn_praised.png')}
                />
              ) : (
                <Image
                  style={styles.likeIcon}
                  source={require('src/images/Discovery/video/cm4_list_video_icn_praise.png')}
                />
              )}
              <Text style={likeClass}>999+</Text>
            </View>
          </TouchableWithoutFeedback>
          <View style={styles.commonContainer}>
            <Image style={styles.cmtIcon} source={require('src/images/Discovery/video/cm4_list_video_icn_cmt.png')} />
            <Text style={styles.cmtText}>999+</Text>
          </View>
          <View style={styles.commonContainer}>
            <Image style={styles.share} source={require('src/images/Discovery/video/cm4_list_video_icn_more.png')} />
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  backgroundVideo: {
    width: screen.width,
    height: 212
  },
  video: {
    width: screen.width,
    height: 212
  },
  hidden: {
    width: 0,
    height: 0
  },
  descContainer: {
    paddingTop: 10,
    paddingBottom: 20,
    paddingLeft: 8,
    flexDirection: 'row'
  },
  videoStatus: {
    width: 45,
    height: 45,
    position: 'absolute',
    top: 83,
    left: screen.width * 0.5 - 23.5
  },
  title: {
    width: screen.width * 0.6,
    height: 38.5,
    fontSize: 16
  },
  commonContainer: {
    width: screen.width * 0.13,
    justifyContent: 'center',
    alignItems: 'center'
  },
  likeIcon: {
    width: 16
  },
  likeText: {
    fontSize: 10,
    color: color.textLightDark
  },
  isLike: {
    color: color.textRed
  },
  cmtIcon: {
    width: 16
  },
  cmtText: {
    fontSize: 10,
    color: color.textLightDark
  }
})
export default VideoItem
