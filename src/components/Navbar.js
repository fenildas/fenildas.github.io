import React from 'react'
import {Nav}  from 'react-bootstrap'
import '../App.css'

function navbar() {
    return (
        <header id="header" style={{backgroundColor:'black'}} className="fixed-top d-flex justify-content-center align-items-center header-transparent">

            <Nav className="navbar">
                <div className='container-fluid' >
                    <ul className=''>
                        <li className='nav-item'><a class="nav-link scrollto active" aria-current="page" href="#">Home</a></li> 
                        <li className='nav-item'><a class="nav-link scrollto" href="#">About</a></li> 
                        <li className='nav-item'><a class="nav-link scrollto" href="#">Resume</a></li> 
                        <li className='nav-item'><a class="nav-link scrollto" href="#">Projects</a></li> 
                        <li className='nav-item'><a class="nav-link scrollto" href="#">Contact</a></li> 
                    </ul>

                </div> 
            </Nav>
        </header>
    )
}

export default navbar
