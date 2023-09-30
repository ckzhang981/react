import { useState } from 'react';
import Modal from './Modal';
import Banner from "./Banner";
import Schedule from './Schedule';
import CourseList from "./CourseList";

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
    const [selectCard, setSelectCard] = useState([]);
    const [open, setOpen] = useState(false);
    const openModal = () => setOpen(true);
    const closeModal = () => setOpen(false);
    const toggleSelected = (item) => setSelectCard(
        selectCard.includes(item) ? selectCard.filter(x => x !== item) : [...selectCard, item]
    )

    return (
        <div className='TermSelecter'>
            <Banner title={data.title} />
            <TermSelector selection={selection} setSelection={setSelection} />
            <button className="btn btn-outline-dark" onClick={openModal}>Schedule</button>

            <Modal open={open} close={closeModal}>
                <Schedule selectedCourses={selectCard}/>
            </Modal>
            <CourseList courses={data.courses} selectedTerm={selection} selectCard={selectCard} toggleSelected={toggleSelected}/>
        </div>
    );
}
  
export default TermPage;


