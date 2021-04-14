import React from "react";


function Footer(){

    const time = new Date();
    const year = time.getFullYear();


    return(
        <>
            <footer>
                copyright © {year}
            </footer>
        </>
    )
}

export default Footer