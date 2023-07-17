import React, { useState, useEffect } from 'react';
import {
    Container,
    Row,
    Col,
    Form,
    Button,
    Card,
    Table,
} from 'react-bootstrap';
import axios from 'axios';

const DesignerScreen = () => {
    const [products, setProducts] = useState([]);
    const [bundles, setBundles] = useState([]);
    const [bundleForm, setBundleForm] = useState({
        name: '',
        designerEmail: '',
        description: '',
        price: '',
        image: '',
        category: '',
        availability: '',
        productNames: [],
        products: [],
    });

    useEffect(() => {
        const fetchProducts = async () => {
            const { data } = await axios.get('/api/products');
            setProducts(data);
        };
        fetchProducts();

        const fetchBundles = async () => {
            const { data } = await axios.get('/api/bundles');
            setBundles(data);
        };
        fetchBundles();
    }, []);

    const handleAddProductToBundle = (productId) => {
        const product = products.find((p) => p._id === productId);
        setBundleForm((prevForm) => ({
            ...prevForm,
            productNames: [...prevForm.productNames, product.name],
            products: [...prevForm.products, product._id],
        }));
    };

    const handleRemoveBundle = async (bundleId) => {
        await axios.delete(`/api/bundles/${bundleId}`);
        const updatedBundles = bundles.filter((b) => b._id !== bundleId);
        setBundles(updatedBundles);
    };

    const handleUpdateBundle = async (event) => {
        event.preventDefault();
        await axios.put(`/api/bundles/${bundleForm._id}`, bundleForm);
        const updatedBundles = await (await axios.get('/api/bundles')).data;
        setBundles(updatedBundles);
        setBundleForm({
            name: '',
            designerEmail: '',
            description: '',
            price: '',
            image: '',
            category: '',
            availability: '',
            productNames: [],
            products: [],
        });
    };

    const handleCreateBundle = async (event) => {
        event.preventDefault();
        await axios.post('/api/bundles', bundleForm);
        const updatedBundles = await (await axios.get('/api/bundles')).data;
        setBundles(updatedBundles);
        setBundleForm({
            name: '',
            designerEmail: '',
            description: '',
            price: '',
            image: '',
            category: '',
            availability: '',
            productNames: [],
            products: [],
        });
    };

    return (
        <Container>
            <Row>
                <Col>
                    <h1>Create a New Bundle</h1>
                    <Form onSubmit={handleCreateBundle}>
                        <Form.Group>
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter name"
                                value={bundleForm.name}
                                onChange={(e) =>
                                    setBundleForm((prevForm) => ({
                                        ...prevForm,
                                        name: e.target.value,
                                    }))
                                }
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Designer Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                value={bundleForm.designerEmail}
                                onChange={(e) =>
                                    setBundleForm((prevForm) => ({
                                        ...prevForm,
                                        designerEmail: e.target.value,
                                    }))
                                }
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter description"
                                value={bundleForm.description}
                                onChange={(e) =>
                                    setBundleForm((prevForm) => ({
                                        ...prevForm,
                                        description: e.target.value,
                                    }))
                                }
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Price</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="Enter price"
                                value={bundleForm.price}
                                onChange={(e) =>
                                    setBundleForm((prevForm) => ({
                                        ...prevForm,
                                        price: e.target.value,
                                    }))
                                }
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Image URL</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter image URL"
                                value={bundleForm.image}
                                onChange={(e) =>
                                    setBundleForm((prevForm) => ({
                                        ...prevForm,
                                        image: e.target.value,
                                    }))
                                }
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Category</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter category"
                                value={bundleForm.category}
                                onChange={(e) =>
                                    setBundleForm((prevForm) => ({
                                        ...prevForm,
                                        category: e.target.value,
                                    }))
                                }
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Availability</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter availability"
                                value={bundleForm.availability}
                                onChange={(e) =>
                                    setBundleForm((prevForm) => ({
                                        ...prevForm,
                                        availability: e.target.value,
                                    }))
                                }
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Selected Products</Form.Label>
                            {bundleForm.productNames.map((name, index) => (
                                <Card key={index} className="mb-2">
                                    <Card.Body>
                                        <Card.Title>{name}</Card.Title>
                                        <Button
                                            variant="danger"
                                            onClick={() => {
                                                setBundleForm((prevForm) => ({
                                                    ...prevForm,
                                                    productNames:
                                                        prevForm.productNames.filter(
                                                            (_, i) =>
                                                                i !== index
                                                        ),
                                                    products:
                                                        prevForm.products.filter(
                                                            (_, i) =>
                                                                i !== index
                                                        ),
                                                }));
                                            }}
                                        >
                                            Remove
                                        </Button>
                                    </Card.Body>
                                </Card>
                            ))}
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Select Products</Form.Label>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Description</th>
                                        <th>Price</th>
                                        <th>Select</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {products.map((p) => (
                                        <tr key={p._id}>
                                            <td>{p.name}</td>
                                            <td>{p.description}</td>
                                            <td>{p.price}</td>
                                            <td>
                                                <Form.Check
                                                    type="checkbox"
                                                    value={p._id}
                                                    onChange={() =>
                                                        handleAddProductToBundle(
                                                            p._id
                                                        )
                                                    }
                                                    checked={bundleForm.products.includes(
                                                        p._id
                                                    )}
                                                />
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Create Bundle
                        </Button>
                    </Form>
                </Col>
                <Col>
                    <h1>Current Bundles</h1>
                    <Table striped bordered hover size="sm">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Designer Email</th>
                                <th>Description</th>
                                <th>Price</th>
                                <th>Image</th>
                                <th>Category</th>
                                <th>Availability</th>
                                <th>Products</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {bundles.map((b) => (
                                <tr key={b._id}>
                                    <td>{b.name}</td>
                                    <td>{b.designerEmail}</td>
                                    <td>{b.description}</td>
                                    <td>{b.price}</td>
                                    <td>
                                        <img
                                            src={b.image}
                                            alt={b.name}
                                            style={{ maxWidth: '100px' }}
                                        />
                                    </td>
                                    <td>{b.category}</td>
                                    <td>{b.availability}</td>
                                    <td>{b.productNames.join(', ')}</td>
                                    <td>
                                        <Button
                                            variant="danger"
                                            onClick={() =>
                                                handleRemoveBundle(b._id)
                                            }
                                        >
                                            Delete
                                        </Button>
                                        <Button
                                            variant="primary"
                                            onClick={() =>
                                                setBundleForm({
                                                    _id: b._id,
                                                    name: b.name,
                                                    designerEmail:
                                                        b.designerEmail,
                                                    description: b.description,
                                                    price: b.price,
                                                    image: b.image,
                                                    category: b.category,
                                                    availability:
                                                        b.availability,
                                                    productNames:
                                                        b.productNames,
                                                    products: b.products,
                                                })
                                            }
                                        >
                                            Edit
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    );
};

export default DesignerScreen;
