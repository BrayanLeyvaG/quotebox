import './App.css';
import { ActionBtn } from './components/ActionBtn';
import { QuoteAuthor } from './components/QuoteAuthor';
import { QuoteText } from './components/QuoteText';
import quotes from './quotes.json'

function App() {

  const getRandomQuote = () => Math.floor(Math.random() * quotes.length);

  const colors = ['#F08700','#303A2B','#81523F','#00A6A6','#E84855','#166088','#662C91'];
  const getRandomColor = () => Math.floor(Math.random() * colors.length);
  const randomColor = colors[getRandomColor()]




  return (
    <div className="App" style={{backgroundColor: randomColor, color: randomColor}}>
      <div className='container'>      
        <QuoteText/>
        <QuoteAuthor/>
        <ActionBtn color={randomColor}/>
      </div>
    </div>
  );
}

export default App;
