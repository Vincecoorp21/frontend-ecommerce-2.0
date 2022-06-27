import React from 'react';
import './Footer.scss';
import { Link } from 'react-router-dom';
import {
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
  MailOutlined,
} from '@ant-design/icons';

function Footer() {
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
