import React from 'react'
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
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h2 className="sidebarTitle">Klamma</h2>
                    <ul className="sidebarList">
                        <li className="sidebarListItem active"> <HomeIcon className="sidebarIcon"/>Overview</li>
                        <li className="sidebarListItem"> <CreditCardIcon className="sidebarIcon"/> Cards </li>
                        <li className="sidebarListItem"><PriceChangeIcon className="sidebarIcon"/> Payments <ArrowDropDownIcon className="dropIcon"/> </li>
                        <li className="sidebarListItem"><AssessmentIcon className="sidebarIcon"/>Repots <ArrowDropDownIcon className="dropIcon"/> </li>
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
