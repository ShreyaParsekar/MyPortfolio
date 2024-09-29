import React from 'react'
import "./navbar.css"
import { motion } from "framer-motion"
import githubImage from './github.png';
import instagramImage from './instagram.png';
import linkedinImage from './linkedin.png';

function Navbar() {
  return (
    <div className="navbar">
      {/* sidebar */}
      <div className="wrapper">
      <motion.span
      initial={{opacity: 0, scale: 0.5}}
      animate={{opacity: 1, scale: 1}}
      transition={{duration:0.5}}
      >
        SHREYA PARSEKAR
        </motion.span>
      <div className="socialLinks">
        <a href="https://github.com/ShreyaParsekar" target="_blank"><img src={githubImage} width="25" height="25" alt="" /></a>
        <a href="#"><img src={instagramImage} width="55" height="40"/></a>
        <a href="#"><img src={linkedinImage}  width="25" height="25"/></a>
      </div>
      </div>
    </div>
  )
}
  
export default Navbar
