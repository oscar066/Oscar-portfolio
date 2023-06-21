import React from "react";
import "./landingPage.css";
import {
  AiFillGithub,
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiFillLinkedin,
} from "react-icons/ai";
import About from "../../components/about/about";
import Experience from "../../components/experience/experience";
import Projects from "../../components/projects/projects";
import ComingSoon from "../../components/comingSoon/comingSoon";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div className="landingPage">
      <div className="landingPageLeft">
        <h2 className="test">Landing</h2>
        <div className="innerLPL">
          <div className="introductry">
            <h1 className="name">chrispine oduor</h1>
            <h4 className="accupation">freelance web developer</h4>
            <p className="summary">
              I build accessible, inclusive products and digital experiences for
              the web.
            </p>
          </div>
          <div className="row">
            {/* add col-4 */}
            <div id="list-example" className="list-group">
              <a
                className="list-group-item list-group-item-action"
                href="#list-item-1"
              >
                <span>
                  <div className="arrowBlunt"></div>
                </span>
                <span className="identifiers">about</span>
              </a>
              <a
                className="list-group-item list-group-item-action"
                href="#list-item-2"
              >
                <span>
                  <div className="arrowBlunt"></div>
                </span>
                <span className="identifiers">experience</span>
              </a>
              <a
                className="list-group-item list-group-item-action"
                href="#list-item-3"
              >
                <span>
                  <div className="arrowBlunt"></div>
                </span>
                <span className="identifiers">projects</span>
              </a>
            </div>
          </div>
          <div className="mediaLinks">
            <Link to="https://github.com/Kpine-MO" target="_blank" className="mediaIcon">
              <AiFillGithub size={25} />
            </Link>
            <Link className="mediaIcon">
              <AiOutlineInstagram size={25} />
            </Link>
            <Link  className="mediaIcon">
              <AiOutlineTwitter size={25} />
            </Link>
            <Link to="https://www.linkedin.com/in/chrispine-ochieng-2421ab244?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BBYGOEwuzTtezjt9Mcu1w2w%3D%3D" target="_blank" className="mediaIcon">
              <AiFillLinkedin size={25} />
            </Link>
          </div>
        </div>
      </div>
      <div className="landingPageRight">
        <div className="row">
          {/* add col-8 */}
          <div
            data-bs-spy="scroll"
            data-bs-target="#list-example"
            data-bs-smooth-scroll="true"
            className="scrollspy-example"
            tabIndex="0"
          >
            <div id="list-item-1">
              <About />
            </div>
            <br />
            <br />
            <br />
            <br />
            <div id="list-item-2">
              <Experience />
            </div>
            <br />
            <br />
            <br />
            <br />
            <div id="list-item-3">
              <Projects />
            </div>
            <br />
            <br />
            <br />
            <br />
            <div id="list-item-4">
              <ComingSoon />
            </div>
          </div>
        </div>
        <div className="DrWho">
          <img
            src="https://brittanychiang.com/_next/image?url=%2Fimages%2Ftardis%2Frotate.gif&w=256&q=75"
            alt="timeHole"
          />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
