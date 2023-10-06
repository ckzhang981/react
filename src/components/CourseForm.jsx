import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
// import { useDbUpdate } from '../utilities/firebase';
import { useFormData } from '../utilities/useFormData';
import './CourseForm.css'

const validateUserData = (key, val) => {
    switch (key) {
      case 'firstName': case 'lastName':
        return /(^\w\w)/.test(val) ? '' : 'must be least two characters';
      case 'email':
        return /^\w+@\w+[.]\w+/.test(val) ? '' : 'must contain name@domain.top-level-domain';
      default: return '';
    }
};

const InputField = ({name, text, state, change, course}) => (
    <div className="mb-3">
      <label htmlFor={name} className="form-label">{text}</label>
      <input className="form-control" id={name} name={name} 
        defaultValue={name === "title" ? course.title : name === "meets" ? course.meets : state.values?.[name]} 
        onChange={change} />
      <div className="invalid-feedback">{state.errors?.[name]}</div>
    </div>
);


const ButtonBar = ({message, disabled}) => {
    const navigate = useNavigate();
    return (
      <div className="d-flex">
        <button type="button" className="btn btn-outline-dark me-2" onClick={() => navigate("/")}>Cancel</button>
        {/* <button type="submit" className="btn btn-primary me-auto">Submit</button> */}
        {/* <span className="p-2">{message}</span> */}
      </div>
    );
};

const handleSubmit = (evt) => {
    evt.preventDefault(); 
};

const CourseForm = ({course}) => {
    const { courseId } = useParams();
    //const [update, result] = useDbUpdate(`/users/${user.id}`);
    const [state, change] = useFormData(validateUserData, courseId);
    // const submit = (evt) => {
    //   evt.preventDefault();
    //   if (!state.errors) {
    //     update(state.values);
    //   }
    // };
    
  
    return (
        <form onSubmit={null} noValidate className={state.errors ? 'was-validated' : null}>
            <InputField name="title" text="Title" state={state} change={change} course={course}/>
            <InputField name="meets" text="Meeting Time" state={state} change={change} course={course}/>
            <ButtonBar />
        </form>
    )
  };
  
  export default CourseForm;
