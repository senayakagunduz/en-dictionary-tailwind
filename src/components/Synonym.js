import React from 'react'

const Synonym = ({mean}) => {
  return (
    <div className=''>
        {mean.map((item)=>item.meanings.map((value,index)=>{ 
            return <li key={index}>{value.synonyms}</li>}))}
    </div>
  )
}

export default Synonym