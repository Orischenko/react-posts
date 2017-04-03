import React, { Component, PropTypes } from 'react';

export default class Post extends Component{
    render() {
        const{ post } = this.props;

        return(
            <div className="inner-wrapper">
                <figure>
                    <img alt={ post.name } src={ post.imageUrl } />
                </figure>
                <h3>{ post.name }</h3>
                <p>{ post.snippet }</p>
            </div>
        );
    }
}