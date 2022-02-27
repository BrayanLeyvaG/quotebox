import { useState } from 'react';
import './App.css';
import { ActionBtn } from './components/ActionBtn';
import { QuoteAuthor } from './components/QuoteAuthor';
import { QuoteText } from './components/QuoteText';
import quotes from './quotes.json'

function App() {

  const getRandomQuote = () => Math.floor(Math.random() * quotes.length);

  const colors = ['#041C32','#4C0027','#1E5128','#420516','#39311D','#2A0944','#2D2424'];
  const getRandomColor = () => Math.floor(Math.random() * colors.length);
  const randomColor = colors[getRandomColor()]

  const [quoteNumber, setQuoteNumber] = useState(getRandomQuote())

  function changeQNumber() {
    setQuoteNumber(getRandomQuote())
  }


  

  return (
    <div className="App" style={{backgroundColor: randomColor, color: randomColor}}>
      <div className='container'>      
        <QuoteText quoteNumber={quoteNumber}/>
        <QuoteAuthor quoteNumber={quoteNumber}/>
        <ActionBtn color={randomColor} btnClick={changeQNumber}/>
      </div>
    </div>
  );
}

export default App;
