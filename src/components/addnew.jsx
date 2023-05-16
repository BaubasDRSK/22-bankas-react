import { useRef, useState } from 'react'
import './addnew.scss'

export default function AddNew({ setCreateData }){
    const [addNewModalDisplay, setAddNewModalDisplay]= useState('none');
    
    const nameRef = useRef(null);
    const surnameRef = useRef(null);

    const [nameError, setNameError] = useState('');
    const [surnameError, setSurnameError] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
    
        const name = nameRef.current.value;
        const surname = surnameRef.current.value;
    
        if (!validateName(name)) {
            setNameError('Please enter a valid name.');
            return;
        }
        
        if (!validateSurname(surname)) {
            setSurnameError('Please enter a valid surname.');
            return;
        }
        
        // Clear any existing error messages
        setNameError('');
        setSurnameError('');
    
        setCreateData({Name:name, Surname:surname, Balance:0}); //su formos info sukuria nauja accounta
        setAddNewModalDisplay('none');
        // Reset the form
        nameRef.current.value = '';
        surnameRef.current.value = '';

    };

    const validateName = (name) => {
    // Custom validation logic for name
    return /^[A-Za-z\s]+$/.test(name);
    };

    const validateSurname = (surname) => {
    // Custom validation logic for surname
    return /^[A-Za-z\s]+$/.test(surname);
    };


    function openAddNew (){
        setAddNewModalDisplay('block');
        console.log(addNewModalDisplay);
    }

    return (
        <div className="addNewModalWrapp">
            <button className="btn add-new" onClick={openAddNew }>Add new</button>
            <div className="addNewModal" style={{display:addNewModalDisplay}}>
                <div className="addNewFormWrapp">
                    <form onSubmit={handleSubmit} className='addNew'>  
                         
                        <label htmlFor='name'>Name:</label>
                        <input type="text" id="name" ref={nameRef}  required />
                        {nameError && <div className="error-message">{nameError}</div>}

                        <label htmlFor='surname'>Surname:</label>
                        <input type="text" id="surname" ref={surnameRef} required />
                        {surnameError && <div className="error-message">{surnameError}</div>}

                        <button className="btn" type="submit">Add account</button>
                    </form>
                </div>
            </div>
        </div>
    )
}