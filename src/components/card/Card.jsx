import React, {useCallback, useState} from 'react'
import TollIcon from '@mui/icons-material/Toll';
import './card.css'

export default function Card(props) {

    const [highlight, setHighlight] = useState(false)
    const handleClick = useCallback(() => {
        setHighlight((prev)=>!prev)
    }, [])
    return (
        <div className={highlight? "cardHighlighted":"card"} onClick={handleClick}>
            <TollIcon className="bankIcon"/>
            <div className="moneyAmount">{props.money}</div>
            <div className="cardNumber">{props.number}</div>
            <div className="date">{props.date}</div>
        </div>
    )
}
