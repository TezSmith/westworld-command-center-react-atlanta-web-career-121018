import React, { Component } from 'react';
import '../stylesheets/Headquarters.css';
import { Grid } from 'semantic-ui-react';
import ColdStorage from './ColdStorage'
import Details from './Details'
import LogPanel from './LogPanel'


class Headquarters extends Component {

  state = {
    displayHost: {}
  }

  selectHost = (host) => {
    this.setState({
      displayHost: host
    })
  }

  render(){

    const { addHost } = this.props

    return(
      <Grid celled='internally'>
        <Grid.Column width={8}>

        <ColdStorage hosts={this.props.hosts} selectHost={this.selectHost}/>

        </Grid.Column>
        <Grid.Column width={5}>

          <Details host={this.state.displayHost} addHost={addHost}/>

        </Grid.Column>
        <Grid.Column width={3}>

         <LogPanel />

        </Grid.Column>
      </Grid>
    )
  }
}

export default Headquarters;
