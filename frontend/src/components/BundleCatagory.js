import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { listBundles } from '../actions/bundleActions';
import Loader from '../components/Loader';
import Bundle from '../components/Bundle';

const BundleCatagory = ({ catagory }) => {
    const dispatch = useDispatch();
    const bundleList = useSelector((state) => state.bundleList);
    const { loading: bundleLoading, error: bundleError, bundles } = bundleList;

    

    useEffect(() => {
        dispatch(listBundles());
    }, [dispatch]);
    return (
        <div>
            <h1>{catagory.name}</h1>

            <Row>
                {catagory.bundles.map((bundleId) => {
                    if (!bundles[0]) {
                        return <Loader key={bundleId} />;
                    }
                    const fullBundle = bundles.find((bundle) => {
                        
                        return bundle._id === bundleId;
                    });

                    return (
                        <Col key={bundleId} sm={12} md={6} lg={4} xl={3}>
                            <Bundle fullBundle={fullBundle} />
                        </Col>
                    );
                })}
            </Row>
        </div>
    );
};

export default BundleCatagory;
