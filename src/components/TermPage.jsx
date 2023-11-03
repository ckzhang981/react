import { useState } from 'react';
import Modal from './Modal';
import Banner from "./Banner";
import Schedule from './Schedule';
import CourseList from "./CourseList";
import { useEffect } from 'react';
import { courseConflict } from '../utilities/functions';
import Navigation from './Navigation';

const terms = {
    Fall: 'Fall',
    Winter: 'Winter',
    Spring: 'Spring'
};
  
const TermButton = ({term, selection, setSelection}) => (
    <div>
        <input type="radio" id={term} className="btn-check" checked={term === selection} autoComplete="off"
        onChange={() => setSelection(term)} />
        <label className="btn btn-success mb-1 p-2" htmlFor={term} data-cy={term}>
        { term }
        </label>
    </div>
);

const TermSelector = ({selection, setSelection}) => (
    <div className="btn-group">
      { 
        Object.keys(terms).map(term => <TermButton key={term} term={term} selection={selection} setSelection={setSelection} data-cy={term}/>)
      }
    </div>
);

const TermPage = (props) => {
    const { data } = props;
    const [selection, setSelection] = useState(() => Object.keys(terms)[0]);
    const [selectCard, setSelectCard] = useState([]);
    const [open, setOpen] = useState(false);
    const openModal = () => setOpen(true);
    const closeModal = () => setOpen(false);
    const toggleSelected = (item) => setSelectCard(
        selectCard.includes(item) ? selectCard.filter(x => x !== item) : [...selectCard, item]
    );
    const [noSelection, setNoSelection] = useState([]);
    useEffect(() => {
        const noSelectionList = Object.values(data.courses).filter(course1 => selectCard.some(course2 => courseConflict(course1, course2)));
        setNoSelection(noSelectionList);
    }, [selectCard]);

    return (
        <div>
            <Banner title={data.title} />
            <div style={{ textAlign: 'center' }}>
                <TermSelector selection={selection} setSelection={setSelection} style={{ display: 'inline-block' }} />
                <button className="btn btn-outline-dark" style={{ float: 'right' }} onClick={openModal}>Schedule</button>
            </div>
            <Navigation />
            <Modal open={open} close={closeModal}>
                {selectCard.length === 0 ? <h5>You have not selected any course yet</h5> :
                <Schedule selectedCourses={selectCard}/>}
            </Modal>
            <CourseList courses={data.courses} keys={Object.keys(data.courses)} selectedTerm={selection} selectCard={selectCard} 
                        toggleSelected={toggleSelected} noSelection={noSelection}/>
        </div>
    );
}
  
export default TermPage;


