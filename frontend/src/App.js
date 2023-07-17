import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import BundleScreen from './screens/BundleScreen';
import PartnerScreen from './screens/PartnerScreen';
import ProductScreen from './screens/ProductScreen';
import CustomizeBundleScreen from './screens/CustomizeBundleScreen';
import CartScreen from './screens/CartScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ProfileScreen from './screens/ProfileScreen';
import ShippingScreen from './screens/ShippingScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';
import AdminScreen from './screens/AdminScreen';
import DesignerScreen from './screens/DesignerScreen';
import ProviderScreen from './screens/ProviderScreen';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BundleCategories from "./screens/AddBundleToCatagory"
import { Container } from 'react-bootstrap';

function App() {
    return (
        <Router>
            <Header />

            <main className="py-3">
                <Container>
                    <Routes>
                        <Route path="/" element={<HomeScreen />} exact />
                        <Route path="/bundles/:id" element={<BundleScreen />} />
                        <Route path="/partner" element={<PartnerScreen />} />
                        <Route
                            path="/products/:id"
                            element={<ProductScreen />}
                        />
                        <Route path="/cart/:id?" element={<CartScreen />} />
                        <Route path="/order/:id" element={<OrderScreen />} />
                        <Route
                            path="/placeorder"
                            element={<PlaceOrderScreen />}
                        />
                        <Route path="/payment" element={<PaymentScreen />} />
                        <Route path="/designer" element={<DesignerScreen />} />
                        <Route path="/admin" element={<AdminScreen />} />
                        <Route path="/provider" element={<ProviderScreen />} />
                        <Route
                            path="/admin/abtc"
                            element={<BundleCategories />}
                        />
                        <Route path="/shipping" element={<ShippingScreen />} />
                        <Route path="/profile" element={<ProfileScreen />} />
                        <Route path="/register" element={<RegisterScreen />} />
                        <Route path="/login" element={<LoginScreen />} />
                        <Route
                            path="/customize/:id?"
                            element={<CustomizeBundleScreen />}
                        />
                    </Routes>
                </Container>
            </main>
            <Footer />
        </Router>
    );
}

export default App;
