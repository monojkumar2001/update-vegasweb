import React from "react"
import Image from 'next/image';

const Brands = () => {
  return (

        <div  className="Brands cpt-6"   data-aos="fade-up"
        data-aos-duration="2000">
            <div className="container">
                <div className="Brands_container  ">
                    <div className="Brands_title text-center">
                        <h1 className="section_title1">Trusted By Thousands  Of Major Brands Worldwide </h1>
                    </div>
                    <div className="Brands_box  cpt-7">
                        <div className="brands_items col brand_items_box text-center">
                            <Image src="/Images/google_icons.png" alt="vegas Web" width="200" height="100"/>
                        </div>
                        <div className="brands_items col brand_items_box1 text-center  ">
                            <Image src="/Images/amazon_icons2.png" alt="vegas Web" width="200" height="100" />
                        </div>
                        <div className="brands_items col brand_items_box2 text-center">
                            <Image src="/Images/meta_icons.png" alt="vegas Web" width="200" height="100" />
                        </div>
                        <div className="brands_items col brand_items_box3 text-center">
                            <Image src="/Images/sales.png" alt="vegas Web" width="200" height="100"/>
                        </div>
                        <div className="brands_items col brand_items_box4 text-center">
                            <Image src="/Images/nova_icons.png" alt="vegas Web" width="200" height="100" />
                        </div>
                        
                        <div className="brands_items col brand_items_box5 text-center">
                            <Image src="/Images/shopify_icons.png" alt="vegas Web" width="200" height="100" />
                        </div>
                        <div className="brands_items col brand_items_box6 text-center">
                            <Image src="/Images/Booking_icons.png" alt="vegas Web" width="200" height="100" />
                        </div>
                        <div className="brands_items col brand_items_box7 text-center">
                            <Image src="/Images/puma_icons.png" alt="vegas Web" width="200" height="100" />
                        </div>
                        <div className="brands_items col brand_items_box8 text-center">
                            <Image src="/Images/epic_icons.png" alt="vegas Web" width="200" height="100" />
                        </div>
                        <div className="brands_items col brand_items_box9 text-center">
                            <Image src="/Images/coinbase_icons.png" alt="vegas Web" width="200" height="100" />
                        </div>
                    
                    </div>
                </div>
            </div>
        </div>

  )
}

export default Brands