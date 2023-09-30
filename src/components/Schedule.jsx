import './Schedule.css'
const Schedule = (props) => {
    console.log(props);
    const selectedCourses = props.selectedCourses;
    return (
        <div>
          {selectedCourses.map((eachCourse) => (
            <div className="card">
                <div className="card-body">
                    <p className="card-text">{eachCourse.term} CS {eachCourse.number} {eachCourse.title} {eachCourse.meets}</p>
                    {/* <hr className="custom-divider"/>  */}
                </div>
            </div>
          ))}
        </div>
      );
};

export default Schedule;
