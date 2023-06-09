import './list.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { faCircleMinus } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faSort } from '@fortawesome/free-solid-svg-icons';
import { faSortUp } from '@fortawesome/free-solid-svg-icons';
import { faSortDown } from '@fortawesome/free-solid-svg-icons';


export default function List({ accounts, setDeleteModalData, setDeleteData, setAddModalData, setMinusModalData, setDeleteMessage, deleteMessage, doSort, sort}) {
    const destroy = c => {
            setDeleteMessage('Are you shure you want to delete this account? \n' + c.Name + ', ' + c.Surname);
            if (c.Balance !== 0){
                setDeleteMessage('Can not delete account, because balance is: ' + (c.Balance/100) + '€\n Do You want to withdraw this ammount?');
            }
            setDeleteModalData(c);
    }

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
                    <div className="list-item headers">
                        
                        <div className="account-name column-sort">
                            <div className='column-name' style={{border:'none'}}>Name</div>
                            <div className='sort-symbol' onClick={()=>doSort('Name')}>
                                {sort.sortName !== 'Name' && <FontAwesomeIcon icon={faSort} />}
                                {sort.sortDirection==='default' && sort.sortName==='Name' && <FontAwesomeIcon icon={faSort} />}
                                {sort.sortDirection==='up' && sort.sortName==='Name' && <FontAwesomeIcon icon={faSortUp} />}
                                {sort.sortDirection==='down' && sort.sortName==='Name' && <FontAwesomeIcon icon={faSortDown} />}
                            </div>
                        </div>

                        <div className="account-surname  column-sort">
                            <div className='column-name' style={{border:'none'}}>Surname</div>
                            <div className='sort-symbol' onClick={()=>doSort('Surname')}>
                                {sort.sortName !== 'Surname' && <FontAwesomeIcon icon={faSort} />}
                                {sort.sortDirection==='default' && sort.sortName==='Surname' && <FontAwesomeIcon icon={faSort} />}
                                {sort.sortDirection==='up' && sort.sortName==='Surname' && <FontAwesomeIcon icon={faSortUp} />}
                                {sort.sortDirection==='down' && sort.sortName==='Surname' && <FontAwesomeIcon icon={faSortDown} />}
                            </div>
                        </div>
                        <div className="account-balance column-sort">
                            <div className='column-name'style={{border:'none'}}>Balance</div>
                            <div className='sort-symbol' onClick={()=>doSort('Balance')}>
                                {sort.sortName !== 'Balance' && <FontAwesomeIcon icon={faSort} />}
                                {sort.sortDirection==='default' && sort.sortName==='Balance' && <FontAwesomeIcon icon={faSort} />}
                                {sort.sortDirection==='up' && sort.sortName==='Balance' && <FontAwesomeIcon icon={faSortUp} />}
                                {sort.sortDirection==='down' && sort.sortName==='Balance' && <FontAwesomeIcon icon={faSortDown} />}
                            </div>
                        </div>
                        <div className="buttons">
                            <div>Actions</div>
                        </div>
                    </div>
                </li>
                {
                    accounts
                        ? accounts.length
                            ? accounts.map(c => (c.show ?                               
                                    <li key={c.id} className="list-group-item">
                                        <div className="list-item">
                                            <div className="account-name">{c.Name}</div>
                                            <div className="account-surname">{c.Surname}</div>
                                            <div className="account-balance">{(c.Balance/100).toFixed(2) + ' €' }</div>
                                            <div className="buttons">
                                                <span className='add' style={{display:'inline-block'}} onClick={_ => plus(c)}><FontAwesomeIcon icon={faCirclePlus} /></span>
                                                <span className='minus' style={{display:'inline-block'}} onClick={_ => minus(c)}><FontAwesomeIcon icon={faCircleMinus} /></span>
                                                <span className='delete' style={{display:'inline-block'}} onClick={_ => destroy(c)}><FontAwesomeIcon icon={faTrash} /></span>
                                            </div>
                                        </div>
                                    </li>: null
                                ))
                            : 'No accounts yet'
                        : '...loading'
                }
            </ul>
        </div>
    )
}