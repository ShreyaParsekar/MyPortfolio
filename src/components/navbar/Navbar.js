import React from 'react'
import "./navbar.css"
import { motion } from "framer-motion"

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
        <a href="#"><img src="github.png" width="25" height="25" /></a>
        <a href="#"><img src="instagram.png" width="40" height="30"/></a>
        <a href="#"><img src="linkedin.png"  width="25" height="25"/></a>
      </div>
      </div>
    </div>
  )
}

export default Navbar
