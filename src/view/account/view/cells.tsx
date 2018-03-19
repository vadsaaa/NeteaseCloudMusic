/*
 * @Author: vic.du 
 * @Date: 2018-03-13 18:26:55 
 * @Last Modified by: vic.du
 * @Last Modified time: 2018-03-19 10:52:53
 */

import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import config from 'src/config/accountItem'
import SpacingView from 'src/components/spacingView'
import AccountItem from '../components/accountItem'
import colorConfig from 'src/config/color'

const color = colorConfig.day

export default class UserInfo extends Component {
  state = {
    model: false
  }

  handleSwitchChange = () => {
    //
  }

  logout = () => {
    // 退出登录
  }

  /**
   * 根据config渲染列表
   */
  renderCell = () => {
    const cells: any[] = []
    config.forEach(row => {
      row.cells.forEach((item, index, arr) => {
        let cell
        if (item.switch) {
          const style = { paddingTop: 6, paddingBottom: 6 }
          cell = (
            <AccountItem
              style={style}
              icon={item.icon}
              title={item.title}
              subtitle={item.subtitle}
              key={item.dataIndex}
              isSwitch={item.switch}
              switchValue={this.state.model}
              handleSwitchChange={this.handleSwitchChange}
            />
          )
        } else {
          const style = index === arr.length - 1 ? { borderBottomWidth: 0 } : {}
          cell = (
            <AccountItem
              style={style}
              icon={item.icon}
              title={item.title}
              subtitle={item.subtitle}
              key={item.dataIndex}
            />
          )
        }
        cells.push(cell)
      })
      cells.push(<SpacingView key={row.rowKey} />)
    })
    return <View>{cells}</View>
  }

  render() {
    return (
      <View style={styles.container}>
        <SpacingView />
        {this.renderCell()}
        <TouchableOpacity onPress={this.logout}>
          <Text style={styles.logoutText}>退出登录</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.bgCommon
  },
  logoutText: {
    textAlign: 'center',
    fontSize: 16,
    padding: 12,
    color: color.textRed
  }
})
