import Course from "./Course";
import './CourseList.css'

const CourseList = (props) => {
    const courses = props.courses;
    const selectedTerm = props.selectedTerm;
    const selectedCourses = Object.values(courses).filter(courseInfo => courseInfo.term === selectedTerm);
    return (
        <div className="course-list">
            {selectedCourses.map((courseInfo, index) => (
                <Course key={index} course={courseInfo}/>
            ))}
        </div>
    )
};
  
export default CourseList;