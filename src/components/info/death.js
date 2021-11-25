import * as React from 'react';
import Provider from "../provider";
import deathJson from "../../data/death.json";

const textStyle = {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "1.5rem",
    lineHeight: "1rem",
    color: "#92969D",
}

const monthNames = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
"Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"
];

const Death = () => {
    const capitalize = (s) => {
        if (typeof s !== 'string') return ''
        return s.charAt(0).toUpperCase() + s.slice(1)
    }
    return (
        <Provider.Consumer>
            {
                date => (
                    <div>
                        <p style={textStyle}><span style={{fontSize: "2.2rem", lineHeight: "1", verticalAlign: "middle"}}>&#10014;</span> Décès</p>
                        <ul>
                            {
                                deathJson.map(death => {
                                    if (death.month === date.month & death.year === date.year){
                                        var day = death.day
                                        var month = death.month
                                        var year = death.year
                                        return death.data.map((person, index) => {
                                            var promo = (person.promo) ? "(promo " + person.promo + ")" : ""
                                            return <li key={index}>{capitalize(person.firstname)} {person.lastname.toUpperCase()} {promo}, le {day} {monthNames[month]} {year} à {capitalize(person.place)}</li>
                                        })
                                    }
                                })
                            }
                        </ul>
                    </div>
                )
            }
        </Provider.Consumer>
    )
}

export default Death;