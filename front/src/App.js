
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Login from './pages/login/Login.jsx'
import Signup from './pages/signup/Signup'
import Home from './pages/home/Home'
import { AnimatePresence } from 'framer-motion'
import ForgetPassword from './pages/forgetpassword/ForgetPassword';
import Dashboard from './pages/dashboard/Dashboard';
import Purchase from './pages/purchase/Purchase';
import Customer from './pages/Customer/Customer';
import Suppliers from './pages/suppliers/Suppliers';
import Attributes from './pages/attributes/Attributes';
import Orders from './pages/orders/Orders';
import Product from './pages/product/Product';
import Sell from './pages/sell/Sell';
import Setting from './pages/setting/Setting';
import CheckOut from './pages/checkOut/CheckOut';
import Unauthorized from './pages/unauthorized/Unauthorized';
import ResetPass from './pages/resetpassword/ResetPass';

function App() {
  const location = useLocation()
  
  return (
    <div className="App">
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
         
          <Route path='/forget' element={<ForgetPassword />} />
          <Route path='/resetpass' element={<ResetPass/>}/>
          {localStorage.token?<Route path='/dashboard' element={<Dashboard/>}/> :''}
          {localStorage.token? <Route path='/home' element={<Home />} /> :''}
          {localStorage.token?<Route path='/purchase' element={<Purchase/>}/> :''}
          {localStorage.token?<Route path='/customer' element={<Customer/>}/> :''}
          {localStorage.token? <Route path='/supplier' element={<Suppliers/>}/>:''}
          {localStorage.token?<Route path='/attribute' element={<Attributes/>}/> :''}
          {localStorage.token? <Route path='/order' element={<Orders/>}/>:''}
          {localStorage.token? <Route path='/product' element={<Product/>}/>:''}
          {localStorage.token? <Route path='/sell' element={<Sell/>}/>:''}
          {localStorage.token?<Route path='/checkout' element={<CheckOut/>}/> :''}
          {localStorage.token?<Route path='/setting' element={<Setting/>}/> :''}
          
          
          <Route path='*'  element={<Unauthorized/>}/>
        </Routes>
     
    </div >
  );
}

export default App;
