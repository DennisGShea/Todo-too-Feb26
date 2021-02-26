import Doge from './components/doge'
import logo from './logo.svg';
import './App.css';
import DogeImage from "./components/doge.js"

const doges = [
  {
    id: 'A3',
    name: 'Admiral',
    breed: 'Australian Shepherd'
  },
  {
    id: 'A1',
    name: 'Maddie',
    breed: 'Australian Shepherd'
  },
  {
    id: 'GR7',
    name: 'Indie',
    breed: 'Golden Retriever'
  },
  {
    id: 'C2',
    name: 'Mulder',
    breed: 'Corgi'
  },
  {
    id: 'C4',
    name: 'Scully',
    breed: 'Corgi'
  }
]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img src="./src/JavaCT2018.JPG" alt="Java -- Black Lab" />
        
        <p> Sculley and Mulder are good bois </p>
        <Doge doges={doges} />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
