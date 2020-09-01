import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

const FriendDetail = () => {
    const {friendId} = useParams();
    const [friend , setFriend] = useState({});
    const {name , email , id , phone , website} = friend;
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${friendId}`)
        .then(res => res.json())
        .then(data => setFriend(data));
    } , [])
    return (
        <div className = "friend-style">
            <h1>Name : {name}</h1>
            <h3>Email : {email}</h3>
            <h4>Id : {id}</h4>
            <h4>Phone : {phone}</h4>
            <h4>Website : {website}</h4>
        </div>
    );
};

export default FriendDetail;