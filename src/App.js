import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/Home/Home';
import Faqs from './components/FAQs/Faqs';
import Login from './components/Login/Login';
import Blog from './components/Blog/Blog';
import Register from './components/Register/Register';
import initializeAuthentication from './components/Firebase/firebase,init';
import AuthProvider from './components/context/AuthProvider';
import Booking from './components/Booking/Booking';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import About from './components/About/About';
import Footer from './components/Footer/Footer';

initializeAuthentication();

function App() {
  return (
    <div className="">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/faqs">
              <Faqs></Faqs>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <PrivateRoute path="/services/:serviceId">
              <Booking></Booking>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/blog">
              <Blog></Blog>
            </Route>
          </Switch>
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
