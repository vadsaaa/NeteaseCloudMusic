/**
 *  发现音乐 -> 音乐 -> 独家放送
 */

import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { map, findIndex } from 'lodash'
import color from 'src/common/color'
import screen from 'src/common/screen'
import CategoryTitle from '../../components/categoryTitle'
import ListItemWithIcon from '../../components/listItemWithIcon'

class Exclusive extends Component {
  state = {
    list: [],
    specialItem: []
  }

  render() {
    const { list, specialItem } = this.state
    return (
      <View>
        <CategoryTitle title="独家放送" />
        <View style={styles.categoryContainer}>
          {map(list, item => {
            return (
              <ListItemWithIcon
                key={item.id}
                rootStyle={styles.rootStyle}
                imgBg={item.sPicUrl}
                imgBgStyle={styles.imgBgStyle}
                TextIcon={<Icon name="ios-videocam-outline" size={12} color="#fff" style={styles.textIcon} />}
                downside={item.name}
                downsideStyle={styles.downsideStyle}
              />
            )
          })}
        </View>
        <View style={styles.categoryContainer}>
          <ListItemWithIcon
            rootStyle={styles.specialRootStyle}
            imgBg={specialItem.picUrl}
            imgBgStyle={styles.imgSpecialBgStyle}
            TextIcon={<FontAwesome name="link" size={10} color="#fff" style={[styles.textIcon, styles.specialIcon]} />}
            downside={specialItem.name}
            downsideStyle={styles.downsideStyle}
          />
        </View>
      </View>
    )
  }

  componentDidMount() {
    axios.get(api.privatecontent).then(res => {
      console.log(res)
      const list = res.result
      const index = findIndex(list, val => {
        return val.type === 19
      })
      if (index !== -1) {
        this.setState({
          list,
          specialItem: list.splice(index, 1)[0] || {}
        })
      }
    })
  }
}
const styles = StyleSheet.create({
  categoryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap'
  },
  rootStyle: {
    width: screen.width / 2 - 2
  },
  specialRootStyle: {
    flex: 1
  },
  imgBgStyle: {
    width: screen.width / 2 - 2,
    height: 106,
    marginBottom: 6
  },
  imgSpecialBgStyle: {
    width: screen.width,
    height: 140,
    marginBottom: 4
  },
  textIcon: {
    position: 'absolute',
    backgroundColor: 'transparent',
    top: 6,
    left: 4,
    padding: 2,
    paddingLeft: 4,
    paddingRight: 4,
    borderWidth: screen.onePixel,
    borderColor: '#fff',
    borderStyle: 'solid',
    borderRadius: 10
  },
  specialIcon: {
    backgroundColor: '#A3A3A3'
  },
  downsideStyle: {
    color: color.textDark,
    padding: 2,
    paddingLeft: 6,
    fontSize: 13,
    marginBottom: 18,
    alignSelf: 'flex-start'
  }
})

export default Exclusive
