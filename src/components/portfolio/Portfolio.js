import React, { useRef } from 'react'
import "./portfolio.css"
import { motion, useScroll, useSpring, useTransform} from "framer-motion"
import NewsPulse from './newspulse.png';
import InoteMaker from './inotemaker.png';
import AmazonClone from './amazonclone.png';

const items = [
    {
        id:1,
        title:"NewsPulse",
        img: NewsPulse,
        github: "https://github.com/ShreyaParsekar/NewsPulse_React-App",
        desc:"Developed a React-based web application utilizing the News API to fetch and display real-time news articles across various categories. Implemented dynamic routing and responsive UI with error handling."
    },
    {
        id:2,
        title:"iNoteMaker",
        img: InoteMaker,
        github: "https://github.com/ShreyaParsekar/iNoteMakerApp",
        desc:"Developed a note-taking application using ReactJS, Express.js and MongoDB, featuring user authentication and real-time data synchronization. Implemented JWT for secure API endpoints, ensuring data privacy and integrity."
    },
    {
        id:3,
        title:"Amazon Clone",
        img: AmazonClone,
        github: "https://shreyaparsekar.github.io/Amazon-clone/",
        desc:"Cloned and customized the UI of the Amazon homepage using HTML, CSS."
    }
]
const Single = ({item}) => {
  const ref= useRef();
  const {scrollYProgress} = useScroll({target:ref, offset: ["start start", "end start"]})
  const y =useTransform(scrollYProgress, [0,1],["0%", "-100%"]);
  return (
    <section ref={ref}>
      <div className="container">
        <div className="wrapper2">
        <img src={item.img} alt=""/>
        <motion.div className="text" transition={{duration:1}} style={{y}}>
          <h2 >{item.title}</h2>
          <p>{item.desc}</p>
          <a href={item.github} target="_blank" rel="noopener noreferrer">
          <button className="button2">Github Link</button>
          </a>
        </motion.div>
        </div>
        
      </div>
    </section>
  )
}
function Portfolio() {

  const ref = useRef()
  const {scrollYProgress} = useScroll({target:ref, offset:["end end", "start start"]})
  const scaleX = useSpring(scrollYProgress,{
    stiffness: 100,
    damping:30,
  })
  return (
    <div className="portfolio"> 
    <div className="progress">
      <h1>Projects</h1>
      <motion.div style={{scaleX}}  className="progressBar"></motion.div>
    </div>
      {items.map(item=>(<Single item={item} key={item.id}/>))}
    </div>
  )
}

export default Portfolio
