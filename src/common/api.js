const domain = 'http://localhost:3000'

export default {
  banner: `${domain}/banner`,
  recommendPlayList: `${domain}/personalized`,
  privatecontent: `${domain}/personalized/privatecontent`,
  newsong: `${domain}/personalized/newsong`,
  mv: `${domain}/personalized/mv`,
  radio: `${domain}/personalized/djprogram`,
  video: `${domain}/mv/first?limit=8`, // 发现音乐 -> 视频
  getVideoInfo: `${domain}/mv`, // 根据视频Id获取视频详情
  playVideo: `${domain}/mv/url?url=` // 播放视频
}
