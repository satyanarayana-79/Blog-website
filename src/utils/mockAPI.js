const getPosts = () => {
    const posts = localStorage.getItem('posts');
    return posts ? JSON.parse(posts) : [];
  };
  
  const savePost = (post) => {
    const posts = getPosts();
    posts.push(post);
    localStorage.setItem('posts', JSON.stringify(posts));
  };
  
  const updatePost = (updatedPost) => {
    let posts = getPosts();
    posts = posts.map(post => post.id === updatedPost.id ? updatedPost : post);
    localStorage.setItem('posts', JSON.stringify(posts));
  };
  
  const deletePost = (id) => {
    let posts = getPosts();
    posts = posts.filter(post => post.id !== id);
    localStorage.setItem('posts', JSON.stringify(posts));
  };
  
  export { getPosts, savePost, updatePost, deletePost };
  