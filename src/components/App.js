import React, { Component }     from 'react'
import axios                    from 'axios'

import Nav                      from './Nav'

export default class App extends Component {

    constructor(props) {
        super(props)

        this.state = {
            categories: ''
        }
    }

    componentDidMount() {
        axios({
            type    : 'GET',
            url     : 'https://api.gousto.co.uk/products/v2.0/categories',
        })
        .then( response => {
            const categories = response.data.data
            this.setState({categories: categories })
        })
        .catch( error => {
            console.log('There was a problem getting the categories -> ', error)
        })
    }

    render() {

        return (
            <Nav categories={this.state.categories}/>
        )
    }
}
