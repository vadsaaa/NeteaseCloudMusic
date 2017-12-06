/**
 * loading 等与数据操作无关的数据
 */

import { observable, action } from 'mobx'
import Base from './base'

class Common extends Base {
  @observable musicComOrder = {}

  /**
   * 设置发现音乐 -> 音乐 页面中各栏目的排列位置
   * @param {object} obj
   */
  @action
  setMusicOrder(obj) {
    this.set('musicComOrder', obj)
    storage.save('musicComOrder', obj)
  }
}
export default new Common()
