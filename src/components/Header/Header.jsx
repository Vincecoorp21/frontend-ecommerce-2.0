import './Header.scss';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext/UserState';
import { useNavigate } from 'react-router-dom';
import { ShoppingCartOutlined } from '@ant-design/icons';

function Header() {
  const { token, logout } = useContext(UserContext);

  const navigate = useNavigate();

  const logoutUser = () => {
    logout();
    setTimeout(() => {
      navigate('/');
    }, 2000);
  };
  return (
    <nav className='header'>
      <span>Pc COMPONENTES</span>
      <div>
        {token ? (
          <>
            <span>
              <Link className='btn-head' to='/'>
                Home
              </Link>
            </span>
            <span>
              <Link className='btn-head' to='/products'>
                Products
              </Link>
            </span>
            <span>
              <Link className='btn-head' to='/profile'>
                Profile
              </Link>
            </span>
            <span onClick={logoutUser}>
              <Link className='btn-head' to='/'>
                Logout
              </Link>
            </span>
          </>
        ) : (
          <>
            <span>
              <Link className='btn-head' to='/'>
                Home
              </Link>
            </span>
            <span>
              <Link className='btn-head' to='/products'>
                Products
              </Link>
            </span>
            <span>
              <Link className='btn-head' to='/login'>
                Login
              </Link>
            </span>
          </>
        )}
      </div>
      <span>
        <Link to='/cart' className='btn-head cart'>
          <ShoppingCartOutlined />
        </Link>
      </span>
    </nav>
  );
}
export default Header;




