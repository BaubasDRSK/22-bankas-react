export default function DeletaAcc({setDeleteData,deleteModalData, setDeleteModaldata, minusModalData, setMinusModalData, setEditData, setDeleteMessage ,deleteMessage}){
    
    if (deleteModalData === null){
        return ;
    }

    

    // setDeleteData(c);
    return (
        <div className="modal" >
        <div className="modal-wrapper">

            <div className="close" onClick={_=>{
                    setMinusModalData(null);
                    // setMinusAmmount(0);
                    }}>
            </div>

            <h4>{alert}</h4>
           
            
            <button className="btn" >Withdraw</button>
        </div>
    </div>
    )

}


{/* <FontAwesomeIcon icon={faCircleXmark} />
    onClick={handleParentClick}
*/}

