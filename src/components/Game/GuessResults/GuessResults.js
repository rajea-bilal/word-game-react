import React from 'react';
import { range } from '../../../utils';
import Guess from './Guess/Guess'
import { NUM_OF_GUESSES_ALLOWED } from '../../../constants'


function GuessResults({ words, answer}) {


  return   (
    
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map(num => { 
          return (
            <Guess value={words[num]} key={num} words={words} answer={answer} />
          )
      })}
    </div>
        
  )
}


export default GuessResults;
  

          
          
          

