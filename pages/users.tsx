import type { NextPage } from 'next'
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import { Card, Col, Pagination, Row } from 'react-bootstrap'

type singleUser = {
        id: number,
        first_name: string,
        last_name: string,
        email: string,
        avatar: string
    };

type Props = {
    users: Array<singleUser>
}

const Users: NextPage = (props: Props) => {
    return (
        <div className='container'>
            <h1 className='text-center'>Users</h1>
            <p className='text-center'>This is the users page</p>
            <Row>
                {
                    props.users.map((user: singleUser, i: number) => (
                        <Col key={i} md={3}>
                            <Card key={i}>
                                <Card.Body>
                                    <Card.Img variant='top' src={user.avatar}></Card.Img>
                                    <Card.Title>{user.first_name} {user.last_name}</Card.Title>
                                    <Card.Text>
                                        {user.email}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    )
                    )
                }
            </Row>
            <footer>
                <Pagination>
                    <Pagination.Prev />
                    <Pagination.Next />
                </Pagination>
            </footer>
        </div>
    )
}

Users.getInitialProps = async () => {
    const user_data = await fetch('https://reqres.in/api/users');
    const users = await user_data.json();
    return { users: users.data }
}


export default Users