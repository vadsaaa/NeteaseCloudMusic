/*
 * @Author: vic.du 
 * @Date: 2018-03-21 16:48:43 
 * @Last Modified by: vic.du
 * @Last Modified time: 2018-03-21 22:58:19
 */

import React, { PureComponent } from 'react'
import { View } from 'react-native'
import Payfor from './view/pay'
import Recommendation from './view/recommendation'
import RadioCategories from './view/radioCategories'

export default class Station extends PureComponent {
  render() {
    return (
      <View>
        <Payfor />
        <Recommendation />
        <RadioCategories />
      </View>
    )
  }
}
