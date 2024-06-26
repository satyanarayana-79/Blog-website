import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BlogPostList from './components/BlogPostList';
import BlogPost from './components/BlogPost';
import AddEditPost from './components/AddEditPost';
import GlobalStyle from './styles/GlobalStyle';

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route path="/" exact component={BlogPostList} />
        <Route path="/post/:id" component={BlogPost} />
        <Route path="/edit/:id?" component={AddEditPost} />
      </Switch>
    </Router>
  );
};

export default App;
