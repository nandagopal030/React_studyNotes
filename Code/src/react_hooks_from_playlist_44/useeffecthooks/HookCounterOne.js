import React, { useEffect, useState } from 'react'

function HookCounterOne() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');
    useEffect(() => {
        console.log("USeEffect updating the document title")
        document.title = `You had clicked ${count} many times`
    }, [count])
    return (
        <div>
            <input type='text'
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <button onClick={() => setCount(count + 1)}>Click me {count}</button>
        </div>
    )
}

export default HookCounterOne;
