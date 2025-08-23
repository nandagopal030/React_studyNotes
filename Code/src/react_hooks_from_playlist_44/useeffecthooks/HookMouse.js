import { useState, useEffect } from "react"

function HookMouse() {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const logMousePosition = e => {
        console.log("Mouse Event");
        setX(e.clientX);
        setY(e.clientY);
    }
    useEffect(() => {
        console.log("UseEffect triggered");
        window.addEventListener('mousemove', logMousePosition);
        return () =>{
            console.log("component unmounting" )
            window.removeEventListener("mousemove", logMousePosition)
        }
    }, [])
    return (
        <div>
            <h1>Your X position is {x} and Your Y position is {y}</h1>
        </div>
    )
}

export default HookMouse
