import React from "react";

const Hello = () => {
    // React with Jsx
    // return (
    //     <div className: 'hello'>
    //         <h1>Hello i am returened from react as a  jsx format</h1>
    //     </div>
    // )

    //React without jsx
    return React.createElement('div',
        null,
        React.createElement('h1',
            {id:'hello', className:'world'},
            "I am a default return core js and not from jsx"));
}

export default Hello;