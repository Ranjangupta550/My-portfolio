import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { animate, motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar/>
      <div className="wapper">
        <motion.span className="Name" initial={{opacity:0,scale:0 }} animate={{opacity:1,scale:1 }} transition={{duration:1}}>Ranjan Gupta</motion.span>
        <div className="social">
       
          <a href="https://www.instagram.com/dranjan2104?igsh=c2NjZmZtdG14M25s"><img src="/instagram.png"alt="instagram" /></a>
          <a href="https://www.facebook.com/ranjan143dd?mibextid=ZbWKwL"><img src="/facebook.png" alt="facebook" /></a>
          <a href="https://www.linkedin.com/in/ranjan-gupta-1a1b13250/"><img src="/linkedin.png" alt="linkedin" /></a>
          <a href="https://github.com/Ranjangupta550"><img src="/github.png" alt="github" /></a>
          <a href="https://www.linkedin.com/in/ranjan-gupta-1a1b13250?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><img src="/twitter.png" alt="github" /></a>
        
         
        </div>
      </div>
    </div>
  )
}
export default Navbar
