import React from 'react'
import quotes from '../quotes.json'

export const QuoteText = () => {
  return (
    <div className='quote'>
      <i className="fas fa-quote-left"></i>
      <p>{quotes[0].quote}</p>
    </div>
  )
}
