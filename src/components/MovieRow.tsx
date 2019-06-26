import React, { Component } from 'react'
import { StyleSheet, Text, ViewStyle, View, Image, ImageSourcePropType } from 'react-native'

interface Props {
  title: string
}

export default class MovieRow extends Component<Props> {
  render() {
    return (
      <View style={s.container}>
        <Image
          style={{ width: 50, height: 50 }}
          source={{ uri: 'https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg' }}
        />
        <Text style={s.text}>{this.props.title}</Text>
      </View>
    )
  }
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 15,
    borderRadius: 6,
  } as ViewStyle,
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
})
