import React from 'react';
import { range } from '../../../utils'

function Form({ addWord, gameStatus }) {

  const [ inputValue, setInputValue ] = React.useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    const upperCasedWord = inputValue.toUpperCase()
    addWord(upperCasedWord)
    setInputValue('')
  }



  return <div>
      <form className="guess-input-wrapper" onSubmit={handleSubmit}>
          <label htmlFor="guess-input">Enter guess:</label>
          <input 
          id="guess-input" 
          type="text" 
          disabled={gameStatus !== 'running'}
          value={inputValue}
          minLength={5}
          maxLength={5}
          onChange={(event) => setInputValue(event.target.value)}
          />
    </form>
  </div>;
}
          

export default Form;
