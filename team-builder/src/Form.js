import React, {useState} from 'react';

function Form(props) {
    const [friend, setFriend] = useState({
        name: "",
        email: "",
        role: "",
    })

    const changeHandler = e => {
        setFriend({...friend, [e.target.name]: e.target.value})
    }
        
    const submitHandler = e => {
        e.preventDefault()
        props.setFriends([...props.friends, friend])
        setFriend({
            name: "",
            email: "",
            role: "",
        })

    }

    return (
        <div>
            <form onSubmit = {e => submitHandler(e)}>
                <input
                    name = "name"
                    value = {friend.name}
                    placeholder = "name"
                    onChange = {e => changeHandler(e)}
                />
                <input 
                    name = "email"
                    value = {friend.email}
                    placeholder = "email"
                    onChange = {e => changeHandler(e)}
                />
                <input 
                    name = "role"
                    value = {friend.role}
                    placeholder = "role"
                    onChange = {e => changeHandler(e)}
                />
                <button type = "submit">Submit</button>
            </form>
        </div>
    )
}

export default Form;