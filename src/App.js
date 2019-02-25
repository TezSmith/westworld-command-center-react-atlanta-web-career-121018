import React, { Component } from 'react';
import './stylesheets/App.css'
import { Segment } from 'semantic-ui-react'
import WestworldMap from './components/WestworldMap'
import Headquarters from './components/Headquarters'


class App extends Component {

   state = {
     areas: [],
     hosts: [],
     selectedHost: [],
   }

   componentDidMount() {
     fetch(`http://localhost:4000/areas`)
     .then(res => res.json())
     .then(res => {
       this.setState({
         areas: res
       })
     })

     fetch(`http://localhost:4000/hosts`)
     .then(res => res.json())
     .then(res => {
       this.setState({
         hosts: res
       })
     })
   }

   addHost = (host) => {
     console.log("Here's how you're gonna add a host to the map")
   }

  render(){

    return (
      <Segment id='app'>
        <WestworldMap areas={this.state.areas} hosts={this.state.selectedHost}/>
        <Headquarters hosts={this.state.hosts} addHost={this.addHost}/>
      </Segment>
    )
  }
}

export default App;
