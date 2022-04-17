import React, { useState }from 'react'
import './Card.css'

function card() {
    return (
        <><div className='Card'>
            <div className='upper-container'>
                <div className='image-container'></div>
                <img src=" " alt='' height="100px" width="100px" />
            </div>
        </div><div className="lower-container">
                <h3> {Name} </h3>
                <h4> {stream} </h4>
                <h5> {House} </h5>
            </div></>
    )
}