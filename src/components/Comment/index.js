import React from 'react'
import CommentList from './CommentList'

export default class CommentListContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      loading: true,
      error: null,
      value: null
    }
  }

  componentDidMount() {
    this.props.promise.then(response => response.json())
      .then(value => this.setState({loading: falsem value}))
      .catch(error => this.setState({loading: false, error}))
  }

  render() {
    if (this.state.loading) {
      return <span>Loading...</span>
    } else if (this.state.error !== null) {
      return <span>Error: {this.state.error.message}</span>
    } else {
      const list = this.state.value.CommentList
      return <CommentList comments={list} />
    }
  }
}