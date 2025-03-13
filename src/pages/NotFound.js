import { Link } from "react-router-dom";
import notFound from "../assets/notFound.png"

const NotFound = () => {
  return (
    <div className="container text-center mt-5">
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <img src={notFound} alt="Not Found" className="img-fluid my-4" style={{ maxWidth: "25%", height: "auto" }} /><br></br>
      <Link to="/" className="btn btn-primary mt-3" style={{margin: "15px"}}>Go to Home</Link>
    </div>
  );
};

export default NotFound;