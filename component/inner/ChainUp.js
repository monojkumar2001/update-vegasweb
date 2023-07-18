import React from "react";
import CountUp from "react-countup";
import Image from 'next/image';
const ChainUp = () => {

  return (
   
    <div className="data_center cpy-8">
        <div className="container">
            <div className="data_center_box row">
                <div className="col-xl-6 cl-lg-6 col-md-12 col-sm-12  data_center_left"    data-aos="fade-up"
            data-aos-duration="2000">
                    <Image width={614} height={627} src="../Images/ChainUp/chainUp.svg" alt="vages Web"/>
                </div>
                <div className="col-xl-6 cl-lg-6 col-md-12 col-sm-12 data_center_right"    data-aos="fade-up"
            data-aos-duration="2500">
                    <div className="data_center_title align-items-center">
                        <h1 className="section_title1">ChainUP Data Center Worldwide</h1>
                    </div>
                    <div className="row gap-4 data_center_right_box">
                        <div className="col data_center_box_items align-items-center">
                            <Image src="../Images/ChainUp/1.svg" alt="vages Web" width="61" height="61"/>
                            <div className="data_center_box_items_title">
                                   <span><CountUp end={500} duration={5} /> +</span>
                                        
                                <h2 className="section_title2">Served Clients</h2>
                            </div>
                        </div>
                        <div className="col data_center_box_items align-items-center">
                            <Image src="../Images/ChainUp/2.svg" alt="vages Web" width="61" height="61"/>
                            <div className="data_center_box_items_title">
                                <span><CountUp end={100} duration={5} /> +</span>
                                        
                                <h2 className="section_title2">Financial Detervative Clients</h2>
                            </div>
                        </div>
                        <div className="col data_center_box_items align-items-center">
                            <Image src="../Images/ChainUp/3.svg" alt="vages Web" width="61" height="61"/>
                            <div className="data_center_box_items_title ">
                                     <span><CountUp end={600} duration={5} /> +</span>
                                       
                                <h2 className="section_title2">Campaign Launched</h2>
                            </div>
                        </div>
                        <div className="col data_center_box_items align-items-center">
                            <Image src="../Images/ChainUp/4.svg" alt="vages Web" width="61" height="61"/>
                            <div className="data_center_box_items_title">
                                     <span><CountUp end={200} duration={5} /> +</span>
                                        
                                <h2 className="section_title2"> B2B Clients</h2>
                            </div>
                        </div>
                        <div className="col data_center_box_items align-items-center">
                            <Image src="../Images/ChainUp/5.svg" alt="vages Web" width="61" height="61"/>
                            <div className="data_center_box_items_title">
                                     <span><CountUp end={300} duration={5} /> +</span>
                                       
                                <h2 className="section_title2">Served Start Ups</h2>
                            </div>
                        </div>
                        <div className="col data_center_box_items align-items-center">
                            <Image src="../Images/ChainUp/6.svg" alt="vages Web" width="61" height="61"/>
                            <div className="data_center_box_items_title">
                                     <span><CountUp end={60} duration={5} /> +</span>
                                       
                                <h2 className="section_title2">Countries & Region</h2>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default ChainUp