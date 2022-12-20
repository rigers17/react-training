import React, { useState, useCallback, useMemo } from 'react';

import './Module6.css';
import DemoList from '../Module6/Demo/DemoList';
import Button from '../Module6/UI/Butt';
import NavBar from '../Navbar/NavBar';

function Module6() {
  const [listTitle, setListTitle] = useState('My List');

  const changeTitleHandler = useCallback(() => {
    setListTitle('New Title');
  }, []);

  const listItems = useMemo(() => [5, 3, 1, 10, 9], []);

  return (
    <div>
        <NavBar />
    <div className="app">
      <DemoList title={listTitle} items={listItems} />
      <Button onClick={changeTitleHandler}>Change List Title</Button>
    </div>
    </div>
  );
}

export default Module6;
