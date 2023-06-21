import React from 'react'
import './workingOn.css'
import { RxExternalLink } from "react-icons/rx"
import { Tooltip as ReactTooltip }  from "react-tooltip";
import 'react-tooltip/dist/react-tooltip.css'

function WorkingOn({data}) {
    const style = {
        marginBottom: "10px"
    }
  return (
    <div className='workingOn'data-tooltip-id="my-tooltip" data-tooltip-content="COMING SOON">
      <img src={data.image} alt="Coming Soon" className='workingOnImg' />
      <div className='workingOnRight'>
      <div className='innerRight'>
        <span><h1 className='year'>{data.year}</h1></span>
        <span className='workingOnLink'><RxExternalLink  style={style}/></span>
      </div>
       <span><p className='workingOnDescription'>{data.description}</p></span>
      </div>

      <ReactTooltip id="my-tooltip" />

    </div>
  )
}

export default WorkingOn
