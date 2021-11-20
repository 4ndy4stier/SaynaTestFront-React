import React from 'react'
import './activities.css'
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import RepeatOutlinedIcon from '@mui/icons-material/RepeatOutlined';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';

const activities = [{
    "icon":"send",
    "usage":"To Martin Mitchel",
    "status":"Sent",
    "money":"-3,004.52 USD",
    "day":"today"
},
{
    "icon":"send",
    "usage":"To Jane Klamberberg",
    "status":"Sent",
    "money":"-1,023.19 USD",
    "day":"today"
},
{
    "icon":"convert",
    "usage":"EUR to USD",
    "status":"Conversion",
    "money":"+1,456.00 USD",
    "day":"today"
},
{
    "icon":"buy",
    "usage":"Starbucks",
    "status":"Cafe & Restaurants",
    "money":"-5.99 USD",
    "day":"yesterday"
},
{
    "icon":"deposit",
    "usage":"Deposit to your USD balance",
    "status":"deposited",
    "money":"4,000 USD",
    "day":"yesterday"
},
{
    "icon":"buy",
    "usage":"Mac Donalds",
    "status":"Fast food",
    "money":"-9.99 USD",
    "day":"yesterday"
},
]

const todayActivities = activities.filter(
    ({day})=> {return day==="today"}
).map((value)=> {
    return <ActivitiesContent icon={value.icon} usage={value.usage} status={value.status} money={value.money} />
})

const yesterdayActivities = activities.filter(
    ({day})=> {return day==="yesterday"}
).map((value)=> {
    return <ActivitiesContent icon={value.icon} usage={value.usage} status={value.status} money={value.money} />
})

const iconChoice = {
    "send" : <SendOutlinedIcon className="iconActivities"/>,
    "convert" : <RepeatOutlinedIcon className="iconActivities"/>,
    "buy" : <CreditCardOutlinedIcon className="iconActivities"/>,
    "deposit" : <AddBoxOutlinedIcon className="iconActivities"/>
}

function ActivitiesContent({icon, usage, status, money}) {
    return (
        <div className="activitiesContainer">
            <div className="activitiesInfo">
                {iconChoice[icon]}
                <div className="activitiesInfoText">
                    <div className="usage">{usage}</div>
                    <div className="status">{status}</div>
                </div>
            </div>
            <div className="money">{money}</div>
        </div>
    )
}


export default function Activities() {
    return (
        <div>
            <div className="activitiesTitle">
                <h2>Recent Activities</h2> <button className="reportBtn">View a report</button>
            </div>
            <div className="todayActivities">
                <div className="dayActivity">Today</div>
                {todayActivities}
            </div>
            <div className="todayActivities">
                <div className="dayActivity">Yesterday</div>
                {yesterdayActivities}
            </div>
        </div>
    )
}
