import { useRef } from "react";
import "./project.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Travel Managenment System",
    img: "public/TravelSystem.png",
    desc: "Travel managenment system is a desktop based application made in Java laungage.",
  },
  
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
           <a className="button" href="https://www.linkedin.com/posts/ranjan-gupta-1a1b13250_warningabrupdate-travelabrmanagnmentabrsystem-activity-7146918942425493504-3R7g?utm_source=share&utm_medium=member_desktop">
            <p>See more</p>
           </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Project = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="project" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Project;