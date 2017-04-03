import React from 'react';
import ReactDOM from 'react-dom';
import { posts } from './data/data';
import Posts from './components/Posts';

require('./../sass/style.scss');

ReactDOM.render(
    <div>
        <h2>Posts</h2>
        <Posts posts={ posts }/>
    </div>,
    document.getElementById('react-posts')
);