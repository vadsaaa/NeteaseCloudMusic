/*
 * @Author: vic.du 
 * @Date: 2018-03-13 18:26:55 
 * @Last Modified by: vic.du
 * @Last Modified time: 2018-03-16 10:25:02
 */

import React, { Component } from 'react'
import { ScrollView } from 'react-native'
import { connect } from 'react-redux'
import NavigationItem from 'src/components/navigationItem'
import colorConfig from 'src/config/color'

import UserInfo from './view/userInfo'
import Cells from './view/cells'

const color = colorConfig.day

type Props = {}

class AccountScene extends Component<Props> {
  static navigationOptions = {
    title: '账号',
    headerTitleStyle: {
      color: color.headerText
    },
    headerRight: <NavigationItem icon={require('../../images/common/playing.png')} />
  }

  render() {
    return (
      <ScrollView>
        <UserInfo />
        <Cells />
      </ScrollView>
    )
  }
}

function mapStateToProps(state) {
  return state
}

function mapDispatchToProps(dispatch) {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(AccountScene)
