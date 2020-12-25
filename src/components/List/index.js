import React from 'react'

class List extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      items: ['foo', 'bar']
    }
  }

  handleClick = () => {
    const items = this.state.items.slice()
    items.unshift('baz')
    this.setState({
      items
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>添加</button>
        <ul>
          {this.state.items.map(item => <li>{item}</li>)}
        </ul>
      </div>
    )
  }
}

export default List