import React, { useState } from 'react';
import Friends from './Friends';
import Form from './Form';
import './App.css';

function App() {

  const [friends, setFriends] = useState([]);
  const [memberToEdit, setMemberToEdit] = useState()

  const editMember = (friend) => {
    friends.findIndex(i => i.name === memberToEdit.name)
  }

  

  return (
    <div className="App">
      <Form 
        setFriends = {setFriends} 
        friends = {friends}
        memberToEdit = {memberToEdit}
      />
      <Friends 
        friends = {friends} 
        setMemberToEdit = {setMemberToEdit} 
        memberToEdit = {memberToEdit}
      />
    </div>
  );
}

export default App;
