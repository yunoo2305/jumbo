import React, { Component } from 'react'

export default class PromoWrapper extends Component {
  render () {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}
