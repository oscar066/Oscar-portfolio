import React from "react";
import { Link } from "react-router-dom";
import { allProjects } from "../../data/allProjectsData";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { BiArrowBack } from "react-icons/bi";
import "./allProjects.css";

function AllProjects() {

  return (
    <div className="allProjectsArea">
        <Link className="back" to='/'>
            <span className="backIcon"><BiArrowBack size={15} /></span>
            <span><p>chrispine oduor</p></span>
        </Link>
        <h1 className="allProjectsHeader">all projects</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">year</th>
            <th scope="col">project</th>
            <th scope="col">made at</th>
            <th scope="col">built with</th>
            <th scope="col">link</th>
          </tr>
        </thead>
        {allProjects.map((item) => {
          return (
            <tbody key={item.id}>
              <tr>
                <td scope="row" className="year">{item.year}</td>
                <td className="project">{item.name}</td>
                <td className="madeAt">{item.institution}</td>
                <td>
                  <div className="technologyContainer">
                    {item.technologies.map((item, i) => {
                      return (
                        <div className="technology" key={i}>
                          {item}
                        </div>
                      );
                    })}
                  </div>
                </td>
                <td className="allLinks">
                  <span className="allProjectLinks">
                    <span className="innerProjectLinks">
                      <Link to={item.webLink}>
                        <FiExternalLink  size={18}/>
                      </Link>
                    </span>
                    <span className="innerProjectLinks">
                      <Link to={item.githubLink}>
                        <FiGithub  size={18}/>
                      </Link>
                    </span>
                  </span>
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
}

export default AllProjects;
