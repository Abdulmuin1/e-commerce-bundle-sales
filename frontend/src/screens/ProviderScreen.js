import React, { useState, useEffect } from 'react';
import {
    Container,
    Row,
    Col,
    Form,
    Button,
    Card,
    Modal,
    ButtonGroup,
} from 'react-bootstrap';

const ProviderScreen = () => {
    const [name, setName] = useState('');
    const [tagNumber, setTagNumber] = useState('');
    const [providerEmail, setProviderEmail] = useState('');
    const [image, setImage] = useState('');
    const [brand, setBrand] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(0);
    const [countInStock, setCountInStock] = useState(0);
    const [products, setProducts] = useState([]);
    const [modalShow, setModalShow] = useState(false);
    const [modalProduct, setModalProduct] = useState(null);

    // Fetch all products from the API
    useEffect(() => {
        const fetchProducts = async () => {
            const res = await fetch('/api/products');
            const data = await res.json();
            setProducts(data);
        };
        fetchProducts();
    }, []);

    // Handle form submission to add a new product
    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch('/api/products', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name,
                tagNumber,
                providerEmail,
                image,
                brand,
                category,
                description,
                price,
                countInStock,
            }),
        });
        if (res.ok) {
            const newProduct = await res.json();
            setProducts([...products, newProduct]);
            setName('');
            setTagNumber('');
            setProviderEmail('');
            setImage('');
            setBrand('');
            setCategory('');
            setDescription('');
            setPrice(0);
            setCountInStock(0);
        }
    };

    // Handle deletion of a product
    const handleDelete = async (productId) => {
        const res = await fetch(`/api/products/${productId}`, {
            method: 'DELETE',
        });
        if (res.ok) {
            setProducts(
                products.filter((product) => product._id !== productId)
            );
        }
    };

    // Handle opening the modal dialog to update a product
    const handleUpdate = (product) => {
        setModalProduct(product);
        setName(product.name);
        setTagNumber(product.tagNumber);
        setProviderEmail(product.providerEmail);
        setImage(product.image);
        setBrand(product.brand);
        setCategory(product.category);
        setDescription(product.description);
        setPrice(product.price);
        setCountInStock(product.countInStock);
        setModalShow(true);
    };

    // Handle closing the modal dialog
    const handleClose = () => {
        setModalProduct(null);
        setName('');
        setTagNumber('');
        setProviderEmail('');
        setImage('');
        setBrand('');
        setCategory('');
        setDescription('');
        setPrice(0);
        setCountInStock(0);
        setModalShow(false);
    };

    // Handle form submission to update a product
    const handleUpdateSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch(`/api/products/${modalProduct._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name,
                tagNumber,
                providerEmail,
                image,
                brand,
                category,
                description,
                price,
                countInStock,
            }),
        });
        if (res.ok) {
            const updatedProduct = await res.json();
            setProducts(
                products.map((product) =>
                    product._id === updatedProduct._id
                        ? updatedProduct
                        : product
                )
            );
            handleClose();
        }
    };

    return (
        <Container>
            <Row>
                <Col>
                    <h1>Add Product</h1>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group>
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Tag Number</Form.Label>
                            <Form.Control
                                type="text"
                                value={tagNumber}
                                onChange={(e) => setTagNumber(e.target.value)}
                                required
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Provider Email</Form.Label>
                            <Form.Control
                                type="email"
                                value={providerEmail}
                                onChange={(e) =>
                                    setProviderEmail(e.target.value)
                                }
                                required
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Image URL</Form.Label>
                            <Form.Control
                                type="text"
                                value={image}
                                onChange={(e) => setImage(e.target.value)}
                                required
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Brand</Form.Label>
                            <Form.Control
                                type="text"
                                value={brand}
                                onChange={(e) => setBrand(e.target.value)}
                                required
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Category</Form.Label>
                            <Form.Control
                                type="text"
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                                required
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                as="textarea"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                required
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Price</Form.Label>
                            <Form.Control
                                type="number"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                                required
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Count in Stock</Form.Label>
                            <Form.Control
                                type="number"
                                value={countInStock}
                                onChange={(e) =>
                                    setCountInStock(e.target.value)
                                }
                                required
                            />
                        </Form.Group>
                        <Button type="submit">Add Product</Button>
                    </Form>
                </Col>
            </Row>
            <Row className="mt-5">
                {products.map((product) => (
                    <Col key={product._id} sm={6} md={4} lg={3} xl={2}>
                        <Card className="mb-3">
                            <Card.Img variant="top" src={product.image} />
                            <Card.Body>
                                <Card.Title>{product.name}</Card.Title>
                                <Card.Text>{product.description}</Card.Text>
                                <ButtonGroup>
                                    <Button
                                        variant="secondary"
                                        size="sm"
                                        onClick={() => handleUpdate(product)}
                                    >
                                        Update
                                    </Button>
                                    <Button
                                        variant="primary"
                                        size="sm"
                                        onClick={() =>
                                            handleDelete(product._id)
                                        }
                                    >
                                        Remove
                                    </Button>
                                </ButtonGroup>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
            {modalProduct && (
                <Modal show={modalShow} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Update Product</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={handleUpdateSubmit}>
                            <Form.Group>
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Tag Number</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={tagNumber}
                                    onChange={(e) =>
                                        setTagNumber(e.target.value)
                                    }
                                    required
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Provider Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    value={providerEmail}
                                    onChange={(e) =>
                                        setProviderEmail(e.target.value)
                                    }
                                    required
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Image URL</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={image}
                                    onChange={(e) => setImage(e.target.value)}
                                    required
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Brand</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={brand}
                                    onChange={(e) => setBrand(e.target.value)}
                                    required
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Category</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={category}
                                    onChange={(e) =>
                                        setCategory(e.target.value)
                                    }
                                    required
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Description</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    value={description}
                                    onChange={(e) =>
                                        setDescription(e.target.value)
                                    }
                                    required
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Price</Form.Label>
                                <Form.Control
                                    type="number"
                                    value={price}
                                    onChange={(e) => setPrice(e.target.value)}
                                    required
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Count in Stock</Form.Label>
                                <Form.Control
                                    type="number"
                                    value={countInStock}
                                    onChange={(e) =>
                                        setCountInStock(e.target.value)
                                    }
                                    required
                                />
                            </Form.Group>
                            <Button type="submit">Update</Button>
                        </Form>
                    </Modal.Body>
                </Modal>
            )}
        </Container>
    );
};

export default ProviderScreen;
