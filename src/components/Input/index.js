import React, { Component } from 'react';
import Wrapper from './Wrapper'

@Wrapper
class Input extends Component {
  render() {
    return <input name="name" {...this.props.name} />
  }
}

export default Input