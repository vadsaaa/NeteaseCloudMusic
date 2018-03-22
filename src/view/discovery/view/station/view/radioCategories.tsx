/*
 * @Author: vic.du 
 * @Date: 2018-03-21 22:36:05 
 * @Last Modified by: vic.du
 * @Last Modified time: 2018-03-22 11:40:28
 */

import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import times from 'lodash/times'
import { axios, api } from 'src/common/common'
import RadioCategory from './radioCategory'
import RadioCategoryTitle from './radioCategoryTitle'
import CategoryTitle from '../../../components/categoryTitle'
import screen from 'src/common/screen'
import colorConfig from 'src/config/color'

type Category = {
  id: number
  name: string
  pic84x84IdUrl: string
}

interface LatestMusicState {
  categories: Category[]
}

const color = colorConfig.day

class RadioCategories extends Component<any, LatestMusicState> {
  constructor(props: {}) {
    super(props)
    this.state = {
      categories: []
    }
  }

  renderCategories = () => {
    const categories: JSX.Element[] = []
    this.state.categories.forEach(item => categories.push(<RadioCategory key={item.id} data={item} />))
    return categories
  }
  render() {
    const { categories } = this.state
    if (!categories.length) {
      return null
    }
    return (
      <View>
        <View>{categories.map(item => <RadioCategory key={item.id} data={item} />)}</View>
        <CategoryTitle title="热门分类" showArrow={false} />
        <View style={styles.categorieTitleContainer}>
          {times(6, (index: number) => {
            const item = categories[index]
            return <RadioCategoryTitle key={item.id} title={item.name} picUrl={item.pic84x84IdUrl} />
          })}
        </View>
        <CategoryTitle containerStyle={{ marginTop: 20 }} title="更多分类" showArrow={false} />
        <View style={styles.categorieTitleContainer}>
          {times(categories.length - 6, (index: number) => {
            const item = categories[index + 6]
            return <RadioCategoryTitle key={item.id} title={item.name} picUrl={item.pic84x84IdUrl} />
          })}
        </View>
      </View>
    )
  }

  componentDidMount() {
    axios.get(api.cateList).then(res => {
      this.setState({
        categories: res.data.categories
      })
    })
  }
}

const styles = StyleSheet.create({
  categorieTitleContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderTopWidth: screen.onePixel,
    borderColor: color.borderLightDark,
    borderStyle: 'solid'
  }
})

export default RadioCategories
