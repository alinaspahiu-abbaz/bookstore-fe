import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import BooksPage from "./pages/BooksPage";
import BookDetailsPage from './pages/BookDetailsPage/BookDetailsPage'
import CartPage from './pages/CartPage/CartPage'
import LoginPage from './pages/LoginPage/LoginPage'
import RegisterPage from './pages/LoginPage/RegisterPage'
import ProfilePage from './pages/ProfilePage/ProfilePage'
import ShippingPage from "./pages/ShippingPage/ShippingPage"
import PaymentPage from "./pages/PaymentPage/PaymentPage"
import PlaceOrderPage from "./pages/PlaceOrderPage/PlaceOrderPage"
import OderPage from "./pages/OrderPage/OrderPage"
import OrderPage from './pages/OrderPage/OrderPage';


function App() {
  return (
    <Router>
      <Header />
        <>
           <Route path='/shipping' component={ShippingPage} />
           <Route path='/payment' component={PaymentPage} />
           <Route path='/placeorder' component={PlaceOrderPage} />
           <Route path='/order/:id' component={OrderPage} />
           <Route path='/register' component={RegisterPage} />
           <Route path='/login' component={LoginPage} />
           <Route path='/profile' component={ProfilePage} />
           <Route path='/books' component={BooksPage} exact />
           <Route path='/book/:id' component={BookDetailsPage} exact />
           <Route path='/cart/:id?' component={CartPage} exact />
        </>
      <Footer />
    </Router>
  );
}

export default App;
