import React from 'react';
import { Form, Icon, Input, Button } from 'antd';
import FormItem from '../Form/FormItem';

const NormalForm = (props) => {
  const { getFieldDecorator, validateFields } = props.form;

  const handleSubmit = (e) => {
    e.preventDefault();
    validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  return (
    <Form
      onSubmit={handleSubmit}
      className="login-form"
      style={{ width: '500px' }}
    >
      <FormItem label="用户名：" validateStatus="error" help="请输入用户名">
        <Input
          prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
          placeholder="Username"
        />
      </FormItem>
      <Form.Item label="密码：" validateStatus="error" help="请输入密码">
        <Input
          prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Form.create({ name: 'normal_login' })(NormalForm);
