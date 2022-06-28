import './Login.scss';
import { useContext, useEffect } from 'react';
import { UserContext } from '../../context/UserContext/UserState';
import { Form, Input, Button } from 'antd';
import { useNavigate } from 'react-router-dom';

function Login() {
  const { login } = useContext(UserContext);

  const navigate = useNavigate();

  const onFinish = values => {
    login(values);
  };
  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };
  useEffect(() => {
    setTimeout(() => {
      const foundToken = JSON.parse(localStorage.getItem('token'));
      if (foundToken) {
        navigate('/profile');
      }
    }, 2000);
  }, [login]);
  return (
    <div className='formulario-cont'>
      <Form
        className='form-register'
        name='basic'
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete='off'
      >
        <h2 className='login-title'>Login Form</h2>

        <Form.Item
          className='label'
          label='Email'
          name='email'
          rules={[{ required: true, message: 'Please input your email!' }]}
        >
          <Input className='input' />
        </Form.Item>
        <Form.Item
          className='label'
          label='Password'
          name='password'
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type='primary' htmlType='submit' className='btn-login-form'>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default Login;
