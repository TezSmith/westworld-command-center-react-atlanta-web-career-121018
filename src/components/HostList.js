import React from 'react'
import { Card } from 'semantic-ui-react'
import Host from './Host'

const HostList = (props) => {

const { hosts, selectHost } = props

let makeHostCards = () => {
  return hosts.map(host => {
    return <Host key={host.id} host={host} selectHost={selectHost}/>
  })
}

  return(
    <Card.Group itemsPerRow={6}>
      {makeHostCards()}
    </Card.Group>
  )
}

export default HostList
