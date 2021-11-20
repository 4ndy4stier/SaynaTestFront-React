import React from 'react'
import TrendingDownOutlinedIcon from '@mui/icons-material/TrendingDownOutlined';
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';
import './money.css'
export default function Money({status, money}) {
    return (
        <div className="moneyContainer">
            <div className="moneyInfo">
                <div style={status === "in"? {display:"inline"}:{display:"none"}} >
                    <TrendingDownOutlinedIcon style={{color:"green"}} />
                </div>
                <div style={status === "out"? {display:"block"}:{display:"none"}} >
                    <TrendingUpOutlinedIcon style={{color:"red"}} />
                </div>
                <span style={status === "in"?{color:"green"}:{color:"red"}}>Money  </span>
            </div>
            
            <h2 className="moneyAmounts">{money}</h2>
        </div>
    )
}
