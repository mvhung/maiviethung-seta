// components/PostForm.js
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addPost } from '../actions/posts';

const PostForm = ({ addPost }) => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [isTitleValid, setIsTitleValid] = useState(true);
    const [isBodyValid, setIsBodyValid] = useState(true);
    const handleTitleChange = (e) => {
        setTitle(e.target.value);
        setIsTitleValid(e.target.value !== '');
    };

    const handleBodyChange = (e) => {
        setBody(e.target.value);
        setIsBodyValid(e.target.value !== '');
    };
    const handleSubmit = (e) => {
        e.preventDefault();

        if (title === '') {
            setIsTitleValid(false);
        }

        if (body === '') {
            setIsBodyValid(false);
        }

        if (title !== '' && body !== '') {
            const newPost = {
                userId: 1,
                title,
                body,
            };
            addPost(newPost);
            setTitle('');
            setBody('');
            setIsTitleValid(true);
            setIsBodyValid(true);
        }
    };

    return (
        <div>
            <h2>Add New Post</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title:</label>
                    <input type="text" value={title} onChange={handleTitleChange} style={{ width: '100%' }} />
                    {!isTitleValid && <p style={{ color: 'red' }}>Title is required</p>}
                </div>
                <div>
                    <label>Body:</label>
                    <textarea type="text" value={body} onChange={handleBodyChange} style={{ width: '100%' }} rows={5} />
                    {!isBodyValid && <p style={{ color: 'red' }}>Body is required</p>}
                </div>
                <button type="submit">Add Post</button>
            </form>
        </div>
    );
};

export default connect(null, { addPost })(PostForm);
