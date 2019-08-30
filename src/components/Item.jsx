import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Item extends Component {
    render() {
        let {itemId}=this.props;
        return (
            <Link to={'/details/'+itemId}>
                <dl>
                    {this.props.children}
                </dl>
            </Link>
        )
    }
}
