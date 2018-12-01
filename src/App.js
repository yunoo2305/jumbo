import React, { Component } from 'react'
import { Route } from 'react-router'
import HomeContainer from './pages/home/HomeContainer'

class App extends Component {
  render () {
    return (
      <div className={'App'}>
        <Route exact path="/" component={HomeContainer}/>
      </div>
    )
  }
}

export default App
