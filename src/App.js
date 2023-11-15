import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import './App.css'
const App = () => {
  return (
    <Provider store={store}>
      <div className='post-container'>
        <PostList  />
        <PostForm className='post-form'/>
      </div>
    </Provider>
  );
};

export default App;
