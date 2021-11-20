import React from 'react'
import PaymentsNumber from './paymentsNumber/PaymentsNumber'
import './payments.css'
import Money from './money/Money'

const paymentsInfo = [
    {
        "number":"8",
        "status":"Awaiting",
        "alert":false
    },
    {
        "number":"5",
        "status":"In Progress",
        "alert":true
    },
    {
        "number":"12",
        "status":"Completed",
        "alert":false
    },
    {
        "number":"4",
        "status":"Canceled",
        "alert":false
    },
]

const payments = paymentsInfo.map((val) => {
    return <PaymentsNumber number={val.number} status={val.status} alert={val.alert}/>
})

export default function Payments() {
    return (
        <div>
            <div className="paymentsContainer">
                <div className="paymentsTitleContainer">
                    <h2>Int. Payments</h2> <span className="paymentsInfo">the last 30 days</span>
                </div>
                <div className="paymentsStatusContainer">
                    {payments}
                </div>
            </div>
            <div className="moneysContainer">
                <Money status="in" money="6,000 USD"/>
                <Money status="out" money="4,000 USD"/>
            </div>
        </div>
    )
}
