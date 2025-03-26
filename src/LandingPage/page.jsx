import "./page.css";
import logo from "../Images/logo.png";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import Categories from "../Components/Categories.jsx";
import { BrowserRouter as Router, Routes, Route, useLocation} from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Courses from "../Components/courses.jsx";

function LandingPage() {
    const navigate = useNavigate()
    const location = useLocation();
    useEffect(() => {
        const sectionId = location.pathname.replace("/", "");
        if (sectionId) {
            const section = document.getElementById(sectionId);
            if (section) {
                const navHeight = document.querySelector(".nav")?.offsetHeight || 0;
                const sectionTop = section.getBoundingClientRect().top + window.scrollY - navHeight - 40;

                window.scrollTo({ top: sectionTop, behavior: "smooth" });
            }
        }
    }, [location]);

    const handleClick = () => {
        if (window.confirm("Your message has been sent successfully! We’ll get back to you soon")) {
            navigate("/");
        }
    };

    return (
        <>
            <div className="nav">
                <div className="name">
                    <img src={logo} alt="" className="logo" />
                    <h3>Aspirix</h3>
                </div>
                <div className="pages">
                    <a href="#home">Home</a>
                    <a href="#categories">Categories</a>
                    <a href="#courses">Courses</a>
                    <a href="#about">About</a>
                    <a href="#contact">Contact</a>
                </div>
                <div>
                    <button className="signup" onClick={() => navigate("/signup")}>Sign Up</button>
                    <button className="login" onClick={() => navigate("/login")}>Login</button>
                </div>
            </div>
            <div className="herosection" id="home">
                <div className="content">
                    <h1>Learn, Grow, Succeed - Anytime, Anywhere.</h1>
                    <p>Join thousands of learners and explore high-quality courses, unlocking new opportunities for growth and success.</p>
                    <button className="startbtn" onClick={() => navigate("/login")}>Get Started</button>
                </div>
                <div>
                    <img src="https://media.istockphoto.com/id/1500285927/photo/young-woman-a-university-student-studying-online.jpg?s=612x612&w=0&k=20&c=yvFDnYMNEJ6WEDYrAaOOLXv-Jhtv6ViBRXSzJhL9S_k=" alt="" className="heroimg" />
                </div>
            </div>
            <div className="catcont" id="categories">
                <h2 style={{ marginBottom: "20px" }}>Categories</h2>
                <Categories />
            </div>
            <div className="coursecont" id="courses">
                <h2>Popular Courses</h2>
                <Courses />
            </div>
            <div className="aboutcontainer" id="about">
                <h2>Why Choose Us?</h2>
                <div className="cards">
                    <div className="card" style={{ width: "18rem" }}>
                        <div className="card-body">
                            <h4>Expert Instructors</h4>
                            <p>Learn from industry leaders and top educators.</p>
                        </div>
                    </div>
                    <div className="card" style={{ width: "18rem" }}>
                        <div className="card-body">
                            <h4>Flexible Learning</h4>
                            <p>Study at your own pace, anytime, anywhere.</p>
                        </div>
                    </div>
                    <div className="card" style={{ width: "18rem" }}>
                        <div className="card-body">
                            <h4>Certification</h4>
                            <p>Earn certificates to showcase your skills.</p>
                        </div>
                    </div>
                    <div className="card" style={{ width: "18rem" }}>
                        <div className="card-body">
                            <h4>Mobile Access</h4>
                            <p>Learn on-the-go with a mobile-friendly platform or app.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="contactsec" id="contact">
                <h2>Contact Us</h2>
                <p>If you have any questions, feel free to reach out to us!</p>
                <div className="contactcont">
                    <form className="contact-form">
                        <input type="text" placeholder="Your Name" required />
                        <input type="email" placeholder="Your Email" required />
                        <textarea placeholder="Your Message" required></textarea>
                        <br />
                        <button type="submit" onClick={handleClick}>Send Message</button>
                    </form>
                </div>
            </div>
            <div className="footer">
                <div className="footer-container">
                    <div className="footer-section">
                        <h4>About Aspirix</h4>
                        <p>Aspirix is a leading online learning platform designed to empower individuals with high-quality courses and expert-led training. </p>
                        <div className="social-icons">
                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
                            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
                            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                        </div>

                    </div>
                    <div className="footer-section">
                        <p><FaMapMarkerAlt /> 21 Revolution Street<br />Paris, France</p>
                        <p><FaPhone /> +1 555 123456</p>
                        <p><FaEnvelope /> <a href="mailto:support@aspirix.com">support@aspirix.com</a></p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default LandingPage