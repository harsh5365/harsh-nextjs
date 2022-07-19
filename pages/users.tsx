import type { NextComponentType, NextPage } from 'next'
import 'bootstrap/dist/css/bootstrap.min.css'

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
                    <TableRow users={props.users} key={1} />
                </tbody>
            </table>
        </div>
    )
}

const TableRow: any = (props: any) => {
    return (
        props.users.map((user: {id: number, first_name: string, last_name: string, email: string}) => {
            console.log(user);
            <tr key={user.id}>
                <td>{user.first_name}</td>
                <td>{user.last_name}</td>
                <td>{user.email}</td>
            </tr>
        })
    )
}

Users.getInitialProps = async () => {
    const user_data = await fetch('https://reqres.in/api/users');
    const users = await user_data.json();
    return { users: users.data }
}


export default Users