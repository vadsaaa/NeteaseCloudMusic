import React from 'react'
import { StyleSheet, ScrollView, View, RefreshControl } from 'react-native'
import { noop } from 'lodash'
import colorConfig from 'src/config/color'

const color = colorConfig.day

export default function Wrapper(Component: any) {
  return function(props: any) {
    return (
      <View>
        <ScrollView
          style={styles.container}
          onScroll={this.handleScroll}
          scrollEventThrottle={5}
          refreshControl={
            <RefreshControl
              refreshing={false}
              onRefresh={noop}
              tintColor="#fff"
              title="松开刷新"
              titleColor={color.textLightDark}
              colors={['#fff']}
              progressBackgroundColor="#fff"
            />
          }
        >
          <Component {...props} />
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
