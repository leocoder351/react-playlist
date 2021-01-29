import React, { Component } from 'react';
import Schema from 'async-validator';
import FormItem from './FormItem';
import './style.css';

const createBaseDOM = options => {

  return WrappedComp => {

    let props = { form: {} };
    let store = {};
    let _this = null;

    const getFieldDecorator = (name = '', fieldOptions) => {
      const { initialValue = '', rules = [] } = fieldOptions;
      let fieldObj = store[name] || (store[name] = {});
      fieldObj.value = fieldObj.value === undefined ? initialValue : fieldObj.value;
      fieldObj.rules = rules;

      const onChange = (e) => {
        console.log(_this);
        console.log(_this.props.setHelp);
        fieldObj.value = e.target.value;
        _this.forceUpdate();
      };

      const extendProps = {
        name,
        value: fieldObj.value,
        onChange
      };

      return WrappedComp => {
        console.log(777)
        console.log(WrappedComp)
        return React.cloneElement(WrappedComp, {...extendProps});
      };
    };

    const validateFields = (callback) => {
      const genDescriptor = store => {
        const descriptor = {};
        Object.keys(store).forEach(key => {
          let ruleDescriptor = {};
          store[key].rules.forEach(rule => ruleDescriptor = {...ruleDescriptor, ...rule})
          descriptor[key] = {
            ...ruleDescriptor
          };
        });
        return descriptor;
      };

      const genFieldsValue = store => {
        const fieldsValue = {};
        Object.keys(store).forEach(key => {
          fieldsValue[key] = store[key].value;
        });
        return fieldsValue;
      };

      const descriptor = genDescriptor(store);
      const fieldsValue = genFieldsValue(store);

      const validator = new Schema(descriptor);
      validator.validate(fieldsValue, (err, fields) => {
        console.log(3333)
        console.log(err)
        console.log(fields)
      });

      console.log(_this)
      console.log(_this._reactInternalFiber.return.return.stateNode)
    };
  
    props.form.getFieldDecorator = getFieldDecorator;
    props.form.validateFields = validateFields;

    return class extends Component {
      constructor(props) {
        super(props);
        _this = this;
      }

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