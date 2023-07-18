import React from 'react'
import FactsCard from './FactsCard'


const Facts = () => {
  return (
    <>
    <div className="section cpt-6"   data-aos="fade-up"
            data-aos-duration="2000">
        <div className="container">
            <h1 className="fact-title section_title1 cpb-7">
            Vegas Web  Facts
            </h1>
            <div className="facts-content-wrapper">
                    <FactsCard factItem={factItem}/>             
            </div>
        </div>
    </div>
    </>
  )
}

export default Facts;

const factItem=[
    {
        id:1,
        names:'Our A.I. automatically assigns the best creative for every project.',
        image:"Images/about/fact-1.svg",
    },
    {
        id:2,
        names:'Manage everything on a simple platform with realtime progress updates',
        image:"Images/about/fact-2.svg",
     
     
    },
    {
        id:3,
        names:'Our goal is to make  perfect an impact,not only  impression.',
        image:"Images/about/fact-3.svg",
    },
    {
        id:4,
        names:'Always go the extra mile to deliver exceptional quality work.',
        image:"Images/about/fact-4.svg",
    }
]