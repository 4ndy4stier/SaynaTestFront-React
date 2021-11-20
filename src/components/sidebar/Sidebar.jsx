import React , {useCallback, useState}from 'react'
import "./sidebar.css"
import HomeIcon from '@mui/icons-material/Home';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import PriceChangeIcon from '@mui/icons-material/PriceChange';
import AssessmentIcon from '@mui/icons-material/Assessment';
import ContactsIcon from '@mui/icons-material/Contacts';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


export default function Sidebar() {
    const [dropDown1, setDropDown1] = useState(false)
    const handleClick1 = useCallback(() => {
        setDropDown1((prev)=>!prev)
    }, [])
    const [dropDown2, setDropDown2] = useState(false)
    const handleClick2 = useCallback(() => {
        setDropDown2((prev)=>!prev)
    }, [])
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h2 className="sidebarTitle">Klamma</h2>
                    <ul className="sidebarList">
                        <li className="sidebarListItem active"> <HomeIcon className="sidebarIcon"/>Overview</li>
                        <li className="sidebarListItem"> <CreditCardIcon className="sidebarIcon"/> Cards </li>
                        <li className="sidebarListItem" onClick={handleClick1}><PriceChangeIcon className="sidebarIcon"/>
                         Payments<ArrowDropDownIcon className="dropIcon"/> 
                        </li>
                        <ul className={dropDown1?"sideBarList":"none"}>
                                <li className="sidebarListItem">option</li>
                                <li className="sidebarListItem">option</li>
                                <li className="sidebarListItem">option</li>
                            </ul>
                        <li className="sidebarListItem" onClick={handleClick2}><AssessmentIcon className="sidebarIcon"/>
                        Repots <ArrowDropDownIcon className="dropIcon"/>
                        </li>
                        <ul className={dropDown2?"sideBarList":"none"}>
                                <li className="sidebarListItem">option</li>
                                <li className="sidebarListItem">option</li>
                                <li className="sidebarListItem">option</li>
                            </ul>
                        <li className="sidebarListItem"><ContactsIcon className="sidebarIcon"/>Contacts</li>
                    </ul>
                </div>
            </div>
            <div className="menuWrapper">
                <ul className="menuList">
                    <li className="menuListItem"> <SettingsOutlinedIcon className="menuIcon"/> Settings</li>
                    <li className="menuListItem"> <AccountCircleOutlinedIcon className="menuIcon"/> Account</li>
                </ul>
            </div>
        </div>
    )
}
