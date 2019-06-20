import React, { Component } from 'react'
import { StyleSheet, Text, TouchableOpacity, ViewStyle } from 'react-native'

interface Props {
  title: string
  onPress: () => void
}

export default class Button extends Component<Props> {
  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress} style={s.container} activeOpacity={0.7}>
        <Text style={s.text}>{this.props.title}</Text>
      </TouchableOpacity>
    )
  }
}

const s = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: '#ccc',
    borderRadius: 6,
  } as ViewStyle,
  text: {
    fontSize: 18,
    color: 'black',
  },
})
