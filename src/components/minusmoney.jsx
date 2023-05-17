import { useState } from "react";

export default function MinusMoney({ minusModalData, setMinusModalData, setEditData}){

const [minusAmmount, setMinusAmmount]= useState(0);
const [alert, setAlert] = useState('Enter ammount to withdraw from account:')

const handleMinusAmmount = e =>{
    setMinusAmmount(e.target.value);
};

if(parseFloat(minusAmmount) < 0 || isNaN(parseFloat(minusAmmount)) ){
    setMinusAmmount(0);
}

const minus = _ => {
    console.log(parseFloat(minusAmmount));
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


if (minusModalData === null){
    return null;
}

if (minusModalData.Balance === 0) {
    return (
        <div className="modal">
            <div className="modal-wrapper">
                <h4>Balance is empty, cant withdraw money.</h4>
                <button className="btn"  onClick={minus}>Cancle</button>
            </div>
        </div>
    )
}

return (
    <div className="modal">
        <div className="modal-wrapper">
            <h4>{alert}</h4>
            <input type="number" placeholder="0.00 €" step="0.01" min="0" max="100000" value={parseFloat(minusAmmount)>0?parseFloat(minusAmmount):''} onChange={handleMinusAmmount} />
            <button className="btn"  onClick={minus}>Withdraw</button>
        </div>
    </div>
)

}





