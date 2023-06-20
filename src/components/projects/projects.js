import React from 'react'
import { projectsData } from '../../data/projectsData'
import ProjectCard from '../cards/projectCard/projectCard'
import { BsArrowRight } from "react-icons/bs";
import './project.css'
import { Link } from 'react-router-dom';

function Projects() {
  return (
    <div>
      <div className='projects'>
      {
        projectsData.map((item) => {

            return (
                <div key={item.id} >
                    <ProjectCard data={item}/>
                </div>
            )
        })
      }
    </div>

    <div className="cvLink">
        <span>
          <Link to="allProjects">
            View Full Project Archive
          </Link>
        </span>
        <span className="linkFollow">
          <BsArrowRight />
        </span>
      </div>
    </div>
    
  )
}

export default Projects;
