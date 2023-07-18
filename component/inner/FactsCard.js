import React from 'react'
import Image from 'next/image';
const FactsCard = ({factItem}) => {
  return (
    <>
    {
      factItem.map((item, i)=>{
        return(
          <div className="facts-card-item facts-card-item-reverse" key={i}>
          <p>{item.names}</p> 
          <div className="fact-icon">
            <Image width={51} height={51} src={item.image} alt="" />
          </div>
        </div>
        )
      })
    }  
    </>
  )
}

export default FactsCard;

