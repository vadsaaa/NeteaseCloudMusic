import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import Icon from 'react-native-vector-icons/SimpleLineIcons'
import color from 'src/common/color'
import screen from 'src/common/screen'
import CategoryTitle from '../../components/categoryTitle'
import ListItem from '../../components/listItem'

class Broadcasting extends Component {
  renderIconText = props => {
    let { count } = props
    if (count >= 10000) {
      count = `${Math.round(count / 10000)}万`
    }
    return (
      <Icon name="earphones" size={10} color="#fff" style={styles.textIcon}>
        {count}
      </Icon>
    )
  }

  render() {
    return (
      <View>
        <CategoryTitle title="推荐歌单" />
        <View style={styles.categoryContainer}>
          <ListItem
            rootStyle={styles.rootStyle}
            imgBg="http://p1.music.126.net/FWLxhbCnW2-0bgxgX5HBbg==/18930291695875187"
            imgBgStyle={styles.imgBgStyle}
            TextIcon={this.renderIconText({ count: 1600000 })}
            downside="所谓人生 便是取决于遇见谁"
            downsideStyle={styles.downsideStyle}
          />
          <ListItem
            rootStyle={styles.rootStyle}
            imgBg="http://p1.music.126.net/FWLxhbCnW2-0bgxgX5HBbg==/18930291695875187"
            imgBgStyle={styles.imgBgStyle}
            TextIcon={this.renderIconText({ count: 1600000 })}
            downside="所谓人生 便是取决于遇见谁"
            downsideStyle={styles.downsideStyle}
          />
          <ListItem
            rootStyle={styles.rootStyle}
            imgBg="http://p1.music.126.net/FWLxhbCnW2-0bgxgX5HBbg==/18930291695875187"
            imgBgStyle={styles.imgBgStyle}
            TextIcon={this.renderIconText({ count: 1600000 })}
            downside="所谓人生 便是取决于遇见谁"
            downsideStyle={styles.downsideStyle}
          />
          <ListItem
            rootStyle={styles.rootStyle}
            imgBg="http://p1.music.126.net/FWLxhbCnW2-0bgxgX5HBbg==/18930291695875187"
            imgBgStyle={styles.imgBgStyle}
            TextIcon={this.renderIconText({ count: 1600000 })}
            downside="所谓人生 便是取决于遇见谁"
            downsideStyle={styles.downsideStyle}
          />
          <ListItem
            rootStyle={styles.rootStyle}
            imgBg="http://p1.music.126.net/FWLxhbCnW2-0bgxgX5HBbg==/18930291695875187"
            imgBgStyle={styles.imgBgStyle}
            TextIcon={this.renderIconText({ count: 1600000 })}
            downside="所谓人生 便是取决于遇见谁"
            downsideStyle={styles.downsideStyle}
          />
          <ListItem
            rootStyle={styles.rootStyle}
            imgBg="http://p1.music.126.net/FWLxhbCnW2-0bgxgX5HBbg==/18930291695875187"
            imgBgStyle={styles.imgBgStyle}
            TextIcon={this.renderIconText({ count: 1600000 })}
            downside="所谓人生 便是取决于遇见谁"
            downsideStyle={styles.downsideStyle}
          />
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: color.black
  },
  categoryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap'
  },
  rootStyle: {
    width: screen.width / 3 - 4
  },
  imgBgStyle: {
    width: screen.width / 3 - 2,
    height: screen.width / 3 - 2,
    marginBottom: 6
  },
  textIcon: {
    backgroundColor: 'transparent',
    textAlign: 'right',
    fontSize: 12,
    paddingRight: 4,
    marginTop: 2
  },
  downsideStyle: {
    color: color.textDark,
    padding: 2,
    fontSize: 13,
    marginBottom: 18
  }
})

export default Broadcasting
