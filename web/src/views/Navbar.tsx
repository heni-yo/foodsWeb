import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div style={{display:'flex',width:'100%',justifyContent:'space-between'}}>
      <Link to={"/"}>Home</Link>
      <Link to={"/login"}>Login</Link>
      <Link to={"/register"}>Register</Link>
    </div>
  );
};

export default Navbar;
