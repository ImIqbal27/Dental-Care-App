import React from 'react';
import { Card } from 'react-bootstrap';
import './Service.css';

const Service = ({ service }) => {
    const { name, price, description, img } = service;
    return (
        // <div className='service-container'>
        //     <img src={img} alt="" style={{ width: '350px' }} />
        //     <h3>{name}</h3>
        //     <p> <small>{description}</small></p>
        //     <p>Price: {price}</p>
        //     <button>Book For - {name}</button>

        // </div>
        <div className='service-container '>
            <Card>
                <Card.Img variant="top" src={img} style={{ width: '350px', }} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Card.Title> Price: ${price}</Card.Title>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Book for {name}</small>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default Service;