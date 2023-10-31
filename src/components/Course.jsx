import 'bootstrap/dist/css/bootstrap.min.css';
import './Course.css'
import { Link } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { useProfile } from '../utilities/profile';



const Course = (props) => {
    const { courseId, course, selectCard, toggleSelected, noSelection} = props;
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [profile, profileLoading, profileError] = useProfile();
    // console.log(profile)
    if (profileError) return <h1>Error loading profile: {`${profileError}`}</h1>;
    if (profileLoading) return <h1>Loading user profile</h1>;
    if (!profile) return <h1>No profile data</h1>;

    useEffect(() => {
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, user => {
          setIsAuthenticated(!!user);
        });
        return () => unsubscribe();
      }, []);

    return (
        <div className={`card ${noSelection.includes(course) ? 'noSelection' : ''}`} onClick={!noSelection.includes(course) ?
                                                                             () => toggleSelected(course) : null} data-cy="course">
            <div className={`card-body ${selectCard.includes(course) ? 'selectCard' : ''}`}>
                <h3 className="card-title">{course.term} CS {course.number}</h3>
                <p className="card-text">{course.title}</p>
                <hr className="custom-divider"/> 
                <p className="card-text">{course.meets}</p>
                {isAuthenticated && profile?.isAdmin && <Link className="btn btn-primary" to={`/courses/${courseId}/edit`}>Edit</Link>}
            </div>
        </div>
    )
};

export default Course;