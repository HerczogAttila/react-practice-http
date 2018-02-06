import React, {Component} from 'react';

import './Blog.css';
import Posts from './Posts/Posts';

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
        <Posts />
      </div>
    );
  }
}

export default Blog;
