import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import axios from 'axios';
import Rating from './Rating';
import Loader from '../components/Loader';

const Bundle = ({ fullBundle }) => {
    const bundle = fullBundle
    
    

    
    return (
        <Card className="my-3 p-3 rounded">
            {!bundle.image ? (
                <Loader />
            ) : (
                <>
                    
                        <Link to={`/bundles/${bundle._id}`}>
                            <Card.Img src={bundle.image} variant="top" />
                        </Link>
                  

                    <Card.Body>
                        <Link to={`/bundles/${bundle._id}`}>
                            <Card.Title as="div">
                                <strong>{bundle.name}</strong>
                            </Card.Title>
                        </Link>

                        <Card.Text as="div">
                            <Rating
                                value={bundle.rating}
                                text={`${bundle.numReviews} reviews`}
                            />
                        </Card.Text>

                        <Card.Text as="h3">ETB {bundle.price}</Card.Text>
                    </Card.Body>
                </>
            )}
        </Card>
    );
};

export default Bundle;
