import React, { Component } from 'react'
import { View } from 'react-native'
// import { View, StyleSheet } from 'react-native'
// import screen from 'src/common/screen'
// import VideoPlayer from 'react-native-video-controls'

class VideoItem extends Component<{}, {}> {
  player: any

  render() {
    return (
      <View>
        {/* <VideoPlayer
          source={{
            uri: `http://music.dudoudou.top/mv/url?url=http://v4.music.126.net/20180423015319/376094d1870f53423922
              3cb67392368b/web/cloudmusic/mv/20180419113609/fc63eaa1-a328-45bf-b94e-d
              525a9ae3b11/25f45cf41c3aadece407e15bdcb146c5.mp4`
          }}
        /> */}
        {/* <Video
          source={{
            uri:
              'http://v4.music.126.net/20180423015319/376094d1870f534239223cb67392368b/web/cloudmusic/mv/20
              180419113609/fc63eaa1-a328-45bf-b94e-d525a9ae3b11/25f45cf41c3aadece407e15bdcb146c5.mp4'
          }} // Can be a URL or a local file.
          poster="http://p3.music.126.net/H60U942KvIQNcPiOD6TQGQ==/109951163255376872.jpg"
          ref={ref => {
            this.player = ref
          }} // Store reference
          rate={1.0} // 0 is paused, 1 is normal.
          volume={1.0} // 0 is muted, 1 is normal.
          muted={false} // Mutes the audio entirely.
          paused={false} // Pauses playback entirely.
          resizeMode="cover" // Fill the whole screen at aspect ratio.*
          repeat={true} // Repeat forever.
          playInBackground={false} // Audio continues to play when app entering background.
          playWhenInactive={false} // [iOS] Video continues to play when control or notification center are shown.
          progressUpdateInterval={250.0} // [iOS] Interval to fire onProgress (default to ~250ms)
          onLoadStart={this.loadStart} // Callback when video starts to load
          onLoad={this.setDuration} // Callback when video loads
          onProgress={this.setTime} // Callback every ~250ms with currentTime
          onEnd={this.onEnd} // Callback when playback finishes
          onError={this.videoError} // Callback when video cannot be loaded
          onBuffer={this.onBuffer} // Callback when remote video is buffering
          onTimedMetadata={this.onTimedMetadata} // Callback when the stream receive some metadata
          style={styles.backgroundVideo}
        /> */}
      </View>
    )
  }
  // loadStart() {}
  // setDuration() {}
  // setTime() {}
  // onEnd() {}
  // videoError(err: any) {
  //   console.info(err)
  // }
  // onBuffer() {}
  // onTimedMetadata() {}
}

// const styles = StyleSheet.create({
//   backgroundVideo: {
//     width: screen.width,
//     height: 212
//   },
//   video: {
//     width: screen.width,
//     height: 212
//   }
// })

export default VideoItem
