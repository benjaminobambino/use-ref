import './App.css';
import Counter from './components/Counter';
import ComponentWithRefInstanceVariable from './components/ComponentWithRefInstanceVariable';
import ComponentWithDomApi from './components/ComponentWithDomApi';
import ComponentWithRefRead from './components/ComponentWithRefRead';
import ComponentWithRefReadWrite from './components/ComponentWithRefReadWrite';
import ComponentWithImperativeRefState from './components/ComponentWithImperativeRefStat';

function App() {
  return (
    <div className="App">
      {/* <Counter /> */}
      {/* <ComponentWithRefInstanceVariable /> */}
      {/* <ComponentWithDomApi label="Label" value="Value" isFocus /> */}
      {/* <ComponentWithRefRead /> */}
      {/* <ComponentWithRefReadWrite /> */}
      <ComponentWithImperativeRefState />
    </div>
  );
}

export default App;
