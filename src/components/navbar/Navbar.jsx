import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { animate, motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar/>
      <div className="wapper">
        <motion.span initial={{opacity:0,scale:0 }} animate={{opacity:1,scale:1 }} transition={{duration:1}}>Ranjan Gupta</motion.span>
        <div className="social">
       
          <a href="#"><img src="/instagram.png"alt="" /></a>
          <a href=""><img src="/facebook.png" alt="Ranjan" /></a>
          <a href=""><img src="/linkedin.png" alt="Ranjan" /></a>
          <a href=""><img src="/github.png" alt="Ranjan" /></a>
          <a href=""><img src="/twitter.png" alt="Ranjan" /></a>
        
         
        </div>
      </div>
    </div>
  )
}
export default Navbar
