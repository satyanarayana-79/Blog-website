import React, { useState } from 'react';
import { savePost, updatePost, getPosts } from '../utils/mockAPI';
import { useParams, useHistory } from 'react-router-dom';

const AddEditPost = () => {
  const { id } = useParams();
  const history = useHistory();
  const existingPost = id ? getPosts().find(post => post.id === parseInt(id)) : null;

  const [title, setTitle] = useState(existingPost ? existingPost.title : '');
  const [author, setAuthor] = useState(existingPost ? existingPost.author : '');
  const [content, setContent] = useState(existingPost ? existingPost.content : '');
  const [date, setDate] = useState(existingPost ? existingPost.date : '');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = { id: existingPost ? existingPost.id : Date.now(), title, author, content, date };
    if (existingPost) {
      updatePost(newPost);
    } else {
      savePost(newPost);
    }
    history.push('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" required />
      <input type="text" value={author} onChange={e => setAuthor(e.target.value)} placeholder="Author" required />
      <textarea value={content} onChange={e => setContent(e.target.value)} placeholder="Content" required />
      <input type="date" value={date} onChange={e => setDate(e.target.value)} required />
      <button type="submit">Save</button>
    </form>
  );
};

export default AddEditPost;
