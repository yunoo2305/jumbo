import React, { Component } from 'react'
import JumboHeader from '../components/JumboHeader'
import Footer from '../includes/Footer'

export default class JumboLayout extends Component {
  constructor () {
    super()
  }

  render () {
    return (
      <div>
        <JumboHeader/>
        {this.props.children}
        <Footer/>
      </div>
    )
  }
}

