import React, {Component} from 'react';
import axios from '../../../axios';
import {Route} from 'react-router-dom';

import Post from '../../../components/Post/Post';
import './Posts.css';
import FullPost from '../FullPost/FullPost';

class Posts extends Component {
  state = {
    posts: []
  };

  postSelectedHandler = (id) => {
    // this.setState({selectedPostId: id});
    // this.props.history.push({pathname: '/' + id});
    this.props.history.push('/post/' + id);
  };

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
      <div>
        <section className="Posts">
          {posts}
        </section>
        <Route path={this.props.match.url + '/:id'} exact component={FullPost}/>
      </div>
    );
  }
}

export default Posts;
