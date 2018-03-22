/*
 * @Author: vic.du 
 * @Date: 2018-03-21 22:41:50 
 * @Last Modified by: vic.du
 * @Last Modified time: 2018-03-22 10:46:08
 */

import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import times from 'lodash/times'
import { axios, api } from 'src/common/common'
import screen from 'src/common/screen'
import CategoryTitle from '../../../components/categoryTitle'
import ListItem from '../../../components/listItem'

type RadioItem = {
  id: number
  name: string
  picUrl: string
  rcmdtext: string
}

interface RadioCategoryState {
  list: RadioItem[]
}
interface RadioCategoryProps {
  data: {
    id: number
    name: string
  }
}

class RadioCategory extends Component<RadioCategoryProps, RadioCategoryState> {
  constructor(props: RadioCategoryProps) {
    super(props)
    this.state = {
      list: []
    }
  }
  //  点击title跳转
  handleTitleClick = () => {
    //
  }

  render() {
    const { list } = this.state
    const { data } = this.props

    return (
      <View>
        <CategoryTitle title={data.name} onPress={this.handleTitleClick} />
        <View style={styles.categoryContainer}>
          {times(3, (index: number) => {
            const item = list[index]
            if (item) {
              return (
                <ListItem
                  key={item.id}
                  rootStyle={styles.rootStyle}
                  numberOfLines={2}
                  imgBg={item.picUrl}
                  imgBgStyle={styles.imgBgStyle}
                  title={item.name}
                  subTitle={item.rcmdtext}
                  subTitleStyle={styles.subTitleStyle}
                />
              )
            }
            return null
          })}
        </View>
      </View>
    )
  }

  componentDidMount() {
    axios.get(`${api.djRecommend}?type=${this.props.data.id}`).then(res => {
      // console.info(res.data.djRadios)
      this.setState({
        list: res.data.djRadios
      })
    })
  }
}
const styles = StyleSheet.create({
  categoryContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    flexWrap: 'wrap'
  },
  rootStyle: {
    width: screen.width / 3 - 4,
    height: 180
  },
  imgBgStyle: {
    width: screen.width / 3 - 2,
    height: screen.width / 3 - 2,
    marginBottom: 6
  },
  subTitleStyle: {
    color: '#fff',
    backgroundColor: 'transparent',
    position: 'absolute',
    top: 104
  }
})

export default RadioCategory
