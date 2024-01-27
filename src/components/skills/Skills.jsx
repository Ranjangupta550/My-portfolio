import { useRef } from "react";
import "./skills.scss";
import { motion,useInView } from "framer-motion";
const variants = {
  initial: {
    x: -500,
    y:100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y:0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  
};
const Skills = () => {

  const ref=useRef()
  const isInView=useInView(ref,{margin:"-100px"})
  return (
    <motion.div className="skills" 
    variants={variants}
     initial="initial" 
     ref={ref}
      animate={isInView &&"animate"}>
      <motion.div className="textContainer" variants={variants} >
        <p>
          C makes it easy to shoot yourself in the foot;<br />
          C++ makes it harder, but when you do, it blows away your whole leg.
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer"variants={variants} >
        <div className="title" variants={variants} >
          <img src="/code png.png" alt="code" />
          <h1>
            <motion.b whileHover={{color:"orange"}}>Code </motion.b>Daily
          </h1>
        </div>
        <div className="title" variants={variants} >
          <h1>
            <motion.b whileHover={{color:"orange"}}>To Built</motion.b> Your Skills
          </h1>
          <button>WHAT I DO!</button>
        </div>
      </motion.div>
      <motion.div className="skillContainer" variants={variants} >
        <motion.div className="box" whileHover={{background:"lightgray",color:"black"}} variants={variants} >
          <h2>C language</h2>
          <img src="/c.png" alt="C languagee" />
        </motion.div>
        <motion.div className="box" whileHover={{background:"lightgray",color:"black"}} variants={variants} >
          <h2>C++ language</h2>
          <img src="/c++.png" alt="C++" />
        </motion.div>
        <motion.div className="box" whileHover={{background:"lightgray",color:"black"}} variants={variants} >
          <h2>Java language</h2>
          <img src="/java.png" alt="java" />
        </motion.div>
        <motion.div className="box" whileHover={{background:"lightgray",color:"black"}}variants={variants} >
          <h2>Web development</h2>
          <img src="/web development-64.png" alt="web development" />
        </motion.div>
      </motion.div>
      {/* <div className="textContainer"></div> */}
    </motion.div>
  );
};

export default Skills;
