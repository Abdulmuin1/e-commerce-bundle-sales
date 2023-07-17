import React, { useEffect } from 'react';
import Loader from '../components/Loader';
import { Row, Col, Button } from 'react-bootstrap';
import Product from '../components/Product';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { listBundleDetails } from '../actions/bundleActions';
import { listProducts } from '../actions/productActions';
import { listProductCatagoryDetails } from '../actions/productCatagoryActions';

const CustomizeBundleScreen = () => {
    const navigate = useNavigate();

    const { id } = useParams();
    const catagoryId = id;

    const location = useLocation();
    const bundleId = location.search ? location.search.split('=')[1] : '/';

    const dispatch = useDispatch();

    const bundleDetails = useSelector((state) => state.bundleDetails);
    const {
        loading: bundleLoading,
        error: bundleError,
        bundle,
    } = bundleDetails;

    const productList = useSelector((state) => state.productList);
    const {
        loading: productsLoading,
        error: productsError,
        products,
    } = productList;

    const productCatagoryDetails = useSelector(
        (state) => state.productCatagoryDetails
    );

    const {
        loading: catagoryLoading,
        error: catagoryError,
        catagory,
    } = productCatagoryDetails;
    useEffect(() => {
        dispatch(listProducts());
        dispatch(listBundleDetails(bundleId));
        dispatch(listProductCatagoryDetails(catagoryId));
    }, [bundleId, catagoryId, dispatch]);

    if (bundleLoading || catagoryLoading || productsLoading) {
        return <Loader />;
    }

    if (bundleError || catagoryError || productsError) {
        return <div>Error: Failed to fetch data</div>;
    }

    const addItemToBundleHandler = (product) => {
        bundle.products = [...bundle.products, product._id];
        bundle.price += product.price;
        catagory.products = [...catagory.products, product._id];
        localStorage.setItem('personalizedBundle', JSON.stringify(bundle));
    };

    const redirectToBundlePage = () => {
        navigate(`/bundles/${bundle._id}`, {
            state: { updatedBundle: bundle },
        });
    };

    return (
        <>
            <h1>{catagory.name}</h1>
            <Row>
                {products.map((product) => {
                    
                    if (product.category == catagory.name) {
                        return (
                            
                            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                                <Product fullProduct={product} />
                                <Button
                                    className="btn-sm"
                                    variant="primary"
                                    onClick={() => {
                                        addItemToBundleHandler(product);
                                        redirectToBundlePage();
                                    }}
                                >
                                    Add item
                                </Button>
                            </Col>
                        );
                    } else return null;
                })}
            </Row>
        </>
    );
};

export default CustomizeBundleScreen;
