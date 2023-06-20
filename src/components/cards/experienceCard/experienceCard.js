import React from 'react'
import './experienceCard.css'
import { BsArrowUpRight } from "react-icons/bs"

function ExperienceCard({data}) {
  return (
    <div className='experienceCard'>
        <div className='leftContent'>
          <div className='duration'>
            <span>{data.from}</span>
            <span>
                <div className='dash'></div>
            </span>
            <span>{data.to}</span>
          </div>
        </div>
        <div className='rightContent'>
            <div className='topContent'>
            <span><h1 className='pu'>{data.purpose}</h1></span>
            <span className='dot'>.</span>
            <span><h2>{data.institution}</h2></span>
            <span className='linkTo'>
                <BsArrowUpRight size={13}/>
            </span>
            </div>
            <p className='description'>{data.description}</p>
            <div className='technologyContainer'>
                {
                    data.technologies.map((item, i )=> {

                        return (

                        <div className='technology' key={i}>
                            {item}
                        </div>
                        
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default ExperienceCard
