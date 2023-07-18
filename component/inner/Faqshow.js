import React,{useState,useEffect} from 'react'
import Faq from "react-faq-component";
import { useRouter } from 'next/router';
import axios from 'axios';
import Link from 'next/link';
import Image from 'next/image';

const Faqshow = () => {
    const [faq, setFaq] = useState([])
    let path = '';
    const { pathname } = useRouter();
    if(pathname == '/'){
        path = 'home';
    }else{
        path = pathname.replaceAll("/", "");
    }

    useEffect(() => {
        axios.get(`api/faq/${path}`).then(res => setFaq(res.data.data))
    }, [pathname])

    const data = {
        title: "",
        rows: faq,
    };

    const styles = {
        titleTextColor: "blue",
        rowTitleColor: "blue",
        rowContentColor: 'grey',
        arrowColor: "#FD5444",
    };
    const config = {
        animate: true,
        tabFocus: true
    };

  return (
    <section>
       <div className="cpt-6"    data-aos="fade-up"
            data-aos-duration="2000">             
           <div className="container">
           <div className="row g-4">
            <div className="col-lg-5 col-md-12">
            <div className="left-faq">
                <h2>Frequently Asked Questions</h2>
                <p>If you can not find what you are looking for <Link className="faq-link" href="/Contact">send us a message!</Link></p>
                <Image width={210} height={217} src="Images/faq.svg" className="faq-image" alt=""/>
                </div>
            </div>
            <div className="col-lg-7 col-md-12">
            <Faq
                    data={data}
                    styles={styles}
                    config={config}
                    />
            </div>
           </div>
           </div>
            
       </div>
   </section>
  )
}

export default Faqshow