import React from 'react';
import { Icon, Input, Button } from 'antd';
import Form from '../Form';

class NormalForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const { validateFields } = this.props.form;
    validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <Form
        onSubmit={this.handleSubmit}
        className="login-form"
        style={{ width: '500px' }}
      >
        <Form.Item label="用户名：">
          {getFieldDecorator('username', {
            initialValue: 'leocoder',
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
            />
          )}
        </Form.Item>
        <Form.Item label="密码：">
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />
          )}
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
        </Form.Item>
      </Form>
    )
  }
}

export default Form.create({ name: 'normal_login' })(NormalForm);
