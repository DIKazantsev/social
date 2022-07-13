import React from 'react';
import { Link } from 'react-router-dom';
import './App.less';

interface IApp {
  count: number
}

const App: React.FC = () => {
  return (
    <Main count={19} />
  )
}


const Main: React.FC<IApp> = ({ count }) => {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          {count}
        </div>
      </header>
      <Link to="/expenses">Expenses</Link>
    </div>
  );

}

export default App;
