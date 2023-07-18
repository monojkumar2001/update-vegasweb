import React from "react"
import Link from 'next/link';

const project_contact = () => {
  return (
        <div className="project_contact cpt-6"    data-aos="fade-up"
        data-aos-duration="2000">
            <div className="container">
                <div className="project_contact_box">
                    <div className="project_contact_box_title">
                        <h1 className="section_title1">Is Your Project Not on the List?</h1>
                        <div className="project_contact_box_disc">
                            <p>If you can describe it, chances are your dedicated team can create it, feel free to send us a message to confirm </p>
                        </div>
                        <div className="project_contact_box_contact">
                            <Link href={'/Contact'} className="fa-solid fa-right-long">Contact Us</Link>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
  )
}

export default project_contact