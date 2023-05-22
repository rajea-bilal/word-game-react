import React from 'react';
import Form from './Form/Form'
import GuessResults from './GuessResults/GuessResults'
import { sample } from '../../utils';
import { WORDS } from '../../data';
import ResultModal from './ResultModal/ResultModal'


   const answer = sample(WORDS);
  // To make debugging easier, we'll log the solution in the console.
  console.info({ answer })


function Game() {

  const [ words, setWords ] = React.useState([])
  const [ gameStatus, setGameStatus ] = React.useState('running')


  // Adding Words to the array functionality
  const addWord = (word) => {
    const newWord = word
    // clone the state variable array and add the newly word
    const newWordsArray = [...words, newWord]
    // console.log(newWordsArray)
    setWords(newWordsArray)


    if(word === answer) {
      setGameStatus('won')

    } else if (newWordsArray.length >= 6) {
      setGameStatus('lost')
    }
}

return 
    <>
    <ResultModal addWord={addWord} answer={answer} gameStatus={gameStatus} words={words}/>
    <GuessResults words={words} answer={answer}/>
    <Form addWord={addWord} gameStatus={gameStatus}/>
    </>;
}

export default Game;



 






