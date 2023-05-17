import './list.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { faCircleMinus } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';



export default function List({ accounts, setDeleteData, setAddModalData, setMinusModalData }) {
    console.log(accounts)
    const destroy = c => setDeleteData(c);
    const plus = c => {
        setAddModalData(c);
        setMinusModalData(null);
    };
    const minus = c => {
        setMinusModalData(c);   
        setAddModalData(null);    
    };
    

    return (
        <div className='acounts-wrapper'>
            <ul className="account-list">
                <li key={1001} className="list-group-header">
                    <div className="list-item">
                        <div className="account-name">Name</div>
                        <div className="account-surname">Surname</div>
                        <div className="account-balance">Actual balance</div>
                        <div className="buttons">
                            Actions
                        </div>
                    </div>
                </li>
                {
                    accounts
                        ? accounts.length
                            ? accounts.map(c => (                               
                                    <li key={c.id} className="list-group-item">
                                        <div className="list-item">
                                            <div className="account-name">{c.Name}</div>
                                            <div className="account-surname">{c.Surname}</div>
                                            <div className="account-balance">{c.Balance.toFixed(2) + ' €' }</div>
                                            <div className="buttons">
                                                <span className='add' style={{display:'inline-block'}} onClick={_ => plus(c)}><FontAwesomeIcon icon={faCirclePlus} /></span>
                                                <span className='minus' style={{display:'inline-block'}} onClick={_ => minus(c)}><FontAwesomeIcon icon={faCircleMinus} /></span>
                                                <span className='delete' style={{display:'inline-block'}} onClick={_ => destroy(c)}><FontAwesomeIcon icon={faTrash} /></span>
                                            </div>
                                        </div>
                                    </li>
                                ))
                            : 'No accounts yet'
                        : '...loading'
                }
            </ul>
        </div>
    )
}