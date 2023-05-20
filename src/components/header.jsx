import AddNew from "./addnew"
import "./header.scss"
import Logo from "./logo/logo"
import Search from "./search"
import { useState } from 'react';

export default function Header({ setCreateData, filter, setFilter, msg}){
    return (
        <div className="header-components">
            <Logo />
            <div className="header-wrapper">
                <Search filter={filter} setFilter={setFilter}/>
                <AddNew setCreateData={setCreateData} msg={msg}/>
            </div>
        </div>
    )
}