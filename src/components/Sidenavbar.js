import React from "react";
import { useState } from "react";
import { AiOutlineLeft } from "react-icons/ai";
import { MdAccountBalance } from "react-icons/md";
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
    <div className={`${isOpen ? " sidebar sidebar1" : "sidebar sidebar2"}`}>
      <div className="top">
        <div className="brand">{isOpen && <h1>dappr</h1>}</div>
        <img
          src="/outline.png"
          className={isOpen ? "line " : "line line-out"}
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
                {isOpen && <span> Dashboard</span>}
              </a>
            </li>
            <li
              onClick={() => setCurrentLink(2)}
              className={currentLink === 2 ? "active" : ""}
            >
              <a href="#">
                <BsHandThumbsUp />
                {isOpen && <span> Like</span>}
              </a>
            </li>
            <li
              onClick={() => setCurrentLink(3)}
              className={currentLink === 3 ? "active" : ""}
            >
              <a href="#">
                <MdAccountBalance />
                {isOpen && <span> Bank</span>}
              </a>
            </li>
            <li
              onClick={() => setCurrentLink(4)}
              className={currentLink === 4 ? "active" : ""}
            >
              <a href="#">
                <FiMail />
                {isOpen && <span> Mail</span>}
              </a>
            </li>
            <li
              onClick={() => setCurrentLink(5)}
              className={currentLink === 5 ? "active" : ""}
            >
              <a href="#">
                <DiGoogleCloudPlatform />
                {isOpen && <span> Cloud</span>}
              </a>
            </li>
            <li
              onClick={() => setCurrentLink(6)}
              className={currentLink === 6 ? "active" : ""}
            >
              <a href="#">
                <BiGitRepoForked />
                {isOpen && <span> Branchs</span>}
              </a>
            </li>
            <li
              onClick={() => setCurrentLink(7)}
              className={currentLink === 7 ? "active" : ""}
            >
              <a href="#">
                <FiFileText />
                {isOpen && <span> Text</span>}
              </a>
            </li>
            <li
              onClick={() => setCurrentLink(8)}
              className={currentLink === 8 ? "active" : ""}
            >
              <a href="#">
                <BiLinkExternal />
                {isOpen && <span> LogOut</span>}
              </a>
            </li>
          </ul>
        </div>
        <div className="foot">
          <ul>
            <li>
              <a
                href="#"
                onClick={() => setCurrentLink(9)}
                className={currentLink === 9 ? "active" : ""}
              >
                <BsGearFill />
                {isOpen && <span> Settings</span>}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidenavbar;
