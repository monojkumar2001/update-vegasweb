import React from 'react'
import CompaniesStar from './CompaniesStar'
import CompaniesIcon from './CompaniesIcon'
import GrowTeam from '../growTeam/GrowTeam'

const Companies = () => {
  return (
    <section className='cpt-6 companies-wrapper'    data-aos="fade-up"
    data-aos-duration="2000">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-md-12">
                <div className="companies-left">
                    <h1 className="companies-title section_title1">
                    Join the world's fastest-growing companies
                    </h1>
                    <div className="companies-review">
                      <CompaniesStar/>
                      <p>4.6/5 rating from</p>
                      <p>462 reviews <img src="./Images/about/companies/right-arrow.svg" alt="" /></p>
                    </div>
                </div>
                </div>
                <div className="col-lg-6 col-md-12">
                   <div className="companies-right row">
                   <CompaniesIcon/>
                   </div>
                </div>
            </div>
        </div>
        <GrowTeam/>
    </section>
  )
}

export default Companies