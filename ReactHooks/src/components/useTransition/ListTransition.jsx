 import React, { useState, useTransition } from 'react'

export const ListTransiton = () => {
    const [searchItem, setSearchItem] = useState('');
    const [list ,  setList ] = useState (
        Array.from({length : 20000},(_,i) => `item ${i + 1}`)
    )
    const [filteredList, setFilteredList] = useState(list);
    const [isPending, startTransition] = useTransition();

    const handleChange =(e) =>{
        const value = e.target.value;
        setSearchItem(value);
        //This Transition is not the main priority
        startTransition(() => {
            const filtered = list.filter((item) =>
            item.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredList(filtered);
        })
    }

  return (
    <>
    <h1>uisng the useTransition Example</h1>
    <input type="text"
     placeholder='search....'
     onChange={handleChange}
     value={searchItem}
     />
     {isPending && <p>Loading...</p>} {''}
     {filteredList.map((item,index) =>(
        <p key={index}>{item}</p>
     ))}
    </>
  )
}
