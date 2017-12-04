/**
 * loading 等与数据操作无关的数据
 */

import { observable, action, computed } from 'mobx'
import Base from './base'

class Common extends Base {
  @observable loadingCount = 0
  @observable loading = {}
  /**
   * 根据loading的数量动态计算是否loading
   * @return {Boolean} true/false
   */
  @computed
  get isLoading() {
    return Boolean(this.loadingCount)
  }
  /**
   * loading数量 +1
   */
  @action
  increaseLoadingCount() {
    this.loadingCount += 1
  }
  /**
   * loading数量 -1
   */
  @action
  decreaseLoadingCount() {
    this.loadingCount -= 1
  }
  /**
   * 可以配置请求的name, 存储到loading对象中,用于特殊操作
   */
  @action
  setLoading(name, value) {
    this.loading[name] = value
  }
}
export default new Common()
