import Course from "./Course";
import './CourseList.css'

const CourseList = (props) => {
    const courses = props.courses;
    const {selectedTerm, selectCard, toggleSelected} = props;
    const selectedCourses = Object.values(courses).filter(courseInfo => courseInfo.term === selectedTerm);
    return (
        <div className="course-list">
            {selectedCourses.map((courseInfo, index) => (
                <Course key={index} course={courseInfo} selectCard={selectCard} toggleSelected={toggleSelected}/>
            ))}
        </div>
    )
};

export default CourseList;