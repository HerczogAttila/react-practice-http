import React, {Component} from 'react';
import {Route} from 'react-router-dom';

import './Blog.css';

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 175
    }
  }

  render() {
    return (
      <div className="Blog">
        <div>Status: {(this.state.status / 423 * 100).toFixed(1)}%</div>
        <header>
          <nav>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/new-post">New Post</a></li>
            </ul>
          </nav>
        </header>
        <Route path="/" exact render={() => <h1>Home</h1>} />
        <Route path="/" render={() => <h1>Home 2</h1>} />
      </div>
    );
  }
}

export default Blog;
