import React from "react";
import { experienceData } from "../../data/experienceData";
import ExperienceCard from "../cards/experienceCard/experienceCard";
import { BsArrowRight } from "react-icons/bs";
import "./experience.css";

function Experience() {
  return (
    <div>
      <div className="experience">
        {experienceData.map((item) => {
          return (
            <div key={item.id}>
              <ExperienceCard data={item} />
            </div>
          );
        })}
      </div>
      <div className="cvLink">
        <span>
          <a
            href="https://docs.google.com/document/d/1_vqj0w2r_ltg5JCMb5WMdfhPueFBRwiLcouqsIa7Kzo/edit?usp=share_link"
            target="_blank"
          >
            View Full Résumé
          </a>
        </span>
        <span className="linkFollow">
          <BsArrowRight />
        </span>
      </div>
    </div>
  );
}

export default Experience;
