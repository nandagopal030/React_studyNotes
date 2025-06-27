import React, { useMemo, useState } from 'react'

export const SortingMemo = () => {
   const [sortOrder,setSortOrder] = useState('asc');
   const [items,setItems] = useState([5,3,6,1,7,0]);

   //without memory and without using useMemo
//    const sortedItems = items.sort((a,b) =>{
//     console.log("Sorting items without memory");
//     return sortOrder === 'asc' ? a - b : b - a; 
//    })

//with storing the values in the memory and useMemo is being used
const sortedItems = useMemo(()=>{
    console.log("Sorting_itemssss.......");
    return items.slice().sort((a,b)=>{
        return  sortOrder === 'asc' ? a- b: b -a;
    })
},[items, sortOrder])

  return (
   <>
   <h1>Sortine example with usememo</h1>
   {sortedItems.map((item, index) => (
    <span key={index}>{item}</span>
   ))}
   <button
   onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
   >
     Toggle sorted order
   </button>

   
   </>
  )
}