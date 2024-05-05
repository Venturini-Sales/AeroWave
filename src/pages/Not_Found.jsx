import React from "react";
import './Not_Found.css'


export const NotFound = () => {

    return (

        <div className="notFound">
            
            <div className="aerowaveMessage">
                AeroWave
            </div>
            
            <div className="errorMessage">
                <p>It seems a problem has been detected and the page has not found. To avoid any confusion, AeroWave sends you this message.</p>
                <p>ERR_404</p>
                <p>* Press ctrl + f5 to try to solve the problem.</p>
                <p>* If the solution above doesn't work, press any of the buttons in the navigation bar at the top of the site, or try changing the URL path</p>
            </div>

         </div>
 
    )

}

export default NotFound