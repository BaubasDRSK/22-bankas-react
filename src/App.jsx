import { useEffect, useState } from 'react';
import './App.scss';
import Footer from './components/footer';
import Header from './components/header';
import { crudCreate, crudDelete, crudEdit, crudRead } from './functions/localStorageCrud';
import List from './components/list';
import AddMoney from './components/addmoney';
import MinusMoney from './components/minusmoney';
import DeletaAcc from './components/deleteAcc';


const KEY = 'myBankAccounts';


function App() {

  const [listUpdate, setListUpdate] = useState(Date.now());
  const [accounts, setAccounts] = useState(null);
  const [createData, setCreateData] = useState(null);
  const [deleteModalData, setDeleteModalData] = useState(null);
  const [deleteData, setDeleteData] = useState(null);
  const [deleteMessage, setDeleteMessage] = useState('');
  const [addModalData, setAddModalData] = useState(null);
  const [minusModalData, setMinusModalData] = useState(null);
  const [editData, setEditData] = useState(null);
  const [messages, setMessages] = useState([]);
  const [sort, setSort] = useState({sortDirection:'default', sortName:'Name'});


  //R read
  useEffect(_ => {
    setAccounts(crudRead(KEY).map((c, i) => ({...c, row: i, show: true})));
}, [listUpdate]);

  //C create
  useEffect(_ => {
    if (null === createData) {
        return;
    }
    crudCreate(KEY, createData);
    setListUpdate(Date.now());
    // msg('New color was creates', 'ok');
  }, [createData]);

  //U update
  useEffect(_ => {
    if (null === editData) {
        return;
    }
      crudEdit(KEY, editData, editData.id);
      setListUpdate(Date.now());
  }, [editData]);

  //D deleate
  useEffect(_ => {
    if (null === deleteData) {
        return;
    }
    crudDelete(KEY, deleteData.id);
    setListUpdate(Date.now());
    // msg('Color has gone', 'ok');
  }, [deleteData]);

  //S Sort

  

  useEffect(() => {
    if (sort.sortDirection === 'default') {
        setAccounts(c => [...c].sort((a, b) => a.row - b.row));
    } else if(sort.sortDirection === 'up') {
          setAccounts(c => [...c].sort((a, b) => {
            if (typeof a[sort.sortName] === 'number' && typeof b[sort.sortName] === 'number') {
              return a[sort.sortName] - b[sort.sortName];
            } else {
              return a[sort.sortName].localeCompare(b[sort.sortName]);
            }}
            ));
    } else {
      setAccounts(c => [...c].sort((b, a) => {
        if (typeof a[sort.sortName] === 'number' && typeof b[sort.sortName] === 'number') {
          return a[sort.sortName] - b[sort.sortName];
        } else {
          return a[sort.sortName].localeCompare(b[sort.sortName]);
        }}
        ));
    }
  }, [sort, listUpdate]);

  const doSort = n => {
    setSort(s => {
        switch (s.sortDirection) {
            case 'default': return {sortDirection:'up', sortName:n};
            case 'up': return {sortDirection:'down', sortName:n};
            default: return {sortDirection:'default', sortName:n};
        }
    });
}

console.log(sort);

  return (
    <div className="App">
      <div>
        <header className="main-header">
        <Header setCreateData={setCreateData}/>
        </header>
        <main>
          <List
            accounts={accounts}
            setDeleteData = {setDeleteData}
            setAddModalData = {setAddModalData}
            setMinusModalData = {setMinusModalData}
            setDeleteModalData = {setDeleteModalData}
            setDeleteMessage = {setDeleteMessage}
            deleteMessage = {deleteMessage}
            doSort = {doSort}
            sort = {sort}
          />
        </main>
      </div>
      <div className="main-footer-wrapp">
        <footer>
          <AddMoney 
            addModalData={addModalData}
            setAddModalData={setAddModalData}
            setEditData={setEditData}
          />

          <MinusMoney
            minusModalData={minusModalData}
            setMinusModalData={setMinusModalData}
            setEditData={setEditData}
          />

          <DeletaAcc 
            setDeleteMessage = {setDeleteMessage}
            deleteMessage = {deleteMessage}
            deleteModalData = {deleteModalData}
            setDeleteModalData = {setDeleteModalData}
            setEditData = {setEditData}
            setDeleteData={setDeleteData}
          />
          
          <Footer />
        </footer>
      </div>
    </div>
  );
}

export default App;
