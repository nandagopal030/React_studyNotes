import React, { useState } from 'react'

function FunctionalArrayHooks() {
    const [items, setItem] = useState([]);
    const handlenums = () => {
        setItem([...items, {
            id: items.length,
            value: Math.floor(Math.random() * 10) + 1
        }])
    }
    return (
        <div>
            <button onClick={handlenums}>Add a number</button>
            {items.map(item => (
                <li key={item.id}>{item.value}</li>
            ))}
        </div>
    )
}

export default FunctionalArrayHooks
