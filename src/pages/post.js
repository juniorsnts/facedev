import React, { Component } from 'react';
import { getPosts } from '../api';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
export default class Post extends Component {
    state = {
        posts: []
    }
    async componentDidMount() {
        let posts = await getPosts(this.props.match.params.user_id);
        this.setState({ posts: posts });
    }
    render() {
        return (
            <>
                <h3 className="text-center mt-3">Posts of User</h3>
                <div className="p-3 d-flex flex-row flex-wrap justify-content-center">
                    {this.state.posts.map((post, index) => (
                        <Card className="text-center m-3" style={{ width: '18rem' }} key={post.id}>
                            <Card.Header>My post {index+1}</Card.Header>
                            <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                                <Card.Title>{post.title}</Card.Title>
                                <Card.Text>
                                    {post.body}
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer className="text-muted">
                                <Link to={`/comments/${post.id}`}><Button variant="primary">Comentários</Button></Link>
                            </Card.Footer>
                        </Card>
                    ))}
                </div>
            </>
        )
    }
}
