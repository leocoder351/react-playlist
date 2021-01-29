import React from 'react';
import './style.css';

class FormItem extends React.Component {
  constructor(props) {
    super(props);
    const { help = '' } = props;
    this.state = {
      help
    };
  }

  setHelp() {
    console.log(666)
    this.setState({help: 'aaaaaaa'});
  }

  cloneChildren(children) {
    console.log(555)
    console.log(children)
    return React.cloneElement(children, {setHelp: this.setHelp});
  }

  render() {
    const { label, children, validateStatus, name } = this.props;
    const { help } = this.state;

    return (
      <div className="my-form-item">
        <div>{label}</div>
        <div className={validateStatus === 'error' ? 'my-has-error' : ''}>{this.cloneChildren(children)}</div>
        {help && <div className="my-help">{help}</div>}
      </div>
    );
  }
}

export default FormItem;
