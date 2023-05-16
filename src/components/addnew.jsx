import { useRef, useState } from 'react'
import './addnew.scss'

export default function AddNew({ setCreateData }){
    const [addNewModalDisplay, setAddNewModalDisplay]= useState('none');
    
    const nameRef = useRef(null);
    const surnameRef = useRef(null);

    const handleSubmit = (event) => {
        event.preventDefault();
    
        const name = nameRef.current.value;
        const surname = surnameRef.current.value;
    
        console.log('Name:', name);
        console.log('Surname:', surname);
        
        setCreateData({Name:name, Surname:surname, Balance:0}); //su formos info sukuria nauja accounta
        setAddNewModalDisplay('none');
        // Reset the form
        nameRef.current.value = '';
        surnameRef.current.value = '';

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

                        <label htmlFor='surname'>Surname:</label>
                        <input type="text" id="surname" ref={surnameRef} required />

                        <button className="btn" type="submit">Add account</button>
                    </form>
                </div>
            </div>
        </div>
    )
}