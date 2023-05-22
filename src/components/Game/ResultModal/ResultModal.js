import React from 'react';

function ResultModal({ gameStatus, words, answer }) {
  
  return (
    <>
     {gameStatus === 'won' && 
        <div className="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in
            {" "}
            <strong>{`${words.length}` > 1 ? `${words.length} guesses` : `${words.length} guess`}</strong>.
          </p>
        </div>}

    {gameStatus === 'lost' && words.length >= 6 && 
        <div className="sad banner">
            <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
        </div>}
    </>
  )
}

export default ResultModal;
