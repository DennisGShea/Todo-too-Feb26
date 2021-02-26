import React from 'react' 
import DogeImage from "./dogeimage";

/* function Doge({name}) {
    return <p>Good, good Bois!{name}  ☺️</p>
}

*/

const Doge = (props) => {
    
    const {doges} = props;
    
    return( 
        <>
            { doges && doges.map(doge =>
            <>
                <p key={doge.id}>{doge.name} is a {doge.breed}</p>
                <span></span> 
                </>
                )}
                
        </>
    )
}




export default Doge