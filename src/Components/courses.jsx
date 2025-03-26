import "./component.css";

const popularCourses = [
    {
        name: "Web Development",
        icon: "🌐",
        description: "Learn how to build websites and web applications."
    },
    {
        name: "Digital Marketing",
        icon: "📈",
        description: "Master the art of online marketing and SEO."
    },
    {
        name: "Graphic Design",
        icon: "🎨",
        description: "Create stunning visuals and designs."
    },
    {
        name: "Machine Learning",
        icon: "🤖",
        description: "Dive into the world of AI and machine learning."
    },
];

const Courses = () => {
    return (
        <div className="course-grid">
            {popularCourses.map((course, index) => (
                <div className="course-card" key={index}>
                    {course.icon}
                    <h4>{course.name}</h4>
                    <p>{course.description}</p>
                </div>
            ))}
        </div>
    );
};

export default Courses;