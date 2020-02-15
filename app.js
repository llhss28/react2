import React from "react"
import Friend from "./Friend"
import pets from "./pets"

function App(){
    const friends = pets.map(friend => <Friend name = {friend.name} age = {friend.age}  pets = {friend.pets}/>)

    return(
        <div>
            {friends}
        </div>
    )
}

export default App
