import Course from "./Course";
import './CourseList.css'

const CourseList = (props) => {
    const courses = props.courses;
    return (
        <div className="course-list">
            {Object.entries(courses).map(([courseId, courseInfo]) => (
                <Course key={courseId} course={courseInfo}/>
            ))}
        </div>
    )
};
  
  export default CourseList;