import React from 'react';
import './style.css';

const FormItem = props => {
  const { label, children, validateStatus, help } = props;

  console.log(111)
  console.log(children)

  return (
    <div className="my-form-item">
      <div>{label}</div>
      <div className={validateStatus === 'error' ? 'my-has-error' : ''}>{children}</div>
      {help && <div className="my-help">{help}</div>}
    </div>
  );
};

export default FormItem;
