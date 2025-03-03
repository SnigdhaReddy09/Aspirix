import "./page.css";
import logo from "../Images/logo.png";
function LandingPage() {
    return (
        <div className="nav">
            <div className="name">
                {/* <img src={logo} alt="" className="logo" /> */}
                <h1>Aspirix</h1>
            </div>
            <div className="pages">
                <a href="">Home</a>
                <a href="">Certificates</a>
                <a href="">Earn Your Degree</a>
                <a href="">Free Courses</a>
                <a href="">Categories</a>
            </div>
            <div>
                <button className="login">Login</button>
            </div>
        </div>
    )
}

export default LandingPage

// https://cdn.corporatefinanceinstitute.com/assets/pros-and-cons-of-e-learning-platform.jpeg