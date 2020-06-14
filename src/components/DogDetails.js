import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Row from 'react-bootstrap/row'
import Col from 'react-bootstrap/col'
import Card from 'react-bootstrap/card'
import ListGroup from 'react-bootstrap/listgroup'
import Button from 'react-bootstrap/button'
import './DogDetails.css'

class DogDetails extends Component {
    render() {
        let { dog } = this.props
        return (
            <Row className='DogDetails justify-content-center mt-5'>
                <Col lg={5} md={11}>
                    <Card className='DogDetailsCard'>
                        <Card.Img variant='top' src={dog.src} />
                        <Card.Body>
                            <Card.Title>
                                <h2>{dog.name}</h2>
                            </Card.Title>
                            <h4>{dog.age} years old</h4>
                        </Card.Body>
                        <ListGroup variant='flush'>
                            {dog.facts.map((fact, i) => (
                                <ListGroup.Item key={i}>{fact}</ListGroup.Item>
                            ))}
                        </ListGroup>
                        <Card.Body>
                            <Link to='/dogs'>
                                <Button variant='info'>Go Back</Button>
                            </Link>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        )
    }
}

export default DogDetails
