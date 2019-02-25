import React from 'react'
import { Segment, Image } from 'semantic-ui-react'
import * as Images from '../services/Images'
import HostInfo from './HostInfo'


const Details = (props) => {

 const { host, addHost } = props

 const renderHost = () => {
   return Object.keys(host).length === 0 ? <Image size='medium' src={Images.westworldLogo}/> : <HostInfo host={host} addHost={addHost}/>
 }

  return(
    <Segment id="details" className="HQComps">
      {renderHost()}
    </Segment>
  )
}

export default Details
