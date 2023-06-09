import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

export default function DeletaAcc({deleteModalData, setDeleteModalData,deleteMessage, setEditData, setDeleteData, msg}){
    
    if (deleteModalData === null){
        return ;
    }

    const handleParentClick = event => {
        event.preventDefault();
        if (event.target === event.currentTarget) {
            setDeleteModalData(null);
            msg('Action was canceled', 'error');
        }
    };
    
 
    return (
        <div className="modal" onClick={handleParentClick}>
            <div className="modal-wrapper">

                <div className="close" onClick={_=>{
                        setDeleteModalData(null);
                        msg('Action was canceled', 'error');
                        }}><FontAwesomeIcon icon={faCircleXmark} />
                </div>

                <h4 style={{whiteSpace: 'pre-line', textAlign:'center'}}>{deleteMessage}</h4>
                {deleteModalData.Balance === 0 ?
                    (    <div style={{display:'flex', gap:30}}>
                            <button 
                                className="btn" onClick={_=>{setDeleteModalData(null);msg('Action was canceled', 'error');}}>Cancel</button>
                            <button className="btn" onClick={_=>{setDeleteData({...deleteModalData, id:deleteModalData.id}); setDeleteModalData(null);}}>Delete</button>
                        </div>
                    ) : (
                        <div style={{display:'flex', gap:30}}>
                            <button className="btn" onClick={_=>{setDeleteModalData(null);msg('Action was canceled', 'error');}}>Cancel</button>
                            <button className="btn" onClick={_=>{setEditData({...deleteModalData, Balance:0, id: deleteModalData.id}); setDeleteModalData(null); msg('Funds were withdrawn', 'info');}}>Withdraw</button>
                        </div>
                    )
                }
            </div>
        </div>
    )

}



