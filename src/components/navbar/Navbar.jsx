import React from "react";
import Sidebar from "../sidebar/Sidebar";
import { motion } from "framer-motion";
import "./navbar.scss";

const Navbar = () => {
  const menuItems = [
    { name: "Homepage", link: "/" },
    { name: "Services", link: "/#Services" },
    { name: "Portfolio", link: "/#Portfolio" },
    { name: "Contact", link: "/#Contact" },
    { name: "About Me", link: "/#About Me" },
  ];

  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar />
      <div className="wrapper">
        <div className="menuClass">
          {menuItems.map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {item.name}
            </motion.a>
          ))}
        </div>
        <div className="social">
          <a href="https://www.linkedin.com/in/bipin-gupta-35170a1bb/" target="blank">
            <img src="/linkedin.png" alt="" />
          </a>
          <a href="https://www.instagram.com/bipiinn_/" target="blank">
            <img src="/instagram.png" alt="" />
          </a>
          <a href="https://github.com/bipin-gupta" target="blank">
            <img src="/github.png" alt="" />
          </a>
          <a href="https://www.youtube.com/@bipin-gupta" target="blank">
            <img src="/youtube.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
