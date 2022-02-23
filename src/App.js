import './App.css';
import Counter from './components/Counter';
import ComponentWithRefInstanceVariable from './components/ComponentWithRefInstanceVariable';
import ComponentWithDomApi from './components/ComponentWithDomApi';

function App() {
  return (
    <div className="App">
      {/* <Counter /> */}
      {/* <ComponentWithRefInstanceVariable /> */}
      <ComponentWithDomApi label="Label" value="Value" isFocus />
    </div>
  );
}

export default App;
