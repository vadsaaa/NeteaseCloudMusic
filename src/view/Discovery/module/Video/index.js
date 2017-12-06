import React, { PureComponent } from 'react'
import { FlatList, Text, View, StyleSheet } from 'react-native'
import Toast from 'react-native-root-toast'
import VideoItem from './videoItem'

export default class FlatListBasic extends PureComponent {
  // 数据容器，用来存储数据
  dataContainer = []

  constructor(props) {
    super(props)
    this.state = {
      sourceData: [],
      refreshing: false,
      selected: {
        id: null,
        paused: true
      }
    }
  }

  captureRef = ref => {
    this.listRef = ref
  }

  // 这里指定使用数组下标作为唯一索引(因为下拉加载的数据变化的不够及时,其实应该用id的)
  keyExtractor = (item, index) => index

  // Footer
  renderFooter = () => (
    <View>
      <Text style={styles.footer}>加载中...</Text>
    </View>
  )

  // 下拉刷新
  renderRefresh = () => {
    this.setState({ refreshing: true }) // 开始刷新
    axios.get(api.video).then(res => {
      this.dataContainer = res
      this.setState({
        refreshing: false,
        sourceData: this.dataContainer
      })
      Toast.show('发现8条新内容', {
        position: 120
      })
    })
  }

  // 上拉加载更多
  onEndReached = () => {
    const delay = this.dataContainer.length ? 2000 : 0
    axios.get(api.video).then(res => {
      setTimeout(() => {
        this.dataContainer = this.dataContainer.concat(res)
        this.setState({
          sourceData: this.dataContainer
        })
      }, delay)
    })
  }
  /**
   * 播放/暂停视频
   */
  onPressItem = (index, id) => {
    const { selected } = this.state
    if (selected.id === id) {
      this.setState({
        selected: {
          id,
          paused: !selected.paused
        }
      })
    } else {
      this.setState({
        selected: {
          id,
          paused: false
        }
      })
    }
    this.onChangeScrollToIndex(index)
  }

  onChangeScrollToIndex = text => {
    this.listRef.scrollToIndex({ viewPosition: 0.5, index: Number(text) })
  }

  renderItem = ({ item, index }) => (
    <VideoItem
      dataIndex={index}
      id={item.id}
      item={item}
      onPressItem={this.onPressItem}
      selected={this.state.selected}
    />
  )

  render() {
    const { sourceData, refreshing } = this.state
    return (
      <FlatList
        ref={this.captureRef}
        data={sourceData}
        extraData={this.state}
        keyExtractor={this.keyExtractor}
        renderItem={this.renderItem}
        // 决定当距离内容最底部还有多远时触发onEndReached回调；数值范围0~1，例如：0.5表示可见布局的最底端距离content最底端等于可见布局一半高度的时候调用该回调
        onEndReachedThreshold={0.01}
        // 当列表被滚动到距离内容最底部不足onEndReacchedThreshold设置的距离时调用
        onEndReached={this.onEndReached}
        ListFooterComponent={this.renderFooter}
        refreshing={refreshing}
        onRefresh={this.renderRefresh}
        // 是一个可选的优化，用于避免动态测量内容
        getItemLayout={(data, index) => ({ length: 250, offset: 250 * index, index })}
      />
    )
  }
}

const styles = StyleSheet.create({
  footer: {
    textAlign: 'center',
    color: '#C52627',
    fontSize: 13,
    marginTop: 20
  }
})
