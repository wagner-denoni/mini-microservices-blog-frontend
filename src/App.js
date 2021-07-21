import React from 'react';
import PostCreate from './components/post-create.component';
import PostList from './components/post-list.component';

const App = () => {
    return (<div className="container">
        <h1>Create Post</h1>
        <PostCreate />
        <hr />
        <h1>Posts</h1>
        <PostList />
    </div>);
}

export default App;