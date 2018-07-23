import * as React from 'react'
import WordList from './WordList'
import { connect } from 'react-redux'
import {randomWord, ShowGuess } from '../lib/game'

class GameListContainer extends React.PureComponent {
  selectGame(id) {
    console.log('selected word', id)
  }

  render() {
    return <WordList games={this.props.games} selectGame={this.selectGame} />
  }
}

const mapStateToProps = (state) => {
  return {
    games: state
  }
}

export default connect(mapStateToProps)(GameListContainer)