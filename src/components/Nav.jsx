import { Link } from "react-router";
import { signOut } from "firebase/auth";
import { useAuth } from "../contexts/Auth";
import { auth } from "../../firebase";

export default function NavBar() {
  const {userLoggedIn, role} = useAuth();
  return (
     <header className="header">
        <h1 className="logo">ShopSmart</h1>
        <nav className="nav">
          <Link to={"./"}>Home</Link>
          <Link to={"./shop"}>Shop</Link>
          {userLoggedIn &&(
            <Link to={"./cart"}>Cart</Link>
          )}
          {!userLoggedIn && (
            <>
            <Link to={"./sign-up"}>SignUp</Link>
            <Link to={"./login"}>Login</Link>
            </>
          )}
          { role==='admin' && (
            <Link to={"./admin"}>Admin</Link>
          )}
          {userLoggedIn && (
            <button className="logout-btn" onClick={() => signOut(auth)}>Logout</button>
          )}
          
        </nav>
      </header>
  );
}
