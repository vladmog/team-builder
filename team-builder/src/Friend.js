import React from 'react';

function Friend(props){
    return (
        <div>
            <h1>name: {props.friend.name}</h1>
            <h1>email: {props.friend.email}</h1>
            <h1>role: {props.friend.role}</h1>
            <button onClick = {() => props.setMemberToEdit(props.friend)}>Edit</button>
            {props.memberToEdit}
        </div>
    )
}

export default Friend;