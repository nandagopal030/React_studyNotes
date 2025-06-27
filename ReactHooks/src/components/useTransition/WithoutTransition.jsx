import React, { useState } from 'react'

export const WithoutTransition = () => {
    const [searchItem, setSearchItem] = useState('');
    const [list ,  setList ] = useState (
        Array.from({length : 20},(_,i) => `item ${i + 1}`)
    )
    const [filteredList, setFilteredList] = useState(list);
    const handleChange =(e) =>{
        const value = e.target.value;
        setSearchItem(value);
        const filtered = list.filter((item) =>
            item.toLowerCase().includes(value.toLowerCase())
    );
        setFilteredList(filtered);
    }
  return (
    <>
    <h1>Without uisng the useTransition Example</h1>
    <input type="text"
     placeholder='search....'
     onChange={handleChange}
     value={searchItem}
     />
     {filteredList.map((item,index) =>(
        <p key={index}>{item}</p>
     ))}
    </>
  )
}
