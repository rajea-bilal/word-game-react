import React from 'react';
import { range } from '../../../../utils'
import { checkGuess } from '../../../../game-helpers'



function Guess({ value, words, answer }) {
  // console.log(value)
  // console.log(words)
  const result = checkGuess( value, answer)
  // console.log(result)

  const defaultClass = 'cell'
  return  (
    <>
      <p className="guess">

          {/* If we have a value */}
          {value && result.map((object, index) => {
            const { letter, status } = object
         
            return ( <span key={index} className={`${status} ${defaultClass}`}>{letter}</span> )
          })}
            

          {/* If we don't have a value yet */}
          {!value && range(5).map((num) => {
              return <span key={num} className={`${defaultClass}`}>{undefined}</span>
            })}
            
      </p>
    </>
    )
}
 
        
          
            
    

   

export default Guess;
  

