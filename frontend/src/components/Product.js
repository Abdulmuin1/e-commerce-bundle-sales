import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Card, Row, Col, Button } from 'react-bootstrap';
import axios from 'axios';
import Rating from './Rating';
import Loader from '../components/Loader';

const Product = ({ fullProduct, bundle, catagory }) => {
    const navigate = useNavigate();
    const redirectToBundlePage = () => {
        navigate(`/bundles/${bundle._id}`, {
            state: { updatedBundle: fullProduct },
        });
    };

    // const deleteItemFromBundleHandler = (product) => {
    //     let index = bundle.products.indexOf(product);
    //     if (index !== -1) {
    //         bundle.products.splice(index, 1);
    //     }
    //     // bundle.products = bundle.products.filter((item) => item._id !== product._id);
    //     bundle.price -= product.price;
    //     // catagory.products = catagory.products.filter(
    //     //     (item) => item._id !== product._id
    //     // );
    //     index = catagory.products.indexOf(product);
    //     if (index !== -1) {
    //         bundle.products.splice(index, 1);
    //     }
    //     localStorage.setItem('personalizedBundle', JSON.stringify(bundle));
    //     localStorage.setItem('deletedProduct', JSON.stringify(product));
    // };
    return (
        <Card className="my-3 p-3 rounded no-padding">
            {!fullProduct ? (
                <Loader />
            ) : (
                <>
                    <Link to={`/products/${fullProduct._id}`}>
                        <Card.Img src={fullProduct.image} variant="top" />
                    </Link>

                    <Card.Body className="no-padding">
                        <Link to={`/products/${fullProduct._id}`}>
                            <Card.Title as="div">
                                <strong>{fullProduct.name}</strong>
                            </Card.Title>
                        </Link>

                        <Card.Text as="div">
                            <Rating
                                value={fullProduct.rating}
                                text={`${fullProduct.numReviews} reviews`}
                            />
                        </Card.Text>

                        <Card.Text as="h3">ETB {fullProduct.price}</Card.Text>
                        <Row>
                            {/* <Col className="d-flex justify-content-end">
                                <Button
                                    variant="secondary"
                                    className="less-padding"
                                    onClick={() => {
                                        deleteItemFromBundleHandler(
                                            fullProduct
                                        );
                                        redirectToBundlePage();
                                    }}
                                >
                                    <i className="fa-solid fa-trash"></i>
                                </Button>
                            </Col> */}
                        </Row>
                    </Card.Body>
                </>
            )}
        </Card>
    );
};

export default Product;
