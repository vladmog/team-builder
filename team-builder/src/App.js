import React, { useState } from 'react';
import Friends from './Friends';
import Form from './Form';
import './App.css';

function App() {

  const [friends, setFriends] = useState([]);

  return (
    <div className="App">
      <Form setFriends = {setFriends} friends = {friends} />
      <Friends friends = {friends} />
    </div>
  );
}

export default App;
