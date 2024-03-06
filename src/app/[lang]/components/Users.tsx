'use client'
import {useState, useEffect} from 'react';

const Users = () => {
    const [state, setState] = useState([])

    useEffect(() => {
        const getData = () => {
            fetch('https://jsonplaceholder.typicode.com/users').then(resp => resp.json())
            .then(resp => setState(resp));
        }
        getData();
    }, [])

    return (
        <div>
            <table>
                <tr>
                    <th>Name</th>
                    <th>User Name</th>
                    <th>Email</th>
                    <th>Website</th>
                </tr>
                {
                    state.map(user => {
                        return (<tr>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.website}</td>
                        </tr>)
                    })
                }                
            </table>                
        </div>
    )
}

export default Users;