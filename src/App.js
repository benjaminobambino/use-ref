import './App.css';
import Counter from './components/Counter';
import ComponentWithRefInstanceVariable from './components/ComponentWithRefInstanceVariable';

function App() {
  return (
    <div className="App">
      {/* <Counter /> */}
      <ComponentWithRefInstanceVariable />
    </div>
  );
}

export default App;
