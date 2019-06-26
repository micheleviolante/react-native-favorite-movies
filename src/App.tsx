import React, { Component } from 'react'
import { StyleSheet, Text, View, Alert, ViewStyle } from 'react-native'
import Button from './components/Button'
import MovieRow from './components/MovieRow'

// 1. Creare componente MovieRow
// 2. Fetch dei dati non appena so apre la schermata
// 3. Creare FlatList per mostrare i film

interface Props {}
interface State {
  movies: Movie[]
}

export default class App extends Component<Props, State> {
  state: State = {
    movies: [],
  }

  componentDidMount() {
    fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=a74169393e0da3cfbc2c58c5feec63d7')
      .then(res => res.json())
      .then(data => console.warn(JSON.stringify(data)))
      .catch(err => Alert.alert('Errore: ' + err.message + '\n' + err))
    // 1. effettua fetch
    // fetch('url')
    //   .then(res => res.json())
    //   .then()data => data)
    //   .catch(err => Alert.alert('Error', err.message))
    // 2. modifica stato per salvare movies
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Button title="Pulsante" onPress={() => Alert.alert('Fantastico!')} />
        <MovieRow title="ciao" />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  } as ViewStyle,
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
})
