import { Link, useNavigate } from 'react-router-dom';

import React, { useState, useEffect } from 'react';
import {
    Container,
    Row,
    Col,
    Tab,
    Nav,
    Image,
    Form,
    Button,
} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { getUserDetails, updateUserProfile } from '../actions/userActions';
import { listMyOrders } from '../actions/orderActions';

import { USER_UPDATE_PROFILE_RESET } from '../constants/userConstants';

const PartnerScreen = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [isDesigner, setIsDesigner] = useState('');
    const [isProvider, setIsProvider] = useState('');

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    const userDetails = useSelector((state) => state.userDetails);
    const { loading, error, user } = userDetails;

    const [message, setMessage] = useState(null);

    const goBack = () => {
        navigate(-1);
    };

    useEffect(() => {
        if (!user || !user.name) {
            dispatch(getUserDetails('profile'));
        }
    }, [dispatch, userInfo, user, navigate]);

    const submitHandler = (e) => {
        e.preventDefault();
        if (!userInfo) {
            navigate('/login?redirect=/partner');
        } else {
            dispatch(
                updateUserProfile({ id: user._id, name, email, password, isDesigner, isProvider })
            ); 
            navigate('/')
        }
    };

    return (
        <>
            <Link className="btn btn-light my-3" onClick={goBack}>
                <i className="fa-solid fa-arrow-left">&nbsp; Back</i>
            </Link>
            <Container>
                <Container className="my-5">
                    <Row>
                        <Col md={6}>
                            <Image
                                src="/images/partnerPage.png"
                                alt="Become a Partner"
                                fluid
                            />
                        </Col>
                        <Col md={6}>
                            <h2>Become a Partner</h2>
                            <p>
                                Join our exclusive Become a Partner program and
                                revolutionize home furnishing and decoration. We
                                believe that collaboration between providers and
                                interior designers is the key to exceptional
                                customer experiences. Whether you're a provider
                                with high-quality products or an interior
                                designer with an eye for aesthetics, join our
                                community and reap the benefits. As a provider
                                partner, showcase your products to a wider
                                audience, collaborate on tailored product
                                bundles, and watch your brand grow. If you're an
                                interior designer, access a range of
                                high-quality products, showcase your creativity,
                                and attract clients seeking comprehensive
                                solutions. Enjoy exclusive resources, dedicated
                                support, and a vibrant professional community.
                                Let's redefine how people create their dream
                                homes. Join our Become a Partner program today!
                            </p>
                        </Col>
                    </Row>
                </Container>

                <Tab.Container defaultActiveKey="providers">
                    <Row>
                        <Col md={4}>
                            <Nav variant="pills" className="flex-column">
                                <Nav.Item>
                                    <Nav.Link eventKey="providers">
                                        Providers
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="designers">
                                        Designers
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col md={8}>
                            {message && (
                                <Message variant="danger">{message}</Message>
                            )}
                            <Tab.Content>
                                <Tab.Pane eventKey="providers">
                                    <Form onSubmit={submitHandler}>
                                        {/* <Form.Group controlId="providerName">
                                            <Form.Label>Name</Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="Enter your name"
                                            />
                                        </Form.Group>
                                        <Form.Group controlId="providerEmail">
                                            <Form.Label>Email</Form.Label>
                                            <Form.Control
                                                type="email"
                                                placeholder="Enter your email"
                                            />
                                        </Form.Group>
                                        <div style={{ height: 10 }}></div> */}
                                        <p>
                                            Join our vibrant community of
                                            sellers, showcase your products, and
                                            leverage our user-friendly
                                            interface, robust marketing tools,
                                            and secure payment infrastructure to
                                            thrive in the world of online
                                            commerce. Start selling with us
                                            today and unlock endless growth
                                            opportunities for your business.
                                        </p>
                                        <p>
                                            Join us today and unlock endless
                                            possibilities to grow your business
                                            and establish a strong online
                                            presence.
                                        </p>
                                        <Button
                                            variant="primary"
                                            type="submit"
                                            onClick={() =>
                                                setIsProvider('true')
                                            }
                                        >
                                            Register
                                        </Button>
                                    </Form>
                                </Tab.Pane>
                                <Tab.Pane eventKey="designers">
                                    <Form onSubmit={submitHandler}>
                                        {/* <Form.Group controlId="designerName">
                                            <Form.Label>Name</Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="Enter your name"
                                            />
                                        </Form.Group>
                                        <Form.Group controlId="designerEmail">
                                            <Form.Label>Email</Form.Label>
                                            <Form.Control
                                                type="email"
                                                placeholder="Enter your email"
                                            />
                                        </Form.Group>
                                        Additional fields for designers */}
                                        <p>
                                            Welcome to our Ecommerce Platform
                                            where you can showcase your
                                            creativity and connect with clients
                                            seeking expert design services. Join
                                            our community of design enthusiasts,
                                            showcase your portfolio, and
                                            collaborate with clients from around
                                            the world. Elevate your interior
                                            design business with our intuitive
                                            interface and comprehensive project
                                            management tools.
                                        </p>
                                        <p>
                                            Start connecting with clients today
                                            and unlock endless opportunities for
                                            growth in the industry.
                                        </p>
                                        <Button
                                            variant="primary"
                                            type="submit"
                                            onClick={() =>
                                                setIsDesigner('true')
                                            }
                                        >
                                            Register
                                        </Button>
                                    </Form>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>

                <Row className="my-5">
                    <Col>
                        <h3>Testimonials</h3>
                    </Col>
                </Row>
                <Row>
                    <Col md={4} className="text-center">
                        <Image
                            src="/images/user2.jpg"
                            roundedCircle
                            className="custom-image"
                        />
                        <div style={{ height: 10 }}></div>
                        <p>John Doe</p>
                        <p>Vendor</p>
                        <p>
                            Game-changing collaboration drove remarkable
                            expansion, opening new markets for us.
                        </p>
                    </Col>
                    <Col md={4} className="text-center">
                        <Image
                            src="/images/user1.jpg"
                            roundedCircle
                            className="custom-image"
                        />
                        <div style={{ height: 10 }}></div>
                        <p>Jane Smith</p>
                        <p>Designer</p>
                        <p>
                            Partnering with HomeSuiteHome skyrocketed our sales
                            and profitability beyond expectations.
                        </p>
                    </Col>
                    <Col md={4} className="text-center">
                        <Image
                            src="/images/user3.jpg"
                            roundedCircle
                            className="custom-image"
                        />
                        <div style={{ height: 10 }}></div>
                        <p>Mark Johnson</p>
                        <p>Vendor</p>
                        <p>
                            Unleashed tremendous success, boosting sales and
                            transforming our business.
                        </p>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default PartnerScreen;
