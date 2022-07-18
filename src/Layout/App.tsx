import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header';
import Sidebar from '../Sidebar/SIdebar';
import './App.less';



const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Sidebar />
    </div>
  );

}

export default App;
