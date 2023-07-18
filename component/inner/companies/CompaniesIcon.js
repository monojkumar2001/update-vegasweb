import React from 'react';
const CompaniesIcon = () => {
  return (
<>
{
    CompaniesIcons.map((item, i)=>{
        return(
                <div className="col-lg-3 col-md-4 col-sm-6 col-6" key={i}>
                    <img src={item.icon} alt="" />
                </div>
        )
    })
}
</>
  )
}

export default CompaniesIcon;

const CompaniesIcons=[
    {
        id:1,
        icon:'/Images/about/companies/1.svg'
    },
    {
        id:2,
        icon:'/Images/about/companies/2.svg'
    },
    {
        id:3,
        icon:'/Images/about/companies/3.svg'
    },
    {
        id:4,
        icon:'/Images/about/companies/4.svg'
    },
    {
        id:5,
        icon:'/Images/about/companies/5.svg'
    },
    {
        id:6,
        icon:'/Images/about/companies/6.svg'
    },
    {
        id:7,
        icon:'/Images/about/companies/7.svg'
    },
    {
        id:8,
        icon:'/Images/about/companies/8.svg'
    },
    {
        id:9,
        icon:'/Images/about/companies/9.svg'
    },
    {
        id:10,
        icon:'/Images/about/companies/10.svg'
    },
    {
        id:11,
        icon:'/Images/about/companies/11.svg'
    },
    {
        id:12,
        icon:'/Images/about/companies/12.svg'
    },
]