import React, { Component } from 'react'
import Navbar from './Companents/Navbar.jsx'
import Header from './Companents/Header.jsx'
import Section1 from './Companents/Section1.jsx'
import Section2 from './Companents/Section2.jsx'

export default class App extends Component {
  render() {
    return (
      
      <div>
        <Navbar/>
        <Header/>
        <Section1/>
        <Section2/>
      </div>
    )
  }
}

