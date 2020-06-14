import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Row from 'react-bootstrap/row'
import Col from 'react-bootstrap/col'
import Image from 'react-bootstrap/image'
import './DogList.css'

class DogList extends Component {
    render() {
        return (
            <div className='DogList'>
                <h1 className='display-1 text-center my-4'>Dog List</h1>
                <Row>
                    {this.props.dogs.map((dog) => (
                        <Col lg={4} key={dog.name} className='Dog'>
                            <Link to={`/dogs/${dog.name}`}>
                                <Image
                                    src={dog.src}
                                    alt={dog.name}
                                    roundedCircle
                                />
                            </Link>
                            <h3>
                                <Link
                                    className='underline'
                                    to={`/dogs/${dog.name}`}
                                >
                                    {dog.name}
                                </Link>
                            </h3>
                        </Col>
                    ))}
                </Row>
            </div>
        )
    }
}

export default DogList
