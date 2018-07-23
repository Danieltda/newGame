import * as React from 'react'

export default function WordList(props) {
  return (<div>
    <h1>Word explorer</h1>
    <ul>
      { props.games.map(game =>
        <li key={games.id} onClick={() => props.selectGame(game.id)}>
          { game.name }
        </li>
      ) }
    </ul>
  </div>)
}