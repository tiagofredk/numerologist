import React from 'react'
import usa from '../images/usa.png'
import bra from '../images/brazil-48.png'
import { NavLink } from 'react-router-dom'

export default function Header() {

    function flagSelector() {

        if (window.location.pathname === "#/br") {
            let logoBR = bra
            return logoBR;
        } else {
            let logoUSA = usa;
            return logoUSA;
        };
    }
    console.log(window.location.pathname)
    return (
        <div className="header">
            <nav>
                <div className="lang-menu">
                    <div className="selected-lang" id="sel-lang">
                        <img src={flagSelector()} width="32" alt="32" />
                    </div>
                    <ul>
                        <li>
                            <NavLink to="/br"><img src={bra} width="32" alt="32" />Portugues</NavLink>
                        </li>
                        <li>
                            <NavLink to="/"><img src={usa} width="32" alt="32" />English</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
