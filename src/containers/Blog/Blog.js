import React, {Component} from 'react';
import {Route, NavLink, Switch, Redirect} from 'react-router-dom';

import './Blog.css';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      auth: false,
      status: 196
    }
  }

  render() {
    return (
      <div className="Blog">
        <div>Status: {(this.state.status / 423 * 100).toFixed(1)}%</div>
        <header>
          <nav>
            <ul>
              <li><NavLink
                to="/post/"
                exact
                activeClassName="my-active"
                activeStyle={{
                  color: '#fa923f',
                  textDecoration: 'underline'
                }}
              >Posts</NavLink></li>
              <li><NavLink to={{
                pathname: '/new-post',
                hash: '#submit',
                search: '?quick-submit=true'
              }}>New Post</NavLink></li>
            </ul>
          </nav>
        </header>
        <Switch>
          {this.state.auth ? <Route path="/new-post" component={NewPost}/> : null}
          <Route path="/post/" component={Posts}/>
          <Redirect from="/" to="/post" />
          {/*<Route path="/" component={Posts}/>*/}
        </Switch>
      </div>
    );
  }
}

export default Blog;
