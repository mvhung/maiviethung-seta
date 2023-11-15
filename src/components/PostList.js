import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/posts';
import PostItem from './PostItem';

const PostList = ({ posts, fetchPosts }) => {
  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  return (
    <div className='post-list'>
      <h2 style={{'textAlign':'center'}}>Posts</h2>
      <ul>
        {posts.map((post) => (
          <PostItem key={post.id} title={post.title} body={post.body}/>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  posts: state.posts.posts,
});

export default connect(mapStateToProps, { fetchPosts })(PostList);
