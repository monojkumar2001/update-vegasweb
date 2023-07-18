import React,{useState,useEffect} from 'react'
import { useRouter } from 'next/router';
import axios from 'axios';

const Fashion = ({title, desccription}) => {

    const [fashion, setFashion] = useState([])
    const [loading, setLoading] = useState(true)
    const { pathname } = useRouter();
    const path = pathname.replaceAll("/", "");

    useEffect(() => {
        axios.get(`api/functional-design/${path}`).then(res => {
            setFashion(res.data.data)
            setLoading(false);
        })
    }, [])

    if(loading){
        return '';
    }
  return (
    <section >
        <div className="less_money cpt-6"   data-aos="fade-up"
            data-aos-duration="2000">
            <div className="container">
                    <div className="less_section_title text-center ">
                        <h1 className="section_title1">{title}</h1>
                        <p>{desccription}</p>
                    </div>
                    <div className="row  less_money_box">
                        {
                            fashion.map((res,index) => {
                                return (
                                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12" key={index}>
                                        <div className="less_money_box_item  align-items-center text-center">
                                            <div className="less_money_box_icons align-items-center text-center">
                                                <img src={res.image} alt="vegas Web" width={80}  height={80}/>
                                            </div>
                                            <div className="less_money_item_title">
                                                <h1>{res.title}</h1>
                                            </div>
                                            <p>{res.body}</p>
                                        </div>
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

export default Fashion