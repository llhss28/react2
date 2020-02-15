import React from "react"

function Friend(props){
    const pets = props.pets.map(pet => {
        return (<div>
        <p>name: {pet.name}</p>
        <p>breed: {pet.breed}</p>
        </div>)
    })
    return(
        <div>
            <p>{props.name}</p>
            <p>{props.age}</p>
            <p>{pets}</p>
        </div>
    )
}

export default Friend