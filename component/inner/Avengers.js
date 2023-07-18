import React from 'react'
import AvengerCard from './AvengerCard'

const Avengers = ({title}) => {
  return (
    <>
    <div className="section cpt-6"   data-aos="fade-up"
            data-aos-duration="2000">
        <div className="container">
            <div className="avenger-wrapper">
                <div className="avenger-title cpb-7">
                    <h1 className='section_title1'>{title}</h1>
                </div>
                <div className="avenger-item-cards row d-flex align-items-center justify-content-center">
                    <AvengerCard/>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Avengers