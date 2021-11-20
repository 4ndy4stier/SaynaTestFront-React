import React from 'react'
import './createCard.css'
import AddToPhotosOutlinedIcon from '@mui/icons-material/AddToPhotosOutlined';
// import Button from 'react-bootstrap/Button';

export default function CreateCard() {
    return (
        <div className="container-top">
            <h1>Your Cards</h1>
            <button> <AddToPhotosOutlinedIcon /> New Card</button>
        </div>
    )
}
