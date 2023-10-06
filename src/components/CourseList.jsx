import Course from "./Course";
import './CourseList.css'

const CourseList = (props) => {
    const courses = props.courses;
    const {selectedTerm, selectCard, toggleSelected, noSelection} = props;
    const selectedCourses = Object.entries(courses).filter(([key, courseInfo]) => courseInfo.term === selectedTerm);
    return (
        <div className="course-list">
            {selectedCourses.map(([key, courseInfo], index) => (
                <Course key={index} courseId={key} course={courseInfo} selectCard={selectCard} toggleSelected={toggleSelected}
                        noSelection={noSelection}/>
            ))}
        </div>
    );
};


export default CourseList;