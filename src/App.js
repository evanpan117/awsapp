import logo from './logo.svg';
import './App.css';
import importImg from './img.jpg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src={importImg} alt='import' width="500" height="600"></img>
        <p>
          Site of Realtor Evan Pan
        </p>
        
      </header>
    </div>
  );
}

export default App;
