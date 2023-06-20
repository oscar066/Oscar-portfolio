import React from "react";
import { comingSoon } from "../../data/workingOnData";
import WorkingOn from "../cards/workingOn/workingOn";
import "./comingSoon.css";

function ComingSoon() {
  return (
    <div className="comingSoon">
      <div>
        {comingSoon.map((item, i) => {
          return (
            <div key={i} className="comingSoonCard">
              <WorkingOn data={item} />
            </div>
          );
        })}
      </div>

      <p className="about comingSoonAbout">
        Loosely designed in <span>Figma</span> and coded in <span>Visual Studio Code</span> by yours
        truly. Built with <span>React.js</span>, <span>Bootstrap CSS</span> and <span>CSS</span> deployed with <span>Vercel</span>. All
        text is set in the Inter typeface.
      </p>
    </div>
  );
}

export default ComingSoon;
