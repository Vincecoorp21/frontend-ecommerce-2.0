import { Button, Checkbox, Form, Input } from 'antd';
import { useContext } from 'react';
import { useNavigate } from 'react-router';
import { UserContext } from '../../context/UserContext/UserState';
import './Register.scss';

function Register() {
  const { register, message } = useContext(UserContext);

  const navigate = useNavigate();

  const onFinish = values => {    
    register(values);
    setTimeout(() => {
      navigate('/');
      clearMessage()
    }, 3000);
  };

  const onFinishFailed = errorInfo => {
    console.error('Failed:', errorInfo);
  };

  return (
    <div className='formulario-cont'>
      <Form
        className='form-register'
        name='basic'
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete='off'
      >
        <h2 className='login-title'>Register Form</h2>
        <div className='prueba'>
          <Form.Item
            label='Username'
            name='name'
            rules={[
              {
                required: true,
                message: 'Please input your username!',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label='Email'
            name='email'
            rules={[
              {
                required: true,
                message: 'Please input your email!',
                // pattern: new RegExp('/S+@S+.S+/'),
                message: 'Enter a valid email address!',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label='Password'
            name='password'
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name='remember'
            valuePropName='checked'
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
          <br />
          {message}

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type='primary' htmlType='submit' className='btn-login-form'>
              Submit
            </Button>
          </Form.Item>
        </div>
      </Form>
    </div>
  );
}

export default Register;
