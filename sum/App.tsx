import { Button } from 'antd';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';




const App: React.FC = (props: any) => {
  const [showText, setShow] = useState(false)


  const handleBtnClick = () => {
    setShow(!showText)

  }


  return (
    <div className="App">
      <div className='prop-value'>{props.count}</div>
      <header className="App-header">
        <Button
          type='primary'
          className='check-btn'
          onClick={handleBtnClick}
        >
          Показать текст
        </Button>
        <div className='block-text'>{showText ? 'Мой текст' : ''}</div>
      </header>
      {/* <Link to="/expenses">Expenses</Link> */}
    </div>
  );

}

export default App;
