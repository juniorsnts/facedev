import React, { Component } from 'react';

import {getUsers} from './api';
import Users from './pages/users';
import { Route } from 'react-router-dom';
import Post from './pages/post';
import Comments from './pages/comments';

export default class src extends Component {
  state = {
    users: []
  }
  async componentDidMount() {
    let users = await getUsers();
    this.setState({ users: users });
  }
  render() {
    const { users } = this.state;
    return (
      <div>
        <Route exact path="/" render={() => <Users users={users} />} />
        <Route path="/post/:user_id" component={Post}/>
        <Route path="/comments/:post_id" component={Comments}/>
      </div>
    )
  }
}