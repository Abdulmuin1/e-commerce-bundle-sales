import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link, useNavigate, useLocation } from 'react-router-dom';

// import axios from 'axios';
import {
    Container,
    Row,
    Col,
    Image,
    ListGroup,
    Card,
    Button,
} from 'react-bootstrap';
import Rating from '../components/Rating';

import Product from '../components/Product';
import Loader from '../components/Loader';
import Message from '../components/Message';
import { listBundles } from '../actions/bundleActions';
import { listBundleDetails } from '../actions/bundleActions';
import { listProductCatagories } from '../actions/productCatagoryActions';
import ProductCatagory from '../components/ProductCatagory';

const BundleScreen = ({ history }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const location = useLocation();
    const { updatedBundle } = location.state || {};
    
    // const bundleList = useSelector((state) => state.bundleList);
    const bundleDetails = useSelector((state) => state.bundleDetails);

    const productCatagoryList = useSelector(
        (state) => state.productCatagoryList
    );

    // const { loading: bundleLoading, error: bundleError, bundles } = bundleList;
    const {
        loading: catagoryLoading,
        error: catagoryError,
        catagories,
    } = productCatagoryList;

    var {
        loading: bundleLoading,
        error: bundleError,
        bundle,
    } = bundleDetails;

    bundle = updatedBundle || bundle

    // const [bundles, setBundles] = useState([]);
    // const [productCatagories, setCatagories] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        window.scrollTo(0, 0);
        // const fetchBundles = async () => {
        //     const { data } = await axios.get('/api/bundles');
        //     setBundles(data);

        // };

        // const fetchCatagories = async () => {
        //     const { data } = await axios.get('/api/productCatagories');
        //     setCatagories(data);
        //     setLoading(false);
        // };

        // fetchBundles();
        // fetchCatagories();
        dispatch(listProductCatagories());
        dispatch(listBundleDetails(id));
        // dispatch(listBundles());
    }, [dispatch, id]);

    // if (loading) {
    //     return <div>Loading...</div>;
    // }

    // const bundles = [];
    // const productCatagories = [];

    //const bundle = bundles[0]; .find((bundle) => bundle._id === id);
    const addToCartHandler = () => {
        navigate(`/cart/${id}`);
    };

    return (
        <>
            {bundleLoading ? (
                <Loader />
            ) : bundleError ? (
                <Message variant={'danger'}>{bundleError}</Message>
            ) : (
                <>
                    <Container>
                        <Row>
                            <Col md={6} className="text-center">
                                <Image
                                    src={bundle.image}
                                    alt={bundle.name}
                                    fluid
                                />
                            </Col>
                            <Col md={3}>
                                <ListGroup variant="flush">
                                    <ListGroup.Item>
                                        <h3>{bundle.name}</h3>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <Rating
                                            value={bundle.rating}
                                            text={`${bundle.numReviews} reviews`}
                                        />
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        Price: ${bundle.price}
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        Description: {bundle.description}
                                    </ListGroup.Item>
                                </ListGroup>
                            </Col>
                            <Col md={3}>
                                <Card>
                                    <ListGroup variant="flush">
                                        <ListGroup.Item>
                                            <Row>
                                                <Col>Price:</Col>
                                                <Col>
                                                    <strong>
                                                        ${bundle.price}
                                                    </strong>
                                                </Col>
                                            </Row>
                                        </ListGroup.Item>

                                        <ListGroup.Item>
                                            <Row>
                                                <Col>Status:</Col>
                                                <Col>
                                                    {`${bundle.availability} % available`}
                                                </Col>
                                            </Row>
                                        </ListGroup.Item>

                                        <ListGroup.Item>
                                            <Button
                                                className="btn-block"
                                                type="button"
                                                disabled={
                                                    bundle.availability === 0
                                                }
                                                onClick={addToCartHandler}
                                            >
                                                Add To Cart
                                            </Button>
                                        </ListGroup.Item>
                                    </ListGroup>
                                </Card>
                            </Col>
                        </Row>
                        <div style={{ height: 100 }}></div>
                        <Row className="mt-4">
                            {catagories.map((catagory) => {
                                return (
                                    <ProductCatagory
                                        bundle={bundle}
                                        catagory={catagory}
                                    />
                                );
                            })}
                        </Row>
                        <Row className="mt-4">
                            <Col>
                                <h3>Total Price: ${bundle.price}</h3>
                                <Button
                                    className="btn-block"
                                    type="button"
                                    disabled={bundle.availability === 0}
                                    onClick={addToCartHandler}
                                >
                                    Add To Cart
                                </Button>
                            </Col>
                        </Row>
                    </Container>
                </>
            )}
        </>
    );
};

export default BundleScreen;
