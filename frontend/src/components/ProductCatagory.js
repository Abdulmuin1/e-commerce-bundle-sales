import React, { useState, useEffect } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { listProducts } from '../actions/productActions';
import Loader from '../components/Loader';
import Product from '../components/Product';

const ProductCatagory = ({ bundle, catagory }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const productList = useSelector((state) => state.productList);
    const {
        loading: productLoading,
        error: productError,
        products,
    } = productList;

    useEffect(() => {
        dispatch(listProducts());
    }, [dispatch]);

    const addItemHandler = () => {
        navigate(`/customize/${catagory._id}?bundleId=${bundle._id}`);
    };
console.log(bundle);
    return (
        <div>
            <Row>
                <Col>
                    <h1>{catagory.name}</h1>
                </Col>
                <Col className="d-flex justify-content-end">
                    <Button variant="secondary" onClick={addItemHandler}>
                        Add an Item
                    </Button>
                </Col>
            </Row>

            <Row key={catagory._id}>
                {catagory.products.map((productId) => {
                    
                    if (!products[0]) {
                        return <Loader />;
                    }
                    // const deleted = JSON.parse(
                    //     localStorage.getItem('deletedProduct')
                    // );
                    // if (deleted) {
                    //     if (deleted._id === productId) {
                    //         return;
                    //     }
                    // }

                    const fullProduct = products.find((product) => {
                        return product._id === productId;
                    });

                    if (
                        !bundle.products.map((productId) =>
                            productId === fullProduct._id ? true : false
                        )
                    ) {
                        return;
                    } else {
                        return (
                            <Col key={productId} sm={12} md={6} lg={4} xl={3}>
                                <Product
                                    catagory={catagory}
                                    bundle={bundle}
                                    fullProduct={fullProduct}
                                />
                            </Col>
                        );
                    }
                })}
            </Row>
        </div>
    );
};

export default ProductCatagory;
