import React from 'react'
import { ListView } from 'react-native'

import Pullable from './pullable'

export default class extends Pullable {
  getMetrics = args => {
    this.scroll.getMetrics(args)
  }

  scrollTo = (...args) => {
    this.scroll.scrollTo(...args)
  }

  scrollToEnd = args => {
    this.scroll.scrollToEnd(args)
  }

  getScrollable() {
    return (
      <ListView
        ref={c => {
          this.scroll = c
        }}
        enableEmptySections
        scrollEnabled={this.state.scrollEnabled}
        onScroll={this.onScroll}
        {...this.props}
      />
    )
  }
}
