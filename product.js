import React from "react"

function product(props){
    return(
        <div>
            <h1>{props.product.place}</h1>
            <p>{props.product.price}</p>
            <p>{props.product.timeToGo}</p>
        </div>
    )
}

export default product