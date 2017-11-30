import React, { Component } from 'react'
import { ScrollView } from 'react-native'
import NavigationItem from '../../components/NavigationItem'
import color from '../../common/color'

import UserInfo from './userInfo'
import Cells from './cells'

class AccountScene extends Component {
  static navigationOptions = {
    title: '账号',
    headerTitleStyle: {
      color: color.headerText
    },
    headerRight: <NavigationItem icon={require('../../images/common/playing.png')} onPress={() => {}} />
  }

  constructor(props) {
    super(props)
    this.state = {}
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

export default AccountScene
