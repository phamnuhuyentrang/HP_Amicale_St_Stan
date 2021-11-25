// Step 1: Import React
import * as React from 'react';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Filtre from "./filtre";

// Step 2: Define your component
const styleContainer = {
    backgroundColor: "#F8FBFF",
    position: "relative"
}

const styleText = {
    fontFamily: "Poppins",
    fontStyle: "Normale",
    fontSize: "3rem",
    fontHeight: "3.5rem",
    fontWeight: "600",
    color: "#1E266D",
    alignItems: "center"
}


const Layout = () => {
    return (
        <div>
            <div className="container" style={styleContainer}>
                <div className="col text-center" style={styleText}>New des Anciens</div>
                <hr style={{color: "#FBC917",
                            backgroundColor: "#FBC917",
                            height: "0.3rem",
                            marginLeft: "42%",
                            marginRight: "42%",
                            top: 0}}/>
            </div>
            <div className="row">
                <div className="col-sm-8">
                    <Filtre />
                </div>
                <div className="col-sm-4"></div>
            </div>
        </div>
    )
}

export default Layout;