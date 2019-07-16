import React, {useState, useEffect} from 'react';

function Form(props) {
    const [friend, setFriend] = useState({
        name: "",
        email: "",
        role: "",
        id: Math.random()
    })

    useEffect(() => {
        setEditToForm()
    }, [props.memberToEdit]);

    const setEditToForm = () => {
        if(props.memberToEdit !== undefined){
            setFriend(props.memberToEdit)
        }
    }

    const changeHandler = e => {
        setFriend({...friend, [e.target.name]: e.target.value})
    }
        
    const submitHandler = e => {
        console.log("undefined?:", props.memberToEdit)
        if (props.memberToEdit !== undefined){
            e.preventDefault()
            console.log("edit")
            props.setFriends(
                props.friends.map(friendd => {
                    if (friendd.id === props.memberToEdit.id){
                        return (
                            friend
                        )
                    } else {
                        return friendd
                    }
                })
            )
            
        } else {
            e.preventDefault()
            props.setFriends([...props.friends, friend])
            setFriend({
                name: "",
                email: "",
                role: "",
            })
        }
    }

    return (
        <div>
            <form onSubmit = {e => submitHandler(e)}>
                <input
                    name = "name"
                    type = "text"
                    value = {friend.name || ''}
                    placeholder = "name"
                    onChange = {e => changeHandler(e)}
                />
                <input 
                    name = "email"
                    value = {friend.email || ''}
                    placeholder = "email"
                    onChange = {e => changeHandler(e)}
                />
                <input 
                    name = "role"
                    value = {friend.role || ''}
                    placeholder = "role"
                    onChange = {e => changeHandler(e)}
                />
                <button type = "submit">Submit</button>
            </form>
        </div>
    )
}

export default Form;