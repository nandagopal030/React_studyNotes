import React from 'react'

// FUnctional Component

// function greet(){
//     return (
//         <h1>Hello banda</h1>
//     )
// }
export const Greet = props => {
   const {name, heroName} = props;    // methods to desrtucre props
    return (
        <div>
            <h1>Helloo {name} A.K.A {heroName}</h1>
            {/* {props.children} */}
        </div>
    )
}


// export default Greet;