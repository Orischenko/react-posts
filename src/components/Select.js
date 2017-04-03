import React, { Component, PropTypes } from 'react';

export default class Select extends Component{
    render() {
        const{ handleChangeSelect } = this.props;

        return (
            <select onChange={ handleChangeSelect }>
                <option>2 per page</option>
                <option>6 per page</option>
                <option>10 per page</option>
                <option>20 per page</option>
            </select>
        );
    }
}