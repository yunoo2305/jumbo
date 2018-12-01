import React, { Component } from 'react'
import Header from '../components/JumboHeader'
import Footer from '../includes/Footer'

export default class SimpleLayout extends Component {
  constructor () {
    super()
  }

  render () {
    return (
      <div>
        <Header/>
        {this.props.children}
        <Footer/>
      </div>
    )
  }
}

