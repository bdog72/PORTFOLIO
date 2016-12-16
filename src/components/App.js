import React, { Component } from 'react'

import styles from './styles.css'

class App extends Component {

  constructor () {
    super()
    this.state = {
      user: '',
      Data: ''
    }
  }
  componentDidMount () {
    fetch()
  }
  render () {
    return <div>

      <header>
        <img src='https://avatars1.githubusercontent.com/u/20337443?v=3&u=a0d73d2c6321ca41c257804706062910c38d2c56&s=400' height='225' width='225' className='profile' />
        <div>
          <h1>Hi, I'm Brian Bycynski</h1>
          <p>I'm a Jr. Front End Engineer in St. Petersburg, FL</p>
        </div>
      </header>
      <section>
        <img src='https://raw.githubusercontent.com/bdog72/portfolio4/master/public/images/one-list.png' width='250' height='200' />
        <img src='https://raw.githubusercontent.com/bdog72/portfolio4/master/public/images/make-it-rain.png' width='250' height='200' />
        <img src='https://raw.githubusercontent.com/bdog72/portfolio4/master/public/images/bomb-sniffer.png' width='250' height='200' />
      </section>

      <img src='https://raw.githubusercontent.com/bdog72/portfolio4/master/public/images/react.png' width='1424' height='200' />

    </div>
  }
}

export default App
