import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
export default function Users(props) {
    const { users } = props;
    return (
        <>
            <h3 className="pt-4 text-center">FaceDev</h3>
            <div className="p-2 flex-row d-flex flex-wrap justify-content-center">
                {users.map((user) => (
                    <Card key={user.id} style={{ width: '18rem' }} className="m-3">
                        <Card.Img variant="top" src="https://semantic-ui.com/images/avatar2/large/matthew.png" />
                        <Card.Body className="pb-0">
                            <Card.Title>{user.name}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted text-truncate">Email: {user.email}</Card.Subtitle>
                            <Card.Subtitle className="mb-2 text-muted mt-2">User: @{user.username}</Card.Subtitle>
                            <Card.Subtitle className="mb-2 text-muted mt-2">Website: <a href={`https://${user.website}`}>{user.website}</a></Card.Subtitle>
                            <Link to={`post/${user.id}`}><Button className="btn btn-primary mb-3 mt-2">Ver postagens</Button></Link>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </>
    );
}
