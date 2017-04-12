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
          <Image src={this.state.imageURL} responsive />
        </div>
        <div className='pro2'>
          <p>{this.state.bio}</p>
          <p>I'm a Jr. Front End Engineer in {this.state.location}</p>
        </div>
      </header>
      <section>
        <div>
          <h2 className='item1'>Click on my chart to visit my GitHub page</h2>
        </div>
        <div className='item2'>
          <a href='https://github.com/bdog72'>
            <Image src='http://ghchart.rshah.org/bdog72' alt='Brians GitHub chart' responsive />
          </a>
        </div>
      </section>
    </div>
  }
}

export default App
{ /* <header>
  <image src={this.state.imageURL} height='225' width='225' className='profile' />
  <Image src={this.state.imageURL} responsive />
  <div>
  <h1>Hi, I'm {this.state.name}</h1>
  <p>{this.state.bio}</p>
  <p>I'm a Jr. Front End Engineer in {this.state.location}</p>
</div></header>
<aside className='sidebar-right' />
<article />
<aside className='sidebar-left' />
<footer />
<header>

</header>
<section /> */ }

{ /* <img src='https://raw.githubusercontent.com/bdog72/portfolio4/master/public/images/one-list.png' width='250' height='200' />
<img src='https://raw.githubusercontent.com/bdog72/portfolio4/master/public/images/make-it-rain.png' width='250' height='200' />
<img src='https://raw.githubusercontent.com/bdog72/portfolio4/master/public/images/bomb-sniffer.png' width='250' height='200' /> */ }
