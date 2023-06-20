import React from 'react'
import './projectCard.css'

function ProjectCard({data}) {
  return (
    <div className='projectCard'>
      <div className="leftContent">
          <img src={data.image} alt={data.name} />
      </div>
      <div className="rightContent ">
        <div>
        <div className="topContent">
         <div>
         <h1 className='projectName'>{data.name}</h1>
         <p className='description'>{data.description}</p>
         </div>
        </div>
         

         <div className='technologyContainer'>
             {
              data.technologies.map((item, i) => {

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
    </div>
  )
}

export default ProjectCard
