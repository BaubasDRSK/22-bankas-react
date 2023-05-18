import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import CurrencyInput from 'react-currency-input-field';

export default function MinusMoney({ minusModalData, setMinusModalData, setEditData}){

    const [minusAmmount, setMinusAmmount]= useState(0);
    const [alert, setAlert] = useState('Enter ammount to withdraw from account:')

    const handleMinusAmmount = e =>{
        console.log(e);
        setMinusAmmount(e);
    };

    if(parseFloat(minusAmmount) < 0 || isNaN(parseFloat(minusAmmount)) ){
        setMinusAmmount(0);
    }

    const minus = _ => {
                            if (parseFloat(minusAmmount)>minusModalData.Balance){
                                setAlert('Can withdraw only up to '+ minusModalData.Balance +'\n\r € Enter ammount to withdraw from account:' );
                                setMinusAmmount(minusModalData.Balance);
                                return;
                            }
                            setAlert('Enter ammount to withdraw from account:' );
                            const diff = minusModalData.Balance - parseFloat(minusAmmount);
                            if (diff <0 || isNaN(diff) || diff === null || diff===undefined){
                                setAlert('Error. Try one more time');
                                return
                            }
                            setEditData({...minusModalData, Balance:diff, id: minusModalData.id});
                            setMinusModalData(null);
                            setMinusAmmount(0);
                        }
                       

    const handleParentClick = event => {
        event.preventDefault();
    
        if (event.target === event.currentTarget) {
            console.log('parent clicked');
            setMinusModalData(null);
            setMinusAmmount(0);
        }
        };


    const displayValue = minusAmmount===0?'':minusAmmount;

    if (minusModalData === null){
        return null;
    }

    if (minusModalData.Balance === 0) {
        return (
            <div className="modal" onClick={handleParentClick}>
                <div className="modal-wrapper">

                    <div className="close" onClick={_=>{
                            setMinusModalData(null);
                            setMinusAmmount(0);
                            }}><FontAwesomeIcon icon={faCircleXmark} />
                    </div>

                    <h4>Balance is empty, cant withdraw money.</h4>
                    <button className="btn"  onClick={minus}>Cancle</button>
                </div>
            </div>
        )
    }

    return (
        <div className="modal" onClick={handleParentClick}>
            <div className="modal-wrapper">

                <div className="close" onClick={_=>{
                        setMinusModalData(null);
                        setMinusAmmount(0);
                        }}><FontAwesomeIcon icon={faCircleXmark} />
                </div>

                <h4>{alert}</h4>
                <CurrencyInput
                    id="input-example"
                    name="input-name"
                    placeholder="Please enter ammount"
                    defaultValue={minusAmmount}
                    decimalsLimit={2}
                    value={displayValue}
                    allowNegativeValue={false}
                    suffix={' €'}
                    onValueChange={handleMinusAmmount}
                />
                
                <button className="btn"  onClick={minus}>Withdraw</button>
            </div>
        </div>
    )

}





