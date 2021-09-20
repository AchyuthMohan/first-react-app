import React from 'react'
import count from './App'

function counter({title,...obj}) {
    
    return (
        <div>
            <h1>{title}{count}</h1>
            
        </div>
    )
}

export default counter
