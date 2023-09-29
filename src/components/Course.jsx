import './Course.css'

const Course = (props) => {
    const {course, selectCard, toggleSelected} = props;
    return (
        <div className="card" onClick={() => toggleSelected(course)}>
            <div className={`card-body ${selectCard.includes(course) ? 'selectCard' : ''}`}>
                <h3 className="card-title">{course.term} CS {course.number}</h3>
                <p className="card-text">{course.title}</p>
                <hr className="custom-divider"/> 
                <p className="card-text">{course.meets}</p>
            </div>
        </div>
    )
};
  
export default Course;