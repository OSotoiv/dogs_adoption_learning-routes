import React from "react";
import { NavLink } from 'react-router-dom'

const DogNav = ({ dogs }) => {
    return (
        <nav>
            <div className="logo"><NavLink to='/'>Dogs</NavLink ></div>
            <ul>
                {dogs.map(dog => {
                    return <li key={dog.name}><NavLink to={dog.src}>{dog.name}</NavLink></li>
                })
                }
            </ul>
        </nav>
    )
}
export default DogNav;
