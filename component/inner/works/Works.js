import React from 'react'
import WorksCard from './WorksCard'

const Works = () => {
  return (
    <section className='cpy-6 works-con'   data-aos="fade-up"
    data-aos-duration="2000">
        <div className="container">
            <div className="works-wrapper">
                <div className="works-content-title">
                    <h1 className="section_title1 cpb-7">How Does It Works</h1>
                </div>
                <div className="works-card-items row">
                    <WorksCard/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Works