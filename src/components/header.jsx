import AddNew from "./addnew"
import "./header.scss"
import Logo from "./logo/logo"
import Search from "./search"

export default function Header(){
    return (
        <div className="header-components">
            <Logo />
            <div className="header-wrapper">
                <Search />
                <AddNew />
            </div>
        </div>
    )
}