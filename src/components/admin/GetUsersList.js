import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UserList() {

    const [users, setUsers] = useState({ data: [] });

    useEffect(() => {

        const url = 'https://s34n9ig88f.execute-api.us-east-1.amazonaws.com/dev/';

        const fetchData = async () => {
            
            const result = await axios.post(url, {
                "httpMethod": "GET",
                "queryStringParameters": {
                    "TableName": "Users"
                }
            });
            try {
                console.log(result)
                setUsers({data:JSON.parse(result.data.body).Items});
            } catch (e) {
               console.log(e)
            }
        };
        fetchData();
        }, []);

    return (
        <div>
            <p>Users</p>
        {users.data.map(item => (
            <div>
                <span>{item.first_name} {item.last_name} -- {item.email}</span>
            </div>
        ))}
        <p></p>
        </div>
    );
}

export default UserList