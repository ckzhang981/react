const CourseList = (props) => {
    const courses = props.courses;
    return (
        <div>
            {Object.entries(courses).map(([courseId, courseInfo]) => (
            <div key = {courseId}>
                {courseInfo.term} CS {courseInfo.number}: {courseInfo.title} 
            </div>))}
        </div>
    )
};
  
  export default CourseList;