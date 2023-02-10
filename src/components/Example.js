import React from 'react'

const Example = ({mean}) => {
  return (
    <div>
        {
           mean.map((item)=>item.meanings.map((val)=>val.definitions.map((def,index)=>{
            return <div key={def.definition}><li key={index}>{def.definition}</li></div> 
           })))
        }
    </div>
  )
}

export default Example