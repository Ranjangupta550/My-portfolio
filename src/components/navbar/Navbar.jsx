import "./navbar.scss";


const Navbar = () => {
  return (
    <div className="navbar">
      {/*sidebar*/}
      <div className="wapper">
        <span>Ranjan Gupta</span>
        <div className="social">
       
          <a href="#"><img src= "/facebook.png"alt="" /></a>
          <a href=""><img src="/dribbble.png" alt="" /></a>
        
         
        </div>
      </div>
    </div>
  )
}
export default Navbar
