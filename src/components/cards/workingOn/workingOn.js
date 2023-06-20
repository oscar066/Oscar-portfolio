import React from 'react'
import './workingOn.css'
import { RxExternalLink } from "react-icons/rx"

function WorkingOn({data}) {
    const style = {
        marginBottom: "10px"
    }
  return (
    <div className='workingOn'>
      <img src={data.image} alt="Coming Soon" className='workingOnImg' />
      <div className='workingOnRight'>
      <div className='innerRight'>
        <span><h1 className='year'>{data.year}</h1></span>
        <span className='workingOnLink'><RxExternalLink  style={style}/></span>
      </div>
       <span><p className='workingOnDescription'>{data.description}</p></span>
      </div>
    </div>
  )
}

export default WorkingOn
