import './App.css';
import InputBox from './inputBox.js';

function App() {
  return (
    <div className="App">
      <div class="split left ">
        <div class="centered">
          <InputBox />
        </div>
      </div>
      <div class="split right ">
        <div class="centered">
          <p>This is the output</p>
        </div>
      </div>
    </div>
  );
}

export default App;
