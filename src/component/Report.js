import { meaning as meaning_en } from "./meaning_en";
import { meaning_pt } from "./meaning_pt";
import React, { useEffect } from 'react'
import { useLocation, Link } from "react-router-dom";
import Logo from "../images/Logo.png"

function Report() {

    const location = useLocation();
    const meaning = location.pathname === "/report/br" ? meaning_pt : meaning_en;

    useEffect(() => {
        localStorage.clear()
    });

    return (
        <div className="reportPage">
            <header>
                <Link to="/"> <img src={Logo} width="62" alt="62" /></Link>
            </header>

            <div className="analise">

                <h1 className="reporth1">Report</h1>

                <h2 id="allname">{localStorage.name}</h2>

                <div className="destiny">

                    <div className="ball">
                        <p id="balldestiny">{localStorage.destiny} </p>
                    </div>

                    <div className="content">
                        <p id="destiny">{localStorage.destiny}</p>
                        <p id="destinydes">{meaning.destiny.description} </p>
                        <p id="destinyre">{meaning.destiny[localStorage.destiny]} </p>
                    </div>

                </div>

                <div className="personality">

                    <div className="ball">
                        <p id="ballpersonality">{localStorage.personality} </p>
                    </div>

                    <div className="content">
                        <p id="personality">{localStorage.personality} </p>
                        <p id="personalitydes">{meaning.personality.description} </p>
                        <p id="personalityre">{meaning.personality[localStorage.personality]} </p>
                    </div>

                </div>

                <div className="heart">

                    <div className="ball">
                        <p id="ballheart">{localStorage.heart} </p>
                    </div>

                    <div className="content">
                        <p id="heart">{localStorage.heart} </p>
                        <p id="heartdes">{meaning.heart.description} </p>
                        <p id="heartre">{meaning.heart[localStorage.heart]} </p>
                    </div>

                </div>

                <div className="origin">

                    <div className="ball">
                        <p id="ballorigin">{localStorage.origin} </p>
                    </div>

                    <div className="content">
                        <p id="origin">{localStorage.origin} </p>
                        <p id="origindes">{meaning.origin.description} </p>
                        <p id="originre">{meaning.origin[localStorage.origin]} </p>
                    </div>
                </div>

                <div className="day">

                    <div className="ball">
                        <p id="ballday">{localStorage.day} </p>
                    </div>

                    <div className="content">
                        <p id="day">{localStorage.day} </p>
                        <p id="daydes">{meaning.day.description} </p>
                        <p id="dayre">{meaning.day[localStorage.day]} </p>
                    </div>

                </div>

                <div className="firstvowel">

                    <div className="ball">
                        <p id="ballfirstvowel">{localStorage.firstvowel} </p>
                    </div>

                    <div className="content">
                        <p id="firstvowel">{localStorage.firstvowel} </p>
                        <p id="firstvoweldes">{meaning.vowel.description} </p>
                        <p id="firstvowelre">{meaning.vowel[localStorage.firstvowel]} </p>
                    </div>

                </div>


            </div>
        </div>
    )

}

export default React.memo(Report);