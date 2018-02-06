import React, {Component} from 'react';
import {Route, NavLink} from 'react-router-dom';

import './Blog.css';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 184
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
                to="/"
                exact
                activeClassName="my-active"
                activeStyle={{
                  color: '#fa923f',
                  textDecoration: 'underline'
                }}
              >Home</NavLink></li>
              <li><NavLink to={{
                // pathname: this.props.match.url + '/new-post',
                pathname: '/new-post',
                hash: '#submit',
                search: '?quick-submit=true'
              }}>New Post</NavLink></li>
            </ul>
          </nav>
        </header>
        {/*<Route path="/" exact render={() => <h1>Home</h1>} />*/}
        {/*<Route path="/" render={() => <h1>Home 2</h1>} />*/}
        <Route path="/" exact component={Posts} />
        <Route path="/new-post" component={NewPost} />
      </div>
    );
  }
}

export default Blog;
