import './Header.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext/UserState';
import { useNavigate } from 'react-router-dom';

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
      <span>Tienda Online</span>
      <div>
        {token ? (
          <>
            <span>
              <Link to='/'>Home</Link>
            </span>
            <span onClick={logoutUser}>
              <Link to='/'>Logout</Link>
            </span>
            <span>
              <Link to='/profile'>Profile</Link>
            </span>
            <span>
              <Link to='/products'>Products</Link>
            </span>
          </>
        ) : (
          <>
            <span>
              <Link to='/'>Home</Link>
            </span>
            <span>
              <Link to='/login'>Login</Link>
            </span>
            <span>
              <Link to='/products'>Products</Link>
            </span>
          </>
        )}
      </div>
    </nav>
  );
}
export default Header;
