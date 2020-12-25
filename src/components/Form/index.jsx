import React, { Component } from 'react';
import FormItem from './FormItem';
import './style.css';

const createBaseDOM = options => {

  return WrappedComp => {

    let props = { form: {} };
    let store = {};

    const getFieldDecorator = (name, options) => {
      let fieldObj = store[name] || (store[name] = {});
      fieldObj.value = 'casdsa';

      const onChange = (e) => {
        console.log(333)
        console.log(e)
        console.log(e.target.value)
        console.log(this)
        fieldObj.value = e.target.value;
      };

      const extendProps = {
        value: fieldObj.value,
        onChange
      };

      return WrappedComp => {
        return React.cloneElement(WrappedComp, {...extendProps});
      };
    };

    const validateFields = () => {

    };
  
    props.form.getFieldDecorator = getFieldDecorator;
    props.form.validateFields = validateFields;

    return class extends Component {
      render() {
        return (
          <WrappedComp {...this.props} {...props} />
        )
      }
    }
  }
};

class Form extends Component {
  static Item = FormItem;

  static create = (options = {}) => {
    return createBaseDOM(options);
  };

  render() {
    return (
      <form {...this.props}></form>
    )
  }
}

export default Form;