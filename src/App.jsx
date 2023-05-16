import { useEffect, useState } from 'react';
import './App.scss';
import Footer from './components/footer';
import Header from './components/header';
import { crudCreate, crudDelete, crudEdit, crudRead } from './functions/localStorageCrud';
import List from './components/list';


const KEY = 'myBankAccounts';


function App() {

  const [listUpdate, setListUpdate] = useState(Date.now());
  const [accounts, setAccounts] = useState(null);
  const [createData, setCreateData] = useState(null);
  const [deleteModalData, setDeleteModalData] = useState(null);
  const [deleteData, setDeleteData] = useState(null);
  const [editModalData, setEditModalData] = useState(null);
  const [editData, setEditData] = useState(null);
  const [messages, setMessages] = useState([]);

  //R read
  useEffect(_ => {
    setAccounts(crudRead(KEY));
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

  //D deleate
  useEffect(_ => {
    if (null === deleteData) {
        return;
    }
    crudDelete(KEY, deleteData.id);
    setListUpdate(Date.now());
    // msg('Color has gone', 'ok');
  }, [deleteData]);




  return (
    <div className="App">
      <div>
        <header className="main-header">
        <Header setCreateData={setCreateData}/>
        </header>
        <main>
          <List
            accounts={accounts}
            setDeleteData={setDeleteData}
            setEditModalData={setEditModalData}
          />
        </main>
      </div>
      <div className="main-footer-wrapp">
        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  );
}

export default App;
