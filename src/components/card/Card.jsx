import React from 'react'
import TollIcon from '@mui/icons-material/Toll';
import './card.css'

export default function Card(props) {
    return (
        <div className="cardContainer">
            <TollIcon />
            <div className="moneyAmount">{props.money}</div>
            <div className="cardNumber">{props.number}</div>
            <div className="date">{props.date}</div>
        </div>
    )
}
