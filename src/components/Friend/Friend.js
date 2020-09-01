import React from 'react';
import './Friend.css';
import { Link, useHistory } from 'react-router-dom';

const Friend = (props) => {
    const {name , email , id} = props.friend
    const history = useHistory();
    const handleClick = (friendId) => {
        const url = `/friend/${friendId}`
        history.push(url);
    }
    return (
        <div className = "friend-style">
            <h1>Name : {name}</h1>
            <h3>Email : {email}</h3>
            <p>ID : <Link to={`/friend/${id}`}>Show Details</Link></p>
            <button onClick = {() => handleClick(id)}>Click Me</button>
        </div>
    );
};

export default Friend;