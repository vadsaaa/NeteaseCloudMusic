import React, { Component } from 'react'
import { StyleSheet, ScrollView, View, RefreshControl } from 'react-native'
import { noop } from 'lodash'
import color from 'src/common/color'
import Recommend from './recommend'
import Category from './category'

class Music extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <View>
        <ScrollView
          style={styles.container}
          refreshControl={
            <RefreshControl
              refreshing={false}
              onRefresh={noop}
              tintColor="#fff"
              title="首页内容根据你的口味生成"
              titleColor={color.textLightDark}
              colors={['#fff']}
              progressBackgroundColor="#fff"
            />
          }
        >
          <Recommend />
          <Category />
        </ScrollView>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: color.bgCommon
  }
})

export default Music
