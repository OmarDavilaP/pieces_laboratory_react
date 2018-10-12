import React, { Component } from 'react'
import { Route } from 'react-router-dom';
import App from '../../App';


class Routes extends Component {

    render() {
        return (
            <Route path="/" component={App} />
        )

    }

}

export default Routes;