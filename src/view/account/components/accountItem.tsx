/*
 * @Author: vic.du 
 * @Date: 2018-03-13 18:26:55 
 * @Last Modified by: vic.du
 * @Last Modified time: 2018-03-19 10:54:19
 */

import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, Switch } from 'react-native'
import { ViewStyle, ImageURISource } from 'react-native'
import screen from 'src/common/screen'
import colorConfig from 'src/config/color'

interface AccountItemProps {
  icon?: ImageURISource
  isSwitch?: boolean
  switchValue?: boolean
  handleSwitchChange?: (value: boolean) => void
  style?: ViewStyle
  title: string
  subtitle?: string
}

const color = colorConfig.day

export default class extends React.PureComponent<AccountItemProps, {}> {
  render() {
    const { icon, isSwitch, switchValue, handleSwitchChange, style, title, subtitle } = this.props
    return (
      <View style={styles.container}>
        <TouchableOpacity>
          <View style={styles.content}>
            <View>{icon && <Image style={styles.icon} source={icon} />}</View>
            <View style={[styles.textContainer, style]}>
              <Text style={styles.textStyle}>{title}</Text>
              <View style={{ flex: 1, backgroundColor: 'blue' }} />
              <Text style={{ color: color.accountItemTextColor }}>{subtitle}</Text>
              {isSwitch && (
                <Switch style={styles.isSwitch} value={switchValue} onTintColor="red" onValueChange={handleSwitchChange} />
              )}
              <Image style={styles.arrow} source={require('../../../images/Account/cm2_icn_notify_arrow.png')} />
            </View>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.bgCommon
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    paddingLeft: 15,
    paddingRight: 10
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 10
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    paddingTop: 14,
    paddingBottom: 14,
    borderBottomWidth: screen.onePixel,
    borderBottomColor: color.borderBlack,
    borderStyle: 'solid'
  },
  textStyle: {
    fontSize: 16
  },
  subtitleContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  arrow: {
    width: 12,
    height: 12,
    marginLeft: 5
  },
  isSwitch: {}
})
