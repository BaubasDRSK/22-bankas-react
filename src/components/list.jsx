export default function List({ accounts, setDeleteData, setEditModalData }) {
    console.log(accounts)
    const destroy = c => setDeleteData(c);
    const edit = c => setEditModalData(c);

    return (
        <div>
            <ul>
                {
                    accounts
                        ? accounts.length
                            ? accounts.map(c => (
                                <li key={c.id} className="list-group-item">
                                    <div className="list-item">
                                        <div className="account-name">{c.Name}</div>
                                        <div className="account-surname">{c.Surname}</div>
                                        <div className="account-balance">{c.Balance}</div>
                                        <div className="buttons">
                                            <button onClick={_ => destroy(c)}>delete</button>
                                            <button onClick={_ => edit(c)}>edit</button>
                                        </div>
                                    </div>
                                </li>))
                            : 'No accounts yet'
                        : '...loading'
                }
            </ul>
        </div>
    )
}