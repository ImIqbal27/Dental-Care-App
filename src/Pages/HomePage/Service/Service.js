import React from 'react';
import { Card } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    const { id, name, price, description, img } = service;
    const navigate = useNavigate();
    const navigateToServiceDetail = id => {
        console.log(id);
        navigate(`/service/${id}`)

    }
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
                   
                        <small onClick={() => navigateToServiceDetail(id)}> Go For...</small>
                  


                </Card.Footer>
            </Card>
        </div>
    );
};

export default Service;