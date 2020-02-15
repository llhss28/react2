import React from "react"
import Product from "./Product"
import vacationSpots from "./Vacation"

function App(){
    const test = vacationSpots.map(spots => <Product product = {spots}/>)

    return(
        <div>
            {test}
        </div>
    )
}

export default App
