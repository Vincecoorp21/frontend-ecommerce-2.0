import React from 'react';
import './Footer.scss';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';
import {
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
  MailOutlined,
} from '@ant-design/icons';

function Footer() {
  const { pathname } = useLocation();
  if (pathname === '/cart' || pathname === '/profile') return null;
  return (
    <div className='footer'>
      <nav className='nav-footer'>
        <Link className='btn-head2' to=''>
          <FacebookOutlined />
        </Link>
        <Link className='btn-head2' to=''>
          <TwitterOutlined />
        </Link>
        <Link className='btn-head2' to=''>
          <InstagramOutlined />
        </Link>
        <Link className='btn-head2' to=''>
          <MailOutlined />
        </Link>
      </nav>
    </div>
  );
}

export default Footer;
