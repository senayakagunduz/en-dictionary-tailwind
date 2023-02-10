import React from "react";

const MeaningList = ({ mean }) => {
  console.log(mean);
  return <div>
    {
        mean.map((value)=>value.meanings.map((item)=>item.definitions.map((def)=>{
            return <li key={def.definition}>{def.definition}</li>
        })))
    }
    </div>;
};

export default MeaningList;
