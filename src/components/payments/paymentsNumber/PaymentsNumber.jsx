import React from 'react'
import './paymentsNumber.css'
import ErrorOutlinedIcon from '@mui/icons-material/ErrorOutlined';


export default function PaymentsNumber({number, status, alert}) {
    return (
        <div>
            <div className="paymentsStatus">
            <div className={alert ? "alertIcon": "hide"}>
                <ErrorOutlinedIcon style={{ color: "red" }}/>
            </div>
                <h2>{number}</h2>
                <div className="paymentStatusInfo">{status}</div>
            </div>
        </div>
    )
}
