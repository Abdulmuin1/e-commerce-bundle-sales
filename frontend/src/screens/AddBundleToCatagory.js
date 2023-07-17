import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, ListGroup, Button } from 'react-bootstrap';

const BundleCategories = () => {
    const [categories, setCategories] = useState([]);
    const [bundles, setBundles] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedBundle, setSelectedBundle] = useState('');
    const [expandedCategory, setExpandedCategory] = useState('');

    useEffect(() => {
        axios
            .get('/api/bundleCatagories')
            .then((res) => setCategories(res.data))
            .catch((err) => console.log(err));
    }, []);

    const handleCategoryClick = (id) => {
        if (expandedCategory === id) {
            setExpandedCategory('');
        } else {
            setSelectedCategory(id);
            setExpandedCategory(id);
        }
    };

    const handleAddBundleClick = () => {
        axios
            .get('/api/bundles')
            .then((res) => setBundles(res.data))
            .catch((err) => console.log(err));
    };

    const handleBundleAdd = (id) => {
        axios
            .post(`/api/bundleCatagories/${selectedCategory}/bundles`, {
                bundleId: id,
            })
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
    };

    return (
        <Container>
            <h2>Bundle Categories:</h2>
            <ListGroup>
                {categories.map((category) => (
                    <ListGroup.Item
                        key={category._id}
                        action
                        onClick={() => handleCategoryClick(category._id)}
                    >
                        <div className="d-flex justify-content-between align-items-center">
                            <span>{category.name}</span>
                            <Button
                                variant="outline-primary"
                                size="sm"
                                onClick={handleAddBundleClick}
                            >
                                Add Bundle
                            </Button>
                        </div>
                        {expandedCategory === category._id &&
                            bundles.length > 0 && (
                                <ListGroup className="mt-2">
                                    {bundles.map((bundle) => (
                                        <ListGroup.Item key={bundle._id}>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <span>{bundle.name}</span>
                                                <span>
                                                    <Button
                                                        variant="primary"
                                                        size="sm"
                                                        onClick={() =>
                                                            handleBundleAdd(
                                                                bundle._id
                                                            )
                                                        }
                                                    >
                                                        Add
                                                    </Button>
                                                </span>
                                            </div>
                                        </ListGroup.Item>
                                    ))}
                                </ListGroup>
                            )}
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </Container>
    );
};

export default BundleCategories;
