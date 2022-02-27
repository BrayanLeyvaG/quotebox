import React from 'react'
import quotes from '../quotes.json'

export const QuoteText = ({quoteNumber}) => {
  return (
    <div className='quote'>
      <i className="fas fa-quote-left"></i>
      <p>{quotes[quoteNumber].quote}</p>
    </div>
  )
}
