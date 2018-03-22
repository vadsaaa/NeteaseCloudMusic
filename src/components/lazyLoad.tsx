/*
 * @Author: vic.du 
 * @Date: 2018-03-21 19:55:55 
 * @Last Modified by: vic.du
 * @Last Modified time: 2018-03-21 22:33:51
 */

import React from 'react'
import { View } from 'react-native'

const LazyLoad = WrappedComponent => {
  return class Wrapper extends React.Component {
    wrapper: any
    layoutChange = () => {
      this.wrapper.measure(this.shouldLoad)
    }

    shouldLoad(x: number, y: number, width: number, height: number, pagex: number, pagey: number) {
      // console.info(y)
      // console.info(pagey)
      // 滚动条的 event.nativeEvent.contentOffset.y + screen.height + 底部导航(按50算)  = pagey
    }

    render() {
      return (
        <View
          ref={c => {
            this.wrapper = c
          }}
          onLayout={this.layoutChange}
        >
          <WrappedComponent />
        </View>
      )
    }
  }
}

export default LazyLoad
