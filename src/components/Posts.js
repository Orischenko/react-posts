import React, { Component, PropTypes } from 'react';
import Post from './Post';
import Select from './Select';
import Paginations from './Pagination';

export default class Posts extends Component{
    state = {
        selectValue: 2,
        pugNum: 1
    };

    componentDidMount() {

    }

    render() {
        const { posts } = this.props;

        return(
            <div>
                <div className="control">
                    <Select
                        handleChangeSelect={ this.handleChangeSelect }
                    />

                    <Paginations
                        paginations={ posts }
                        selectValue={ this.state.selectValue }
                        onClick={ this.handlePaginationClick }
                        handlePagNum={ this.state.pugNum }
                        //ref={ this.getPaginationRef }
                    />
                </div>

                { this.getPosts() }
            </div>
        );
    }

    getPosts() {
        const { posts } = this.props; //Number of posts by the select value

        const postElements = posts.slice(this.state.pugNum * this.state.selectValue - this.state.selectValue, this.state.pugNum * this.state.selectValue).map((post) => {
            return (
                <li key={ post.age }><Post post={ post }/></li>
            );
        });

        return(
            <div>
                <ul className="posts">
                    { postElements }
                </ul>
            </div>
        );
    }

    handleChangeSelect = (event) => {
        this.setState({
            selectValue: Number( event.target.value.match(/[0-9]+/g)[0] ),
            pugNum: 1
        });
    };

    handlePaginationClick = (num) => (event) => {
        event.preventDefault();

        this.setState({
            pugNum: num+1
        });
    };
}
