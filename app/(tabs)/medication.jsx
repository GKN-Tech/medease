import { View, Text } from 'react-native'
import React from 'react'
import { Header } from '../../components/Header'
import Slider from '../../components/Slider'

export default function medication() {
  return (
    <View>
      <Header/>
      <Slider/>
    </View>
  )
}