import React, { Component } from 'react'
import { Image } from 'react-bootstrap'

class App extends Component {

  constructor () {
    super()
    this.state = {
      name: '',
      location: '',
      imageURL: '',
      bio: ''
    }
  }
  componentDidMount () {
    window.fetch('https://api.github.com/users/bdog72').then((response) => {
      return response.json()
    }).then((data) => {
      this.setState({
        name: data.name,
        location: data.location,
        imageURL: data.avatar_url,
        bio: data.bio
      })
    })
  }
  render () {
    return <div>
      <header>
        <h1>{this.state.name}</h1>
        <div className='pro1'>
          <Image src={this.state.imageURL} responsive circle />
        </div>
        <div className='pro2'>
          <p>{this.state.bio}</p>
          <p>I'm a Jr. Front End Engineer in {this.state.location}</p>
        </div>
      </header>
      <section>
        <h2 className='item1'>My Current GitHub chart</h2>
        <div className='item2'>
          <a href='https://github.com/bdog72'>
            <Image src='http://ghchart.rshah.org/bdog72' alt='Brians GitHub chart' responsive />
          </a>
        </div>
        <h2 className='item1'>Follow me on twitter</h2>
        <div className='item3'>
          <a href='https://twitter.com/Bdoggy72'>
            <Image src='http://www.lifemalvasiamurcia.es/images/MB_0026_twitter3.png' responsive />
          </a>
        </div>
        <h2 className='sk1'>Skills</h2>
        <ul className='skills'>
          <li><Image src='https://cdn1.iconfinder.com/data/icons/line-essentials-64/20/3155-128.png' alt='' responsive /></li>
          <li><Image src='https://cdn0.iconfinder.com/data/icons/website-kit-2/512/icon_287-128.png' alt='' responsive /></li>
          <li><Image src='https://cdn0.iconfinder.com/data/icons/party-icons/110/Clown-128.png' responsive /></li>
          <li><Image src='https://cdn4.iconfinder.com/data/icons/scripting-and-programming-languages/512/js-128.png' alt='' responsive /></li>
          <li><Image src='https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-128.png' alt='' responsive /></li>
        </ul>
        <ul className='boot'>
          <li><Image src='https://cdn0.iconfinder.com/data/icons/long-shadow-web-icons/512/boostrap-128.png' responsive /></li>
        </ul>
      </section>
      <h3>813-505-4733</h3>
      <h3>high5bri&#64;hotmail.com</h3>
    </div>
  }
}

export default App
