import '../stylesheets/HostInfo.css'
import React, { Component } from 'react'
import { Radio, Icon, Card, Grid, Image, Dropdown, Divider } from 'semantic-ui-react'


class HostInfo extends Component {

  state = {

    options: [{key: "high_plains", text: "High Plains", value: "high_plains"}, {key: "lowlands", text: "Lowlands", value: "lowlands"}, {key: "under_construction", text: "Under Construction", value: "under_construction"}, {key: "pariah", text: "Pariah", value: "pariah"}, {key: "python_pass", text: "Python Pass", value: "python_pass"}, {key: "badlands", text: "Badlands", value: "badlands"}],

    host: this.props.host,

    active: this.props.host.active,

    area: ''


  }



  handleChange = (e, {value}) => {
    
  }

  toggle = () => {
    this.setState({
      active: !this.state.active
    })
  }


  render(){

    const { host } = this.props
    // console.log("Host Activity", this.state.active)


    return (
      // <div></div>
      <Grid>
        <Grid.Column width={6}>
          <Image
            src={host.imageUrl}
            floated='left'
            size='small'
            className="hostImg"
          />
        </Grid.Column>
        <Grid.Column width={10}>
          <Card>
            <Card.Content>
              <Card.Header>
                {host.firstName} | { host.gender === 'Male' ? <Icon name='man' /> : <Icon name='woman' />}
              </Card.Header>
              <Card.Meta>
                <Radio
                  onChange={this.toggle}
                  label={this.state.active === true ?
                  "Active" : "Decomissioned" }
                  checked={this.state.active}
                  slider
                />
              </Card.Meta>

              <Divider />
              Current Area:
              <Dropdown
                onChange={this.handleChange}
                value={this.state.value}
                options={this.state.options}
                selection
              />
            </Card.Content>
          </Card>
        </Grid.Column>
      </Grid>
    )
  }
}

export default HostInfo
