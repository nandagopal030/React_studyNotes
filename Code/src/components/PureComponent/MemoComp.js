import React from 'react'

function MemoComp({name}) {
  return (
    <div>
        Memo COponent
        <h1>{name}</h1>
      
    </div>
  )
}

export default React.memo(MemoComp)    //Higher order component a component which is capable of rerender that is React.memo()
