import React from 'react'
import { View } from 'react-native'
import PlayList from './playlist'
import Exclusive from './exclusive'
import NewMusic from './newMusic'
import Mv from './mv'
import SpecialColumn from './specialColumn'
import Radio from './radio'

const Category = () => (
  <View>
    <PlayList />
    <Exclusive />
    <NewMusic />
    <Mv />
    <SpecialColumn />
    <Radio />
  </View>
)

export default Category
