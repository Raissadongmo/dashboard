import React from "react";
import { useState } from "react";
import { AiOutlineLeft } from "react-icons/ai";
import { SiHomeassistant } from "react-icons/si";
import { BsHandThumbsUp } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { DiGoogleCloudPlatform } from "react-icons/di";
import { BiGitRepoForked } from "react-icons/bi";
import { FiFileText } from "react-icons/fi";
import { BiLinkExternal } from "react-icons/bi";
import { BsGearFill } from "react-icons/bs";

const Sidenavbar = () => {
  const [currentLink, setCurrentLink] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  return (
    <section className={`${isOpen ? " sidebar sidebar1" : "sidebar sidebar2"}`}>
      <div className="top">
        <div className="brand">{isOpen && <h1>dappr</h1>}</div>
        <img
          src="/outline.png"
          className={isOpen ? "picture " : "picture picture-out"}
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        />
        <div className="link">
          <ul>
            <li
              onClick={() => setCurrentLink(1)}
              className={currentLink === 1 ? "active hidespan" : ""}
            >
              <a href="#">
                <SiHomeassistant />
              </a>
              {isOpen && <span> Home</span>}
            </li>
            <li
              onClick={() => setCurrentLink(2)}
              className={currentLink === 2 ? "active" : ""}
            >
              <a href="#">
                <BsHandThumbsUp />
              </a>
              {isOpen && <span> Like</span>}
            </li>
            <li
              onClick={() => setCurrentLink(3)}
              className={currentLink === 3 ? "active" : ""}
            >
              <a href="#">
                <FiMail />
                {isOpen && <span> Mail</span>}
              </a>
            </li>
            <li
              onClick={() => setCurrentLink(4)}
              className={currentLink === 4 ? "active" : ""}
            >
              <a href="#">
                <DiGoogleCloudPlatform />
                {isOpen && <span> Cloud</span>}
              </a>
            </li>
            <li
              onClick={() => setCurrentLink(5)}
              className={currentLink === 5 ? "active" : ""}
            >
              <a href="#">
                <BiGitRepoForked />
                {isOpen && <span> Branchs</span>}
              </a>
            </li>
            <li
              onClick={() => setCurrentLink(6)}
              className={currentLink === 6 ? "active" : ""}
            >
              <a href="#">
                <FiFileText />
                {isOpen && <span> Text</span>}
              </a>
            </li>
            <li
              onClick={() => setCurrentLink(7)}
              className={currentLink === 7 ? "active" : ""}
            >
              <a href="#">
                <BiLinkExternal />
                {isOpen && <span> LogOut</span>}
              </a>
            </li>
          </ul>
        </div>
        <div className="foot">
          <li
            onClick={() => setCurrentLink(8)}
            className={currentLink === 8 ? "active" : ""}
          >
            <a href="#">
              <BsGearFill />
              {isOpen && <span> Settings</span>}
            </a>
          </li>
        </div>
      </div>
    </section>
  );
};

export default Sidenavbar;
