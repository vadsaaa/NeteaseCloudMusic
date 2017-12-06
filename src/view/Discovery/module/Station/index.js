import React, { PureComponent } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class Station extends PureComponent {
  // 数据容器，用来存储数据
  dataContainer = []

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <View>
        <Text>666</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({})
