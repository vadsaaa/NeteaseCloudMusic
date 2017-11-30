import React, { PureComponent } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, Switch } from 'react-native'
import color from '../../../common/color'
import screen from '../../../common/screen'

class AccountItem extends PureComponent {
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
                <Switch
                  style={styles.isSwitch}
                  value={switchValue}
                  onTintColor="red"
                  onValueChange={handleSwitchChange}
                />
              )}
              <Image style={styles.arrow} source={require('../../../images/Account/cm2_radio_icn_arr.png')} />
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
    paddingRight: 10,
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
  }
})

export default AccountItem
