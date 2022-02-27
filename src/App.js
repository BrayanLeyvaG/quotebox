import './App.css';
import { ActionBtn } from './components/ActionBtn';
import { QuoteAuthor } from './components/QuoteAuthor';
import { QuoteText } from './components/QuoteText';

function App() {
  return (
    <div className="App">
      <div className='container'>      
        <QuoteText/>
        <QuoteAuthor/>
        <ActionBtn/>
      </div>
    </div>
  );
}

export default App;
