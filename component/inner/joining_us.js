import React,{useState,useRef} from "react";
import {FaLongArrowAltRight} from "react-icons/fa";



const joining_us = () => {
    
    const videoRef = useRef();
    const [stop, setStop] = useState(false);
    const handleVideo = () => {
        setStop(!stop);
        if (stop === true) {
            videoRef.current.pause();
        } else {
            videoRef.current.play();
        }
    };
  
  return (
        <div className="today cmt-8">
           <div className="container">
                <div className="today_title text-center">
                    <h1 className="section_title1">Millions Of people Joining Us Today</h1>
                </div>
                <div className="today_box cmt-5  ">
                    <div className="today_box_left ">
                        <div className="today_box_left_title ">
                            <div className="today_box_left_title_items today_box_left_title_items_border">
                                <h1 className="section_title1">01</h1>
                            </div>
                            <div className="today_box_left_title_items_title ">
                                <h1 className="section_title1">Fill in your brief</h1>
                                <h3 className="section_title3">Launching a new brand or start up? Do you want to increase ROAS? Do you need to ramp up new client acquisition? Use a simple form to tell us exactly what you need, and then leave the hard work to us.</h3>
                            </div>
                        
                        </div>
                        <div className="today_box_left_title ">
                            <div className="today_box_left_title_items today_box_left_title_items_border">
                                <h1 className="section_title">02</h1>
                            </div>
                            <div className="today_box_left_title_items_title ">
                                <h1 className="section_title1">Get matched</h1>
                                <h3 className="section_title3">In order to find the ideal match to smoothly integrate with your business demands, our AI will draw on our 600+ global network of experts each of whom has undergone a comprehensive vetting process.</h3>
                            </div>
                        
                        </div>
                        <div className="today_box_left_title ">
                            <div className="today_box_left_title_items">
                                <h1 className="section_title1">03</h1>
                            </div>
                            <div className="today_box_left_title_items_title">
                                <h1 className="section_title1">Manage your team</h1>
                                <h3 className="section_title3"> We cordially encourage your team to collaborate on client projects, advertising campaigns, or product designs with our designers.</h3>
                            </div>
                        
                        </div>
                    </div>
                    <div className="today_box_right ">
                        <div className="today_box_right_video ">
                            <video ref={videoRef} src="https://res.cloudinary.com/dtga9clmy/video/upload/v1679725908/Vegas_Promotion_Video_1_xt5hj3.mp4" width={400} height={400}></video>
                            <div className="today_box_right_video_btn text-center align-items-center">
                                <button onClick={handleVideo}>How it works <FaLongArrowAltRight/></button>
                            </div>
                        </div>
                        
                    </div>

                </div>
        </div>  
    </div>

  )
}

export default joining_us