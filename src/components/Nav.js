import React, { Component } from 'react'

export default class Nav extends Component {

    constructor(props) {
        super(props)
    }

    render() {

        if ( this.props.categories ) {
            var navItems =  this.props.categories.map( (category, index) => {
                return  (
                    <li key={index}>
                        <a href="#">
                            {category.title}
                        </a>
                    </li>
                )
            })
        }

        return (
            <ul className="inline-list">
                {navItems}
            </ul>
        )
    }
}
