import "./UI.css";
import logo from "../Images/logo.png";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function UI() {
    const navigate = useNavigate()
    const location = useLocation();

    useEffect(() => {
        const sectionId = location.pathname.replace("/", "");
        if (sectionId) {
            const section = document.getElementById(sectionId);
            if (section) {
                const navHeight = document.querySelector(".nav")?.offsetHeight || 0;
                const h2Tag = section.querySelector("h2");
                const targetElement = h2Tag || section;
                const sectionTop = targetElement.getBoundingClientRect().top + window.scrollY - navHeight;
                window.scrollTo({ top: sectionTop, behavior: "smooth" });
            }
        }
    }, [location]);

    const handleLogout = () => {
        if (window.confirm("Are you sure you want to logout?")) {
            navigate("/");
        }
    };

    const courses = [
        {
            id: "ibm-data-analyst",
            image: "https://assets.cioinsight.com/uploads/2022/06/Data-Analyst.jpeg",
            title: "IBM",
            subtitle: "IBM Data Analyst",
            type: "Professional Certificate",
        },
        {
            id: "google-cybersecurity",
            image: "https://www.9spheres.com.au/wp-content/uploads/2024/07/cyber-security-tips.webp",
            title: "Google",
            subtitle: "Google Cybersecurity",
            type: "Professional Certificate",
        },
        {
            id: "python-for-everybody",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6mo-G9ABRy9tP1hAcdz97qJZPD7sroI2tIQ&s",
            title: "University of Michigan",
            subtitle: "Python for Everybody",
            type: "Specialization",
        },
        {
            id: "business-foundations",
            image: "https://imageio.forbes.com/specials-images/imageserve/5fca87f3ce4ca55e8985a10a/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
            title: "University of Pennsylvania",
            subtitle: "Business Foundations",
            type: "Specialization",
        },
    ];

    return (
        <>
            <div className="nav">
                <div className="name">
                    <img src={logo} alt="" className="logo" />
                    <h3>Aspirix</h3>
                </div>
                <div className="pages">
                    <a href="#Home">Home</a>
                    <a href="#certificates">Certificates</a>
                    <a href="#degree">Earn Your Degree</a>
                    <a href="#Courses">Free Courses</a>
                    <a href="#projects">Projects</a>
                    <a href="#mylearnings">My Learnings</a>
                </div>
                <div>
                    <button className="logout" onClick={handleLogout}>Logout</button>
                </div>
            </div>
            <div className="home-section" id="Home">
                <div className="search-box">
                    <div className="input-container">
                        <input type="text" placeholder="What do you want to learn?" className="search-input" />
                    </div>
                    <div className="suggestions">
                        <p>Web Development</p>
                        <p>Data Science</p>
                        <p>Machine Learning</p>
                    </div>
                </div>
            </div>
            <div className="certificatescont" id="certificates">
                <h2>Most Popular Certificates</h2>
                <div className="cards">
                <div className="card1" style={{ width: "18rem" }}>
                    <img src="https://assets.cioinsight.com/uploads/2022/06/Data-Analyst.jpeg" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">IBM</h5>
                        <p className="card-text">IBM Data Analyst</p>
                        <small>Professional Certificate</small>
                    </div>
                </div>
                <div className="card1" style={{ width: "18rem" }}>
                    <img src="https://www.9spheres.com.au/wp-content/uploads/2024/07/cyber-security-tips.webp" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Google</h5>
                        <p className="card-text">Google Cybersecurity</p>
                        <small>Professional Certificate</small>
                    </div>
                </div>
                <div className="card1" style={{ width: "18rem" }}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6mo-G9ABRy9tP1hAcdz97qJZPD7sroI2tIQ&s" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">University of Michigan</h5>
                        <p className="card-text">Python for Everybody</p>
                        <small>Specialization</small>
                    </div>
                </div>
                <div className="card1" style={{ width: "18rem" }}>
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
                    <div className="card1" style={{ width: "18rem" }}>
                        <img src="https://akm-img-a-in.tosshub.com/sites/resources/campus/prod/img/newslisting/2024/5/iitroorkeebreaksallpreviousrecordsinthisplacementseason388130611271.webp" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">IIT Roorkee</h5>
                            <p className="card-text">Executive MBA</p>
                            <small>Degree</small>
                        </div>
                    </div>
                    <div className="card1" style={{ width: "18rem" }}>
                        <img src="https://149357281.v2.pressablecdn.com/wp-content/uploads/2024/04/UOH.jpeg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">University of Huddersfield</h5>
                            <p className="card-text">MSc Management</p>
                            <small>Degree</small>
                        </div>
                    </div>
                    <div className="card1" style={{ width: "18rem" }}>
                        <img src="https://static.toiimg.com/thumb/msid-87104373,width-1280,height-720,resizemode-4/87104373.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">O.P. Jindal Global University</h5>
                            <p className="card-text">MBA in Business Analytics</p>
                            <small>Degree</small>
                        </div>
                    </div>
                    <div className="card1" style={{ width: "18rem" }}>
                        <img src="https://www.london.ac.uk/sites/default/files/styles/16_9_media_small/public/externals/a48adfa77e8b5c4990b0f50b2d184918.jpg?itok=CxBk4d03" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">University of London</h5>
                            <p className="card-text">BSc Computer Science</p>
                            <small>Degree</small>
                        </div>
                    </div>
                </div>
            </div>
            <div className="freecontainer" id="Courses">
                <h2>Free Courses</h2>
                <div className="cards">
                    <div className="card1" style={{ width: "18rem" }}>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbYJ-2UmzEiMR9JhD0gpKJtxHcckqLQfh9jg&s" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Howard University</h5>
                            <p className="card-text">Project Management Essentials</p>
                            <small>Course</small>
                        </div>
                    </div>
                    <div className="card1" style={{ width: "18rem" }}>
                        <img src="https://thesmilemoney.com/wp-content/uploads/2024/03/Behavioral-Finance-Understanding-Its-Impact-on-Your-Money.png" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Duke University</h5>
                            <p className="card-text">Behavioral Finance</p>
                            <small>Course</small>
                        </div>
                    </div>
                    <div className="card1" style={{ width: "18rem" }}>
                        <img src="https://www.aihr.com/wp-content/uploads/organizational-analysis-cover.png" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Stanford University</h5>
                            <p className="card-text">Organizational Analysis</p>
                            <small>Course</small>
                        </div>
                    </div>
                    <div className="card1" style={{ width: "18rem" }}>
                        <img src="https://i0.wp.com/chumans.com/wp-content/uploads/2022/07/Connect-Leader.png?fit=1280%2C720&ssl=1" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Yale University</h5>
                            <p className="card-text">Connected Leadership</p>
                            <small>Course</small>
                        </div>
                    </div>
                </div>
            </div>
            <div className="projectcontainer" id="projects">
                <h2>Guided Projects</h2>
                <div className="cards">
                    <div className="card1" style={{ width: "18rem" }}>
                        <img src="https://www.idfcfirstbank.com/content/dam/idfcfirstbank/images/blog/finance/5-methods-to-reduce-investment-risks-from-your-portfolio-717x404.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Aspirix Project Network</h5>
                            <p className="card-text">Investment Risk Management</p>
                            <small>Guided Project</small>
                        </div>
                    </div>
                    <div className="card1" style={{ width: "18rem" }}>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv2lVEns4MnPBTmbmsx59iF6iN8CgbTBkkHA&s" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Aspirix Project Network</h5>
                            <p className="card-text">Getting Started with Microsoft Excel</p>
                            <small>Guided Project</small>
                        </div>
                    </div>
                    <div className="card1" style={{ width: "18rem" }}>
                        <img src="https://cdn.mos.cms.futurecdn.net/njuqY8bVEAK48uSGWiXxPi.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Aspirix Project Network</h5>
                            <p className="card-text">Build a free website</p>
                            <small>Guided Project</small>
                        </div>
                    </div>
                    <div className="card1" style={{ width: "18rem" }}>
                        <img src="https://www.simplilearn.com/ice9/free_resources_article_thumb/What_Is_Business_Analysis_And_Why_Every_Company_Needs_A_Business_Analyst.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Aspirix Project Network</h5>
                            <p className="card-text">Business Analysis</p>
                            <small>Guided Project</small>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer">
                <div className="footer-container">
                    <div className="footer-section">
                        <p><FaMapMarkerAlt /> 21 Revolution Street<br />Paris, France</p>
                        <p><FaPhone /> +1 555 123456</p>
                        <p><FaEnvelope /> <a href="mailto:support@aspirix.com">support@aspirix.com</a></p>
                    </div>
                    <div className="footer-section">
                        <h4>About Aspirix</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.</p>
                        <div className="social-icons">
                            <a href="#"><FaFacebookF /></a>
                            <a href="#"><FaTwitter /></a>
                            <a href="#"><FaLinkedinIn /></a>
                            <a href="#"><FaGithub /></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UI