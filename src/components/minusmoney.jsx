import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import CurrencyInput from 'react-currency-input-field';

export default function MinusMoney({ minusModalData, setMinusModalData, setEditData, msg}){

    const [minusAmmount, setMinusAmmount]= useState(0);
    const [alert, setAlert] = useState('Enter ammount to withdraw from account:')

    const handleMinusAmmount = e =>{
        setMinusAmmount(e);
    };

    if(parseFloat(minusAmmount) < 0 || isNaN(parseFloat(minusAmmount)) ){
        setMinusAmmount(0);
    }

    const minus = _ => {
        if (parseFloat(minusAmmount)>(minusModalData.Balance/100)){
            setAlert('Can withdraw only up to '+ (minusModalData.Balance/100) +'\n\r € Enter ammount to withdraw from account:' );
            setMinusAmmount((minusModalData.Balance/100));
            msg('Not enought funds', 'error');
            return;
        }
        setAlert('Enter ammount to withdraw from account:' );
        const diff = (minusModalData.Balance/100) - parseFloat(minusAmmount);
        if (diff <0 || isNaN(diff) || diff === null || diff===undefined){
            setAlert('Error. Try one more time');
            return
        }
        const a = Math.round(diff * 100);
        setEditData({...minusModalData, Balance:a, id: minusModalData.id});
        msg('Funds were withdrawn', 'info');
        setMinusModalData(null);
        setMinusAmmount(0);
    }
                       

    const handleParentClick = event => {
        event.preventDefault();
        if (event.target === event.currentTarget) {
            setMinusModalData(null);
            setMinusAmmount(0);
            msg('Action was canceled', 'error');
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
                            msg('Action was canceled', 'error');
                            }}><FontAwesomeIcon icon={faCircleXmark} />
                    </div>

                    <h4>Balance is empty, cant withdraw money.</h4>
                    <button className="btn"  onClick={_=>{
                        setMinusModalData(null);
                        setMinusAmmount(0);
                        msg('Action was canceled', 'error');
                        }}>Cancel</button>
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
                        msg('Action was canceled', 'error');
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
                <div style={{display:'flex', gap:30}}>
                    <button className="btn"  onClick={_=>{
                        setMinusModalData(null);
                        setMinusAmmount(0);
                        msg('Action was canceled', 'error');
                        }}>Cancel</button>
                    <button className="btn"  onClick={minus}>Withdraw</button>
                </div>
            </div>
        </div>
    )

}





