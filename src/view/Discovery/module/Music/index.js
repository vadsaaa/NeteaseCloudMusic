import React, { Component } from 'react'
import { StyleSheet, ScrollView } from 'react-native'
import color from 'src/common/color'
import Recommend from './recommend'
import Category from './category'

class Broadcasting extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <ScrollView style={styles.container}>
        <Recommend />
        <Category />
      </ScrollView>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: color.bgCommon
  }
})

export default Broadcasting
