import React from 'react'
import quotes from '../quotes.json'

export const QuoteAuthor = () => {
  return (
    <div className='author'>
        <h3>- {quotes[0].author}</h3>
    </div>
  )
}
