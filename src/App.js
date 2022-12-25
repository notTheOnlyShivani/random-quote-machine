import {useEffect, useState} from 'react';
import './App.css';
import colors from './colorsArray';

function App() {
const [quoteInfo, setQuoteInfo] = useState('');
const [accentColors, setAccentColors] = useState('#282c34')

useEffect(() => {
 getQuote();
}, []);

const getQuote = () => {
  fetch('https://type.fit/api/quotes')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
  let randomNum = Math.floor(Math.random() * data.length);
  let randomColors = Math.floor(Math.random() * colors.length)
  setQuoteInfo(data[randomNum]);
  setAccentColors(colors[randomColors]);
    })
}

  return (
    <div className="App">
      <header className="App-header" style={{backgroundColor: accentColors, color: accentColors}}>
        <div id="quote-box" style={{color: accentColors}}>
          <p id="text"><i class="fa fa-quote-left"></i>{quoteInfo.text}</p>
            <p id="author">-{quoteInfo.author}</p>
             <button id="new-quote" style={{backgroundColor: accentColors}} onClick={getQuote}>New Quote</button>
             <a className="button" id="tweet-quote" style={{backgroundColor: accentColors}}
                href="https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=%22Ask%20and%20it%20will%20be%20given%20to%20you%3B%20search%2C%20and%20you%20will%20find%3B%20knock%20and%20the%20door%20will%20be%20opened%20for%20you.%22%20Jesus">
                  <i className="fab fa-twitter"></i>
              </a>
              </div>
      </header>
    </div>
  );
}

export default App;
