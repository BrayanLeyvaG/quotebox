import React from 'react'
import quotes from '../quotes.json'

export const QuoteAuthor = ({quoteNumber}) => {
  return (
    <div className='author'>
        <h3>- {quotes[quoteNumber].author}</h3>
    </div>
  )
}
