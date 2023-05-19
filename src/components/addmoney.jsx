import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import CurrencyInput from 'react-currency-input-field';

export default function AddMoney({ addModalData, setAddModalData, setEditData}){

const [addAmmount, setAddAmmount]= useState(0);

const handleAddAmmount = e =>{
    setAddAmmount(e);
};

if(parseFloat(addAmmount) < 0 || isNaN(parseFloat(addAmmount)) ){
    setAddAmmount(0);
}

const add = _ => {
    const sum = parseFloat(addAmmount) + (addModalData.Balance/100);
    const a = Math.round(sum * 100);
    setEditData({...addModalData, Balance: a, id: addModalData.id});
    setAddModalData(null);
    setAddAmmount(0);
}



const handleParentClick = event => {
    event.preventDefault();

    if (event.target === event.currentTarget) {
        console.log('parent clicked');
        setAddModalData(null);
        setAddAmmount(0);
    }
    };

const displayValue = addAmmount===0?'':addAmmount;

if (addModalData === null){
    return null;
}

return (
    <div className="modal" onClick={handleParentClick} >
        <div className="modal-wrapper">

            <div className="close" onClick={_=>{
                    setAddModalData(null);
                    setAddAmmount(0);
                    }}><FontAwesomeIcon icon={faCircleXmark} />
            </div>

            <h4>Enter ammount to add to account:</h4>
            <CurrencyInput
                    id="input-example"
                    name="input-name"
                    placeholder="Please enter ammount"
                    defaultValue={addAmmount}
                    decimalsLimit={2}
                    value={displayValue}
                    allowNegativeValue={false}
                    suffix={' €'}
                    onValueChange={handleAddAmmount}
                />
            {/* <input type="number" placeholder="0.00 €" step="0.01" min="0" max="100000"  value={parseFloat(addAmmount)>0?parseFloat(addAmmount):''} onChange={handleAddAmmount} /> */}
            <button className="btn"  onClick={add}>Add money</button>
        </div>
    </div>
)

}





