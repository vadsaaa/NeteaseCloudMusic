/*
 * @Author: vic.du 
 * @Date: 2018-03-13 18:20:14 
 * @Last Modified by: vic.du
 * @Last Modified time: 2018-03-21 22:48:13
 */

const domain = 'http://music.dudoudou.top'

export default {
  banner: `${domain}/banner`,
  recommendPlayList: `${domain}/personalized`,
  privateContent: `${domain}/personalized/privatecontent`,
  newsong: `${domain}/personalized/newsong`,
  mv: `${domain}/personalized/mv`,
  radio: `${domain}/personalized/djprogram`,
  video: `${domain}/mv/first?limit=8`, // 发现音乐 -> 视频
  getVideoInfo: `${domain}/mv`, // 根据视频Id获取视频详情
  playVideo: `${domain}/mv/url?url=`, // 播放视频
  cateList: `${domain}/dj/catelist`, // 电台分类列表
  djRecommend: `${domain}/dj/recommend/type` // 电台分类推荐
}
