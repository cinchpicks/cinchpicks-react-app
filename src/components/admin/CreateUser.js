import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CreateUser = () => {

    const [user, setUser] = useState(
        { email: '', first_name: '', last_name: ''}
    );

    const [users, setUsers] = useState({ data: [] });

    const handleChange = (event) => {
        setUser({...user, [event.target.name]: event.target.value})
    }

    const url = 'https://s34n9ig88f.execute-api.us-east-1.amazonaws.com/dev/';

    const handleSubmit = (e) => {

        var payload = {
            httpMethod: "POST",
            body: {
                TableName: "Users",
                Item: {
                    email: user.email,
                    first_name: user.first_name,
                    last_name: user.last_name
                }
            }
        }

        e.preventDefault()

        axios.post(url, payload)
          .then(function (response) {
                console.log(response)
                alert(users.len);
                //const {list, item} = users;
                //setUsers({ list: [...list, item] });
          })
          .catch(function (error) {
              console.log(error)
          }) 
    }

    return (
    
        <div className="container">
            <form className='white' onSubmit={handleSubmit}>
                <h5 className="grey-text.text-darken-3">Create User</h5>                        
                <div className="input-field">
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" value={setUser.email} onChange={handleChange} required />
                </div>
                <div className="input-field">
                    <label htmlFor="first_name">First Name</label>
                    <input type="text" name="first_name" value={setUser.first_name} onChange={handleChange} required />
                </div>
                <div className="input-field">
                    <label htmlFor="last_name">Last Name</label>
                    <input type="text" name="last_name" value={setUser.last_name} onChange={handleChange} required />
                </div>
                <div className="input-field"> 
                    <button className="btn blue darken-3" type="submit">Sign Up</button>
                </div>
            </form>
        </div>
    );
}

export default CreateUser