import React, { Component, PropTypes } from 'react';

export default class Paginations extends Component{
    render() {
        const { paginations, selectValue, onClick, handlePagNum } = this.props;

        const pagItems = paginations.map((pagination, i) => {
            if(handlePagNum - 1 === i) {
                return(
                    <li key={i} className="active"><a href="#" onClick={ onClick(i) }>{i+1}</a></li>
                );
            }

            return(
                <li key={i}><a href="#" onClick={ onClick(i) }>{i+1}</a></li>
            );
        });

        pagItems.length = Math.ceil(pagItems.length/selectValue);

        return(
            <ul className="post-pagination">
                { pagItems }
            </ul>
        );
    }
}