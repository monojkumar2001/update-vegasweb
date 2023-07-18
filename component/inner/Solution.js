import React,{useState,useEffect} from 'react'
import { useRouter } from 'next/router';
import axios from 'axios';

const Solution = ({title}) => {

    const [solution, setSolution] = useState([])
    const [loading, setLoading] = useState(true)
    const { pathname } = useRouter();
    const path = pathname.replaceAll("/", "");

    useEffect(() => {
        axios.get(`api/solution/${path}`).then(res => {
            setSolution(res.data.data)
            setLoading(false);
        })
    }, [])

    if(loading){
        return '';
    }

  return (
    <section >
        <div className='brand_Service cpt-6'   data-aos="fade-up"
            data-aos-duration="2000">
            <div className="container">
                <div className="web_dev_services_title  text-center">
                    <h1 className='section_title1'>{title}</h1> 
                    <h1 className='section_title1' ></h1>
                </div>

                            <div className="services_box cpt-7 align-items-center text-center">
                            {
                                solution.map(res => {
                                    return (
                                <div className="web_dev_service_box_item" key={res.slug}>
                                    <div className="serivce_box_item_logo">
                                        <img src={res.image} alt="vegas web"  width="60"  height="60"/>
                                    </div>
                                    <h3 >{res.title}</h3>
                                </div>
                                        )
                                    })
                                }
                
                            </div>
            </div>

        </div>
    </section>
  )
}

export default Solution