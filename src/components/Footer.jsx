import React from "react";


function Footer(){

    const time = new Date();
    const year = time.getFullYear();


    return(
        <div>
            <footer>
                copyright © {year}
            </footer>
        </div>
    )
}

export default Footer