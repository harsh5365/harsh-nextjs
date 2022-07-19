import type { NextPage } from 'next'
import 'bootstrap/dist/css/bootstrap.min.css'

const Users: NextPage = (props: any) => {
    return (
        <div>
            <h1>Users</h1>
            <p>This is the users page</p>
            <ul className="list-group">
                {props.users.map(user=> (
                    <li className="list-group-item" key={user.id}>
                        {user.first_name}
                    </li>
                ))}
            </ul>
        </div>
    )
}

Users.getInitialProps = async () => {
    const user_data = await fetch('https://reqres.in/api/users');
    const users = await user_data.json();
    return {
        users: users.data
    }
}


export default Users