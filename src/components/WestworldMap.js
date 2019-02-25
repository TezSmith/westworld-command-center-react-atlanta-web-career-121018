import React from 'react';
import { Segment } from 'semantic-ui-react';
import Area from './Area'

const WestworldMap = (props) => {

  const { areas, hosts } = props

  let makeAreas = () => {
    return areas.map(area => {
      return <Area key={area.id} area={area} hosts={hosts}/>
    })
  }

  return (
    <Segment id="map" >
      {makeAreas()}
    </Segment>
  )
}

export default WestworldMap
