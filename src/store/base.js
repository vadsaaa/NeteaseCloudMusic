import { toJS, action } from 'mobx'
import { set, get } from 'lodash'

export default class Base {
  /**
   * 获得数据模型的属性值
   * @param {string=} path - 获取的路径，可为空
   * @return {Object|*} 返回值
   */
  get(path = '') {
    if (!path) return toJS(this)
    return toJS(get(this, path))
  }
  /**
   * 保存输入与数据模型
   * @param {string|object} path - 保存路径或要保存的key-value
   * @param {*} val - 保存值，如果path为key-value，可省略
   */
  @action
  set(path, val = undefined) {
    if (!path) throw new Error('path必填!')
    set(this, path, val)
  }
}
