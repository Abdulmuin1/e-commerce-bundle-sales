import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link, useNavigate } from 'react-router-dom';
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
import { listProductDetails } from '../actions/productActions';
import { listProductCatagories } from '../actions/productCatagoryActions';
import ProductCatagory from '../components/ProductCatagory';

const ProductScreen = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // const bundleList = useSelector((state) => state.bundleList);
    const productDetails = useSelector((state) => state.productDetails);

    // const { loading: bundleLoading, error: bundleError, bundles } = bundleList;

    const { loading, error, product } = productDetails;

    // const [bundles, setBundles] = useState([]);
    // const [productCatagories, setCatagories] = useState([]);

    const { id } = useParams();

    useEffect(() => {
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
        dispatch(listProductDetails(id));
        // dispatch(listBundles());
    }, [dispatch, id]);

    // if (loading) {
    //     return <div>Loading...</div>;
    // }

    // const bundles = [];
    // const productCatagories = [];

    //const bundle = bundles[0]; .find((bundle) => bundle._id === id);
    
  const goBack = () => {
      navigate(-1);
  };
    return (
        <>
            <Link className="btn btn-light my-3 " onClick={goBack}>
                <i className="fa-solid fa-arrow-left">&nbsp; Back</i>
            </Link>
            {loading ? (
                <Loader />
            ) : error ? (
                <Message variant={'danger'}>{error}</Message>
            ) : (
                <>
                    <Container>
                        <Row>
                            <Col md={6} className="text-center">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fluid
                                />
                            </Col>
                            <Col md={6}>
                                <ListGroup variant="flush">
                                    <ListGroup.Item>
                                        <h3>{product.name}</h3>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <Rating
                                            value={product.rating}
                                            text={`${product.numReviews} reviews`}
                                        />
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        Price: ${product.price}
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        Status: {product.countInStock} in stock
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        Description: {product.description}
                                    </ListGroup.Item>
                                </ListGroup>
                            </Col>
                            {/* <Col md={3}>
                                <Card>
                                    <ListGroup variant="flush">
                                        <ListGroup.Item>
                                            <Row>
                                                <Col>Price:</Col>
                                                <Col>
                                                    <strong>
                                                        ${product.price}
                                                    </strong>
                                                </Col>
                                            </Row>
                                        </ListGroup.Item>

                                        <ListGroup.Item>
                                            <Row>
                                                <Col>Status:</Col>
                                                <Col>
                                                    {`${product.countInStock} in stock`}
                                                </Col>
                                            </Row>
                                        </ListGroup.Item>

                                        <ListGroup.Item>
                                            <Button
                                                className="btn-block"
                                                type="button"
                                                disabled={
                                                    product.countInStock === 0
                                                }
                                            >
                                                Add To Cart
                                            </Button>
                                        </ListGroup.Item>
                                    </ListGroup>
                                </Card>
                            </Col> */}
                        </Row>
                    </Container>
                </>
            )}
        </>
    );
};

export default ProductScreen;
