import type { NextPage } from 'next'
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'

const Users: NextPage = (props:any) => {
    return (
        <div className='container'>
            <h1 className='text-center'>Users</h1>
            <p className='text-center'>This is the users page</p>
            <table className="table">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {props.users.map((user:any, i:number) => (
                        <TableRow user={user} key={i} />
                    ))}
                </tbody>
            </table>
        </div>
    )
}

const TableRow: React.ComponentType = (props: any) => {
    return (
        <tr key={props.user.id}>
            <td>{props.user.first_name}</td>
            <td>{props.user.last_name}</td>
            <td>{props.user.email}</td>
        </tr>
    )
}

Users.getInitialProps = async () => {
    const user_data = await fetch('https://reqres.in/api/users');
    const users = await user_data.json();
    return { users: users.data }
}


export default Users