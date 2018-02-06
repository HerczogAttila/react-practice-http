import React, {Component} from 'react';
//import axios from 'axios';
import axios from '../../axios';

import Post from '../../components/Post/Post';
import FullPost from './FullPost/FullPost';
import NewPost from './NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      selectedPostId: null,
      error: false,
      status: 173
    }
  }

  componentDidMount() {
    axios.get('/posts')
      .then(response => {
        const posts = response.data.slice(0, 4);
        const updatedPosts = posts.map(post => {
          return {
            ...post,
            author: 'Max'
          }
        });
        this.setState({posts: updatedPosts, error: false});
        // console.log(response);
      })
      .catch(error => {
        console.log(error);
        this.setState({error: true});
      });
  }

  postSelectedHandler = (id) => {
    this.setState({selectedPostId: id});
  };

  render() {
    let posts = <p style={{textAlign: 'center'}}>Something went wrong!</p>;
    if (!this.state.error) {
      posts = this.state.posts.map(
        post => {
          return <Post clicked={() => {
            this.postSelectedHandler(post.id)
          }} key={post.id} title={post.title} author={post.author}/>
        }
      );
    }

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
        <section className="Posts">
          {posts}
        </section>
        {/*<section>*/}
          {/*<FullPost id={this.state.selectedPostId}/>*/}
        {/*</section>*/}
        {/*<section>*/}
          {/*<NewPost/>*/}
        {/*</section>*/}
      </div>
    );
  }
}

export default Blog;
