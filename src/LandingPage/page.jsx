import "./page.css";
import logo from "../Images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Categories from "./Components/Categories.jsx";

import { BrowserRouter as Router, Routes, Route, useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

function ScrollToSection() {
    const location = useLocation();

    useEffect(() => {
        const sectionId = location.pathname.replace("/", "");
        if (sectionId) {
            const section = document.getElementById(sectionId);
            if (section) {
                const navHeight = document.querySelector(".nav")?.offsetHeight || 0;
                const sectionTop = section.getBoundingClientRect().top + window.scrollY - navHeight - 20;

                window.scrollTo({ top: sectionTop, behavior: "smooth" });
            }
        }
    }, [location]);

    return null;
}

function LandingPage() {
    return (
        <>
            <Router>
                <ScrollToSection />
                <div className="nav">
                    <div className="name">
                        <img src={logo} alt="" className="logo" />
                        <h3>Aspirix</h3>
                    </div>
                    <div className="pages">
                        <Link to="/home">Home</Link>
                        <Link to="/certificates">Certificates</Link>
                        <Link to="/degree">Earn Your Degree</Link>
                        <Link to="/courses">Free Courses</Link>
                        <Link to="/categories">Categories</Link>
                    </div>
                    <div>
                        <button className="login">Login</button>
                    </div>
                </div>
                <div className="herosection" id="home">
                    <div className="content">
                        <h1>Learn, Grow, Succeed - Anytime, Anywhere.</h1>
                        <p>Join thousands of learners and explore high-quality courses.</p>
                        <input type="text" placeholder="What do you want to learn?" />
                        <FontAwesomeIcon icon={faSearch} style={{ marginLeft: "-30px", cursor: "pointer" }} />
                    </div>
                    <div>
                        <img src="https://media.istockphoto.com/id/1500285927/photo/young-woman-a-university-student-studying-online.jpg?s=612x612&w=0&k=20&c=yvFDnYMNEJ6WEDYrAaOOLXv-Jhtv6ViBRXSzJhL9S_k=" alt="" className="heroimg" />
                    </div>
                </div>
                <div className="cardscontainer" id="certificates">
                    <h2>Most Popular Certificates</h2>
                    <div className="cards">
                        <div className="card" style={{ width: "18rem" }}>
                            <img src="https://assets.cioinsight.com/uploads/2022/06/Data-Analyst.jpeg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">IBM</h5>
                                <p className="card-text">IBM Data Analyst</p>
                                <small>Professional Certificate</small>
                            </div>
                        </div>
                        <div className="card" style={{ width: "18rem" }}>
                            <img src="https://www.9spheres.com.au/wp-content/uploads/2024/07/cyber-security-tips.webp" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Google</h5>
                                <p className="card-text">Google Cybersecurity</p>
                                <small>Professional Certificate</small>
                            </div>
                        </div>
                        <div className="card" style={{ width: "18rem" }}>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6mo-G9ABRy9tP1hAcdz97qJZPD7sroI2tIQ&s" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">University of Michigan</h5>
                                <p className="card-text">Python for Everybody</p>
                                <small>Specialization</small>
                            </div>
                        </div>
                        <div className="card" style={{ width: "18rem" }}>
                            <img src="https://imageio.forbes.com/specials-images/imageserve/5fca87f3ce4ca55e8985a10a/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">University of Pennsylvania</h5>
                                <p className="card-text">Business Foundations</p>
                                <small>Specialization</small>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="degreecontainer" id="degree">
                    <h2>Earn Your Degree</h2>
                    <div className="cards">
                        <div className="card" style={{ width: "18rem" }}>
                            <img src="https://akm-img-a-in.tosshub.com/sites/resources/campus/prod/img/newslisting/2024/5/iitroorkeebreaksallpreviousrecordsinthisplacementseason388130611271.webp" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">IIT Roorkee</h5>
                                <p className="card-text">Executive MBA</p>
                                <small>Degree</small>
                            </div>
                        </div>
                        <div className="card" style={{ width: "18rem" }}>
                            <img src="https://149357281.v2.pressablecdn.com/wp-content/uploads/2024/04/UOH.jpeg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">University of Huddersfield</h5>
                                <p className="card-text">MSc Management</p>
                                <small>Degree</small>
                            </div>
                        </div>
                        <div className="card" style={{ width: "18rem" }}>
                            <img src="https://static.toiimg.com/thumb/msid-87104373,width-1280,height-720,resizemode-4/87104373.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">O.P. Jindal Global University</h5>
                                <p className="card-text">MBA in Business Analytics</p>
                                <small>Degree</small>
                            </div>
                        </div>
                        <div className="card" style={{ width: "18rem" }}>
                            <img src="https://www.london.ac.uk/sites/default/files/styles/16_9_media_small/public/externals/a48adfa77e8b5c4990b0f50b2d184918.jpg?itok=CxBk4d03" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">University of London</h5>
                                <p className="card-text">BSc Computer Science</p>
                                <small>Degree</small>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="freecontainer" id="courses">
                    <h2>Free Courses</h2>
                    <div className="cards">
                        <div className="card" style={{ width: "18rem" }}>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbYJ-2UmzEiMR9JhD0gpKJtxHcckqLQfh9jg&s" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Howard University</h5>
                                <p className="card-text">Project Management Essentials</p>
                                <small>Course</small>
                            </div>
                        </div>
                        <div className="card" style={{ width: "18rem" }}>
                            <img src="https://thesmilemoney.com/wp-content/uploads/2024/03/Behavioral-Finance-Understanding-Its-Impact-on-Your-Money.png" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Duke University</h5>
                                <p className="card-text">Behavioral Finance</p>
                                <small>Course</small>
                            </div>
                        </div>
                        <div className="card" style={{ width: "18rem" }}>
                            <img src="https://www.aihr.com/wp-content/uploads/organizational-analysis-cover.png" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Stanford University</h5>
                                <p className="card-text">Organizational Analysis</p>
                                <small>Course</small>
                            </div>
                        </div>
                        <div className="card" style={{ width: "18rem" }}>
                            <img src="https://i0.wp.com/chumans.com/wp-content/uploads/2022/07/Connect-Leader.png?fit=1280%2C720&ssl=1" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Yale University</h5>
                                <p className="card-text">Connected Leadership</p>
                                <small>Course</small>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="catcont" id="categories">
                    <h2 style={{ marginBottom: "20px" }}>Categories</h2>
                    <Categories />
                </div>
                <div className="footer">
                    <p>© 2025 Aspirix. All Rights Reserved.</p>
                </div>
            </Router>
        </>
    )
}
export default LandingPage