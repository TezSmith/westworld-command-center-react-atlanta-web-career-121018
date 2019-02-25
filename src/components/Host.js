import React from 'react';
import '../stylesheets/Host.css'
import { Card } from 'semantic-ui-react'

const Host = (props) => {

  const { host, selectHost } = props

  return(
    <Card
      className="host selected"
      onClick={() => selectHost(host)}
      image={host.imageUrl}
      raised
    />
  )
}

export default Host
