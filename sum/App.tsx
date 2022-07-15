import { Button } from 'antd';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';




const App: React.FC = () => {
  const [showText, setShow] = useState(true)


  const handleBtnClick = () => {
    setShow(!showText)
  }


  return (
    <div className="App">
      <header className="App-header">
        <Button
          type='primary'
          className='check-btn'
          onClick={handleBtnClick}
        >
          Показать текст
        </Button>
        <div className='block-text'>{showText ? 'Вот мой текст' : ''}</div>
      </header>
      <Link to="/expenses">Expenses</Link>
    </div>
  );

}

export default App;
