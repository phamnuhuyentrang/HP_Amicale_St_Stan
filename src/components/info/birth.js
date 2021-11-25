import * as React from 'react';
import Provider from "../provider";
import birthJson from "../../data/birth.json";

const textStyle = {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "1.5rem",
    lineHeight: "1rem",
    color: "#92969D"
}

const monthNames = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
"Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"
];
const Birth = (props) => {
    const capitalize = (s) => {
        if (typeof s !== 'string') return ''
        return s.charAt(0).toUpperCase() + s.slice(1)
    }
    return (
        <Provider.Consumer>
            {
                date => (
                    <div>
                        <p style={textStyle}>&#128035; Naissances</p> 
                        <ul>
                            {
                                birthJson.map(birth => {
                                    if (birth.month === date.month & birth.year === date.year){
                                        var day = birth.day
                                        var month = birth.month
                                        var year = birth.year
                                        return birth.data.map((person, index) => {
                                            var promo_mom = (person.promo_mom) ? "(promo " + person.promo_mom + ")" : ""
                                            var promo_dad = (person.promo_dad) ? "(promo " + person.promo_dad + ")" : ""
                                            return <li key={index}>{capitalize(person.firstname)} au foyer de {capitalize(person.firstname_mom)} {person.lastname_mom.toUpperCase()} {promo_mom} et {capitalize(person.firstname_dad)} {person.lastname_dad.toUpperCase()} {promo_dad}, le {day} {monthNames[month]} {year}</li>
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

export default Birth;