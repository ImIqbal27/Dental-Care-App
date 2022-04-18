import React from 'react';
import { Card } from 'react-bootstrap';
import './Service.css';

const Service = ({ service }) => {
    const { name, price, description, img } = service;
    return (
        <div className='service-container  '>
            <Card>
                <Card.Img variant="top" className='w-100' src={img} />
                <Card.Body>
                    <Card.Title> <b>{name}</b> </Card.Title>
                    <Card.Text style={{ padding: '5px' }}>
                        {description}
                    </Card.Text>
                    <Card.Title> Cost: ${price}</Card.Title>
                </Card.Body>
                <Card.Footer>
                    <small className=" "> Read More...</small>

                </Card.Footer>
            </Card>
        </div>
    );
};

export default Service;