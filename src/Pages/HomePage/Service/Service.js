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
        <div className='service-container  '>
            <Card>
                <Card.Img variant="top" src={img} style={{ width: '320px', padding: '4px' }} className='mt-2' />
                <Card.Body>
                    <Card.Title> <b>{name}</b> </Card.Title>
                    <Card.Text style={{padding:'5px'}}>
                        {description}
                    </Card.Text>
                    <Card.Title> Price: ${price}</Card.Title>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted "> Read More...</small>

                </Card.Footer>
            </Card>
        </div>
    );
};

export default Service;