// Step 1: Import React
import * as React from 'react';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {useState} from 'react';
import Birth from "./info/birth";
import Marry from "./info/marry";
import Death from "./info/death";
import Provider from "./provider";



var buttonStyle = {
    textDecoration: "none",
    display: "inline-block",
    border: 0,
    backgroundColor: "transparent",
    marginBottom: "1rem",
    fontSize: "1.5rem"
}

var textStyle = {
    fontFamily: "Poppins",
    fontStyle: "normal", 
    fontWeight: 600,
    fontSize: "1.5rem",
    color: "#000000",
    display: "inline-block"
}

const monthNames = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
  "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"
];

const Filtre = (props) => {
    var date_var = new Date();
    const [date, setDate] = useState({
        month: date_var.getMonth(),
        year: date_var.getFullYear()
    });

    const getNextMonth = () => {
        var nextDate = date;
        if (nextDate.month === 11) {
            nextDate.month = 0
            nextDate.year++
        }
        else {
            nextDate.month++
        }
        setDate((prevDate) => ({
            ...prevDate,
            month: nextDate.month,
            year: nextDate.year
        }));
        console.log(date)
        console.log(monthNames[date.month])
    };

    const getPrevMonth = () => {
        var previDate = date;
        if (previDate.month === 0) {
            previDate.month = 11
            previDate.year--
        }
        else {
            previDate.month--
        }
        setDate((prevDate) => ({
            ...prevDate,
            month: previDate.month,
            year: previDate.year
        }));
    }

    return (
        <Provider.Provider value={date}>
            <div>
                <div style={{display: "flex", justifyContent: "center"}}>
                    <button style={buttonStyle} onClick={getPrevMonth}>&#8249;</button>
                        <p style={textStyle}>{monthNames[date.month]} {date.year}</p>
                    <button style={buttonStyle} onClick={getNextMonth}>&#8250;</button>
                </div>
                <div>
                    <Birth />
                    <Marry />
                    <Death />
                </div>
            </div>
        </Provider.Provider>
    )
}

export default Filtre;