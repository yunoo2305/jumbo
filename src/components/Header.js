import React, { Component } from 'react'
import { NavBar } from '../includes/NavBar'

export default class Header extends Component {
  render () {
    return (
      <div id="header-wrapper">
        <div id="header" class="container">
          <h1 id="logo"><a href="index.html">Telephasic</a></h1>
          <NavBar/>
        </div>
        {this.props.children}
      </div>
    )
  }
}
