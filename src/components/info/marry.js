import * as React from 'react';
import Provider from "../provider";
import marryJson from "../../data/marry.json";

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

const Marry = () => {
    const capitalize = (s) => {
        if (typeof s !== 'string') return ''
        return s.charAt(0).toUpperCase() + s.slice(1)
    }
    return (
        <Provider.Consumer>
            {
                date => (
                    <div>
                        <p style={textStyle}>&#128141; Mariages</p>
                        <ul>
                            {
                                marryJson.map(marry => {
                                    if (marry.month === date.month & marry.year === date.year){
                                        var day = marry.day
                                        var month = marry.month
                                        var year = marry.year
                                        return marry.data.map((person, index) => {
                                            var promo_wife = (person.promo_wife) ? "(promo " + person.promo_wife + ")" : ""
                                            var promo_husband = (person.promo_husband) ? "(promo " + person.promo_husband + ")" : ""
                                            return <li key={index}>{capitalize(person.firstname_wife)} {person.lastname_wife.toUpperCase()} {promo_wife} et {capitalize(person.firstname_husband)} {person.lastname_husband.toUpperCase()} {promo_husband}, le {day} {monthNames[month]} {year} à {capitalize(person.place)}</li>
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

export default Marry;