import React, { Component } from 'react'
import { getDogData } from './dogData'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navigation from './components/Navigation'
import Routes from './components/Routes'
import Container from 'react-bootstrap/container'

class App extends Component {
    static defaultProps = {
        dogs: getDogData()
    }

    render() {
        return (
            <div className='App'>
                <Navigation dogs={this.props.dogs} />
                <Container>
                    <Routes dogs={this.props.dogs} />
                </Container>
            </div>
        )
    }
}

export default App
