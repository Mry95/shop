import React, { Component } from 'react'

export default class twoDimensionCode extends Component {
    render() {
        let {src}=this.props
        return (
            <div className="twoWCode">
                <img src={src} alt=""/>
            </div>
        )
    }
}
