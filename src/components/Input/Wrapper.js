import React, { Component } from 'react';

export default function Wrapper(WrapperComponent) {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        name: ''
      };
      this.onNameChange = this.onNameChange.bind(this);
    }

    onNameChange(event) {
      console.log(111)
      console.log(event.target.value)
      this.setState({
        name: event.target.value
      })
    }

    render() {
      const newProps = {
        name: {
          value: this.state.name,
          onChange: this.onNameChange
        }
      }

      return <WrapperComponent {...this.props} {...newProps} />
    }
  }
}