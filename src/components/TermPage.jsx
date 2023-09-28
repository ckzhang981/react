import { useState } from 'react';
import CourseList from "./CourseList";
import Banner from "./Banner";

const terms = {
    Fall: 'Fall',
    Winter: 'Winter',
    Spring: 'Spring'
};
  
const TermButton = ({term, selection, setSelection}) => (
    <div>
        <input type="radio" id={term} className="btn-check" checked={term === selection} autoComplete="off"
        onChange={() => setSelection(term)} />
        <label className="btn btn-success mb-1 p-2" htmlFor={term}>
        { term }
        </label>
    </div>
);

const TermSelector = ({selection, setSelection}) => (
    <div className="btn-group">
      { 
        Object.keys(terms).map(term => <TermButton key={term} term={term} selection={selection} setSelection={setSelection} />)
      }
    </div>
);

const TermPage = (props) => {
    const { data } = props;
    const [selection, setSelection] = useState(() => Object.keys(terms)[0]);
    return (
        <div>
        <TermSelector selection={selection} setSelection={setSelection} />
        <Banner title={data.title} />
        <CourseList courses={data.courses} selectedTerm={selection} />
        </div>
    );
}
  
export default TermPage;


