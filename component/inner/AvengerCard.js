import React from 'react'

const AvengerCard = () => {
  return (
   <>
   {
    avengerItem.map((item, i)=>{
        return(
         <div className="col-lg-3 col-md-4 col-sm-12">
               <div className="avenger-card" key={i}>
                <div className="avenger-img">
                    <img src={item.image} alt="" />
                </div>
                <h4 className='avenger-name'>{item.names}</h4>
                <span className='avenger-job-title'>{item.jobTitle}</span>
                <div className="avenger-social-link-items">
                    <div className="avenger-link-item">
                        <a href={item.urlfb} target='_blank'>
                            <img src={item.facebook} alt="" />
                        </a>
                    </div>
                    <div className="avenger-link-item">
                        <a href={item.urltw} target='_blank'>
                            <img src={item.twitter} alt="" />
                        </a>
                    </div>
                    <div className="avenger-link-item">
                        <a href={item.urllin} target='_blank'>
                        <img src={item.linkedin} alt="" /> 
                        </a>
                    </div>
                </div>
            </div>
         </div>
        )
    })


   }
   </>
  )
}

export default AvengerCard;

const avengerItem=[
    // {
    //     id:1,
    //     image:"Images/about/avenger-1.svg",
    //     names:"CEO",
    //     jobTitle:"Front end developer",
    //     urlfb:'https://www.facebook.com/',
    //     urltw:"https://www.twiter.com/",
    //     urllin:"https://linkedin.com/",
    //     facebook:'Images/about/facebook.svg',
    //     twitter:"/Images/about/twitter.svg",
    //     linkedin:"Images/about/linkedin.svg"

    // },
    // {
    //     id:2,
    //     image:"Images/about/avenger-2.svg",
    //     names:"M. Ahmed",
    //     jobTitle:"UI UX Designer",
    //     urlfb:'https://www.facebook.com/',
    //     urltw:"https://www.twiter.com/",
    //     urllin:"https://linkedin.com/",
    //     facebook:'Images/about/facebook.svg',
    //     twitter:"Images/about/twitter.svg",
    //     linkedin:"Images/about/linkedin.svg"
    // },
    // {
    //     id:3,
    //     image:"Images/about/avenger-3.svg",
    //     names:"Nadeem Ahmed",
    //     jobTitle:"Front end developer",
    //     urlfb:'https://www.facebook.com/',
    //     urltw:"https://www.twiter.com/",
    //     urllin:"https://linkedin.com/",
    //     facebook:'Images/about/facebook.svg',
    //     twitter:"Images/about/twitter.svg",
    //     linkedin:"Images/about/linkedin.svg"
    // },
    // {
    //     id:4,
    //     image:"Images/about/avenger-4.svg",
    //     names:"M. Rippon",
    //     jobTitle:"Front end developer",
    //     urlfb:'https://www.facebook.com/',
    //     urltw:"https://www.twiter.com/",
    //     urllin:"https://linkedin.com/",
    //     facebook:'Images/about/facebook.svg',
    //     twitter:"Images/about/twitter.svg",
    //     linkedin:"Images/about/linkedin.svg"
    // },
    // {
    //     id:5,
    //     image:"Images/about/avenger-5.svg",
    //     names:"Surjo",
    //     jobTitle:"Graphic Designer",
    //     urlfb:'https://www.facebook.com/',
    //     urltw:"https://www.twiter.com/",
    //     urllin:"https://linkedin.com/",
    //     facebook:'Images/about/facebook.svg',
    //     twitter:"Images/about/twitter.svg",
    //     linkedin:"Images/about/linkedin.svg"
    // },
    // {
    //     id:6,
    //     image:"Images/about/avenger-6.svg",
    //     names:"Monoj Kumar",
    //     jobTitle:"Front end developer",
    //     urlfb:'https://www.facebook.com/',
    //     urltw:"https://www.twiter.com/",
    //     urllin:"https://linkedin.com/",
    //     facebook:'Images/about/facebook.svg',
    //     twitter:"Images/about/twitter.svg",
    //     linkedin:"Images/about/linkedin.svg"
    // },
    // {
    //     id:7,
    //     image:"Images/about/avenger-7.svg",
    //     names:"Ehtisham Ifti",
    //     jobTitle:"Motion Graphics & Video Editor",
    //     urlfb:'https://www.facebook.com/',
    //     urltw:"https://www.twiter.com/",
    //     urllin:"https://linkedin.com/",
    //     facebook:'Images/about/facebook.svg',
    //     twitter:"Images/about/twitter.svg",
    //     linkedin:"Images/about/linkedin.svg"
    // }
]