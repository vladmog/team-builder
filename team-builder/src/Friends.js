import React from 'react';
import Friend from './Friend';

function Friends(props) {
    return(
        <div>
            {props.friends.map(friend => {
                return(
                    <Friend 
                        key = {Math.random()} 
                        friend = {friend} 
                        setMemberToEdit = {props.setMemberToEdit}
                        memberToEdit = {props.memberToEdit}
                    />
                )
            })}
        </div>
    )
}

export default Friends;