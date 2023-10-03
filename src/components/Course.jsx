import './Course.css'

const Course = (props) => {
    const {course, selectCard, toggleSelected, noSelection} = props;
    return (
        <div className={`card ${noSelection.includes(course) ? 'noSelection' : ''}`} onClick={!noSelection.includes(course) ?
                                                                             () => toggleSelected(course) : null}>
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