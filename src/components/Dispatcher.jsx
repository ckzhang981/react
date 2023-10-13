import { BrowserRouter, Routes, Route } from "react-router-dom";
import TermPage from "./TermPage";
import CourseForm from "./CourseForm";
import { useParams } from 'react-router-dom';

const CourseFormWrapper = ({ data }) => {
    const { courseId } = useParams();
    const course = data.courses[courseId];
  
    if (!course) {
      return <div>Course not found</div>;
    }
    return <CourseForm course={course} />;
}

const Dispatcher = ({data}) => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<TermPage data={data}/>}></Route>
            {/* When the user navigates to the root path ("/"), 
            the TermPage component will be rendered, and the data prop will be passed to it. */}
            <Route path="/courses/:courseId/edit" element={<CourseFormWrapper data={data} />} />
        </Routes>
    </BrowserRouter>
);

export default Dispatcher;