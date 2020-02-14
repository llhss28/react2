import React from "react"
import Product from "./product"
import vacationSpots from "./vacation"

function App(){
    const test = vacation.map(spots => <Product product = {spots}/>)

    return(
        <div>
            {test}
        </div>
    )
}

export default App
