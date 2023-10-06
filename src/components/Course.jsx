import 'bootstrap/dist/css/bootstrap.min.css';
import './Course.css'
import { Link } from 'react-router-dom';



const Course = (props) => {
    const { courseId, course, selectCard, toggleSelected, noSelection} = props;
    return (
        <div className={`card ${noSelection.includes(course) ? 'noSelection' : ''}`} onClick={!noSelection.includes(course) ?
                                                                             () => toggleSelected(course) : null}>
            <div className={`card-body ${selectCard.includes(course) ? 'selectCard' : ''}`}>
                <h3 className="card-title">{course.term} CS {course.number}</h3>
                <p className="card-text">{course.title}</p>
                <hr className="custom-divider"/> 
                <p className="card-text">{course.meets}</p>
                <Link className="btn btn-primary" to={`/courses/${courseId}/edit`}>Edit</Link>
            </div>
        </div>
    )
};

export default Course;