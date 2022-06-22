import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import 'antd/dist/antd.css';
import { UserProvider } from './context/UserContext/UserState';
import Home from './components/Home/Home';
import Products from './components/Products/Products';
import { ProductProvider } from './context/ProductContext/ProductState';
import Cart from './components/Cart/Cart';
import { OrdersProvider } from "./context/OrdersContext/OrdersState";
// import 'bootswatch/dist/morph/bootstrap.min.css';

function App() {
  return (
    <div className='App'>
      <UserProvider>
        <ProductProvider>
          <OrdersProvider>
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/login' element={<Login />} />
              <Route path='/profile' element={<Profile />} />
              <Route path='/products' element={<Products />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </BrowserRouter>
          </OrdersProvider>
        </ProductProvider>
      </UserProvider>
    </div>
  );
}

export default App;
