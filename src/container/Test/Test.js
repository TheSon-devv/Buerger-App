import axios from 'axios';
import React, { useState } from 'react';




const Test = () => {
    const [name, setName] = useState('');

    const onChangeHandler = (e) => {
        setName(e.target.value);
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        const add = {
            name : name
        };

        axios.post('https://jsonplaceholder.typicode.com/posts',{add})
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    }

    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                <h1>Name : </h1>
                <input type="text" value={name} onChange={onChangeHandler} />
                <button type="submit">Add</button>
            </form>
        </div>
    )
}

export default Test
