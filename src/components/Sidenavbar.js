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
    <section className={`${isOpen ? "sidebar1" : "sidebar2"}`}>
      <div className="top">
        <div className="brand">
          <h1>dappr</h1>
        </div>
        <img
          src="/outline.png"
          className="picture"
          onClick={() => {
            setIsOpen(!isOpen)`"rotate-180"`;
          }}
        />
        <div className="toggle"></div>
        <div className="link">
          <ul>
            <li
              onClick={() => setCurrentLink(1)}
              className={currentLink === 1 ? "active" : ""}
            >
              <a href="#">
                <SiHomeassistant />
                <span> Home</span>
              </a>
            </li>
            <li
              onClick={() => setCurrentLink(2)}
              className={currentLink === 2 ? "active" : ""}
            >
              <a href="#">
                <BsHandThumbsUp />
                <span> Like</span>
              </a>
            </li>
            <li
              onClick={() => setCurrentLink(3)}
              className={currentLink === 3 ? "active" : ""}
            >
              <a href="#">
                <FiMail />
                <span> Mail</span>
              </a>
            </li>
            <li
              onClick={() => setCurrentLink(4)}
              className={currentLink === 4 ? "active" : ""}
            >
              <a href="#">
                <DiGoogleCloudPlatform />
                <span> Cloud</span>
              </a>
            </li>
            <li
              onClick={() => setCurrentLink(5)}
              className={currentLink === 5 ? "active" : ""}
            >
              <a href="#">
                <BiGitRepoForked />
                <span> Branchs</span>
              </a>
            </li>
            <li
              onClick={() => setCurrentLink(6)}
              className={currentLink === 6 ? "active" : ""}
            >
              <a href="#">
                <FiFileText />
                <span> Text</span>
              </a>
            </li>
            <li
              onClick={() => setCurrentLink(7)}
              className={currentLink === 7 ? "active" : ""}
            >
              <a href="#">
                <BiLinkExternal />
                <span> LogOut</span>
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
              <span> Settings</span>
            </a>
          </li>
        </div>
      </div>
    </section>
  );
};

export default Sidenavbar;
