import React, { Component } from 'react';
import { getComments } from '../api';
import { Card } from 'react-bootstrap';

export default class Comments extends Component {
    state = {
        comments: []
    }
    async componentDidMount() {
        let comments = await getComments(this.props.match.params.post_id);
        this.setState({ comments: comments });
    }
    render() {
        return (
            <>
                <h3 className="text-center mt-3">Comments of Post</h3>
                <div className="p-3 d-flex flex-row flex-wrap justify-content-center">
                    {this.state.comments.map((comment, index) => (
                        <Card style={{ width: '18rem' }} key={comment.id} className="m-2">
                            <Card.Body>
                                <Card.Title>{comment.name}</Card.Title>
                                <Card.Subtitle className="mb-2 mt-2 text-muted">{comment.email}</Card.Subtitle>
                                <Card.Text>
                                    {comment.body}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    ))}
                </div>
            </>
        );
    }
}
