
import React, { useState } from "react";
function Techologies() {
    const [service, setService] = useState(1);
  return (
    <>
         <section>
        <div className="Platforms cpt-6 cpb-6" id="Platforms"   data-aos="fade-up"
            data-aos-duration="2000">
          <div className="container">
            <div className="platfroms_title">
              <h1 className="section_title1">
                Technologies and Platforms We Work With
              </h1>
            </div>
            <div className="options d-flex">
              {/* tachnologies-1 */}
              <div
                className={service === 1 ? "option action " : "option"}
                onClick={() => {
                  setService(1);
                }}
              >
                <h1 className="section_title1">Web</h1>
                <img
                  src="./Images/Polygon.svg"
                  alt="veges web"
                  width={30}
                  height={30}
                  className="arrow-down"
                />
              </div>
                {/* tachnologies-2 */}
              <div
                className={service === 2 ? "option action " : "option"}
                onClick={() => {
                  setService(2);
                }}
              >
                <h1 className="section_title1">Mobile</h1>
                <img
                  src="./Images/Polygon.svg"
                  alt="veges web"
                  width={30}
                  height={30}
                  className="arrow-down"
                />
              </div>
              {/* tachnologies-3 */}
              <div
                className={service === 3 ? "option action " : "option"}
                onClick={() => {
                  setService(3);
                }}
              >
                <h1 className="section_title1">Desktop</h1>
                <img
                  src="./Images/Polygon.svg"
                  alt="veges web"
                  width={30}
                  height={30}
                  className="arrow-down"
                />
              </div>
              {/* tachnologies-4 */}
              <div
                className={service === 4 ? "option action " : "option"}
                onClick={() => {
                  setService(4);
                }}
              >
                <h1 className="section_title1">Platforms</h1>
                <img
                  src="./Images/Polygon.svg"
                  alt="veges web"
                  width={30}
                  height={30}
                  className="arrow-down"
                />
              </div>
              {/* tachnologies-5 */}
              <div
                className={service === 5 ? "option action " : "option"}
                onClick={() => {
                  setService(5);
                }}
              >
                <h1 className="section_title1">Relation Database</h1>
                <img
                  src="./Images/Polygon.svg"
                  alt="veges web"
                  width={30}
                  height={30}
                  className="arrow-down"
                />
              </div>
                
            </div>
            <div className="options d-flex ">
              {/* tachnologies-6 */}
              <div
                className={service === 6 ? "option action " : "option"}
                onClick={() => {
                  setService(6);
                }}
              >
                <h1 className="section_title1">Frame Works</h1>
                <img
                  src="./Images/Polygon.svg"
                  alt="veges web"
                  width={30}
                  height={30}
                  className="arrow-down"
                />
              </div>
              {/* tachnologies-7 */}
              <div
                className={service === 7 ? "option action " : "option"}
                onClick={() => {
                  setService(7);
                }}
              >
                <h1 className="section_title1">Machine Learning</h1>
                <img
                  src="./Images/Polygon.svg"
                  alt="veges web"
                  width={30}
                  height={30}
                  className="arrow-down"
                />
              </div>
              {/* tachnologies-8 */}
              <div
                className={service === 8 ? "option action " : "option"}
                onClick={() => {
                  setService(8);
                }}
              >
                <h1 className="section_title1">Libraries</h1>
                <img
                  src="./Images/Polygon.svg"
                  alt="veges web"
                  width={30}
                  height={30}
                  className="arrow-down"
                />
              </div>
              {/* tachnologies-9 */}
              <div
                className={service === 9 ? "option action " : "option"}
                onClick={() => {
                  setService(9);
                }}
              >
                <h1 className="section_title1">Test Automation Tools</h1>
                <img
                  src="./Images/Polygon.svg"
                  alt="veges web"
                  width={30}
                  height={30}
                  className="arrow-down"
                />
              </div>
              {/* tachnologies-10 */}
              <div
                className={service === 10 ? "option action " : "option"}
                onClick={() => {
                  setService(10);
                }}
              >
                <h1 className="section_title1">Clouds</h1>
                <img
                  src="./Images/Polygon.svg"
                  alt="veges web"
                  width={30}
                  height={30}
                  className="arrow-down"
                />
              </div>
            </div>
            <div className="platfrom_box_img mt-5">
              <div
                className={
                  service === 1 ? "option_list active  " : "option_list"
                }
              >
                <div>
                  <h1 className="section_title1 mb-3">Back End</h1>
                  <div className="option_list_items row">
                    <div className="option_list_items_img ">
                      <img
                        src="../Images/website/1.png"
                        alt="vages web"
                        width="auto"
                        height="auto"
                      />
                    </div>
                    <div className="option_list_items_img ">
                      <img
                        src="../Images/website/2.png"
                        alt="vages web"
                        width="auto"
                        height="auto"
                      />
                    </div>
                    <div className="option_list_items_img  option_list_items_3 ">
                      <img
                        src="../Images/website/3.png"
                        alt="vages web"
                        width="auto"
                        height="auto"
                      />
                    </div>
                    <div className="option_list_items_img ">
                      <img
                        src="../Images/website/4.png"
                        alt="vages web"
                        width="auto"
                        height="auto"
                      />
                    </div>
                    <div className="option_list_items_img ">
                      <img
                        src="../Images/website/5.png"
                        alt="vages web"
                        width="auto"
                        height="auto"
                      />
                    </div>
                    <div className="option_list_items_img ">
                      <img
                        src="../Images/website/6.png"
                        alt="vages web"
                        width="auto"
                        height="auto"
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-5 mb-3">
                  <h1 className="section_title1 mb-3">Front End</h1>
                  <div className="option_list_items">
                    <div className="option_list_items_img ">
                      <img
                        src="../Images/website/7.png"
                        alt="vages web"
                        width="auto"
                        height="auto"
                      />
                    </div>
                    <div className="option_list_items_img ">
                      <img
                        src="../Images/website/8.png"
                        alt="vages web"
                        width="auto"
                        height="auto"
                      />
                    </div>
                    <div className="option_list_items_img ">
                      <img
                        src="../Images/website/9.png"
                        alt="vages web"
                        width="auto"
                        height="auto"
                      />
                    </div>
                    <div className="option_list_items_img ">
                      <img
                        src="../Images/website/10.png"
                        alt="vages web"
                        width="auto"
                        height="auto"
                      />
                    </div>
                    <div className="option_list_items_img option_list_items_11 ">
                      <img
                        src="../Images/website/11.png"
                        alt="vages web"
                        width="auto"
                        height="auto"
                      />
                    </div>
                    <div className="option_list_items_img ">
                      <img
                        src="../Images/website/12.png"
                        alt="vages web"
                        width="auto"
                        height="auto"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={
                  service === 2 ? "option_list active " : "option_list"
                }
              >
                <div>
                  {/* <h1 className="section_title1 mb-3">Mobile</h1> */}
                  <div className="option_list_items">
                    <div className="option_list_items_img">
                      <img
                        src="../Images/Mobile/1.svg"
                        alt="vages web"
                        width="auto"
                        height="auto"
                      />
                    </div>
                    <div className="option_list_items_img">
                      <img
                        src="../Images/Mobile/2.svg"
                        alt="vages web"
                        width="auto"
                        height="auto"
                      />
                    </div>
                    <div className="option_list_items_img">
                      <img
                        src="../Images/Mobile/3.svg"
                        alt="vages web"
                        width="auto"
                        height="auto"
                      />
                    </div>
                    <div className="option_list_items_img">
                      <img
                       src="../Images/Mobile/4.svg"
                        alt="vages web"
                        width="auto"
                        height="auto"
                      />
                    </div>
                    <div className="option_list_items_img ">
                      <img
                        src="../Images/Mobile/5.svg"
                        alt="vages web"
                        width="auto"
                        height="auto"
                      />
                    </div>
                    <div className="option_list_items_img">
                      <img
                       src="../Images/Mobile/6.svg" 
                        alt="vages web"
                        width="auto"
                        height="auto"
                      />
                    </div>
                    <div className="option_list_items_img">
                      <img
                       src="../Images/Mobile/7.svg" 
                        alt="vages web"
                        width="auto"
                        height="auto"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={
                  service === 3 ? "option_list active " : "option_list"
                }
              >
                <div>
                  {/* <h1 className="section_title1 mb-3">Desktop</h1> */}
                  <div className="option_list_items">
                    <div className="option_list_items_img">
                      <img
                        src="../Images/Desktop/1.svg"
                        alt="vages web"
                        width="auto"
                        height="auto"
                      />
                    </div>
                    <div className="option_list_items_img">
                      <img
                        src="../Images/Desktop/2.svg"
                        alt="vages web"
                        width="auto"
                        height="auto"
                      />
                    </div>
                    <div className="option_list_items_img">
                      <img
                        src="../Images/Desktop/3.svg"
                        alt="vages web"
                        width="auto"
                        height="auto"
                      />
                    </div>
                    <div className="option_list_items_img">
                      <img
                        src="../Images/Desktop/4.svg"
                        alt="vages web"
                        width="auto"
                        height="auto"
                      />
                    </div>
                    <div className="option_list_items_img">
                      <img
                        src="../Images/Desktop/5.svg"
                        alt="vages web"
                        width="auto"
                        height="auto"
                      />
                    </div>
                    <div className="option_list_items_img">
                      <img
                        src="../Images/Desktop/6.svg"
                        alt="vages web"
                        width="auto"
                        height="auto"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={
                  service === 4 ? "option_list active " : "option_list"
                }
              >
                <div>
                  {/* <h1 className="section_title1 mb-3">Platforms</h1> */}
                  <div className="option_list_items">
                    <div className="option_list_items_img">
                      <img
                        src="../Images/Platfroms/1.svg"
                        alt="vages web"
                        width="auto"
                        height="auto"
                      />
                    </div>
                    <div className="option_list_items_img">
                      <img
                        src="../Images/Platfroms/2.svg"
                        alt="vages web"
                        width="auto"
                        height="auto"
                      />
                    </div>
                    <div className="option_list_items_img">
                      <img
                        src="../Images/Platfroms/3.svg"
                        alt="vages web"
                        width="auto"
                        height="auto"
                      />
                    </div>
                    <div className="option_list_items_img">
                      <img
                        src="../Images/Platfroms/4.svg"
                        alt="vages web"
                        width="auto"
                        height="auto"
                      />
                    </div>
                    <div className="option_list_items_img">
                      <img
                        src="../Images/Platfroms/5.svg"
                        alt="vages web"
                        width="auto"
                        height="auto"
                      />
                    </div>
                    <div className="option_list_items_img">
                      <img
                        src="../Images/Platfroms/6.svg"
                        alt="vages web"
                        width="auto"
                        height="auto"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={
                  service === 5 ? "option_list active " : "option_list"
                }
              >
                <div>
                  {/* <h1 className="section_title1 mb-3">Relation Database</h1> */}
                  <div className="option_list_items">
                    <div className="option_list_items_img">
                      <img
                        src="../Images/Relational Database/1.svg"
                        alt="vages web"
                        width="auto"
                        height="auto"
                      />
                    </div>
                    <div className="option_list_items_img">
                      <img
                        src="../Images/Relational Database/2.svg"
                        alt="vages web"
                        width="auto"
                        height="auto"
                      />
                    </div>
                    <div className="option_list_items_img">
                      <img
                        src="../Images/Relational Database/3.svg"
                        alt="vages web"
                        width="auto"
                        height="auto"
                      />
                    </div>
                    <div className="option_list_items_img">
                      <img
                        src="../Images/Relational Database/4.svg"
                        alt="vages web"
                        width="auto"
                        height="auto"
                      />
                    </div>
                    <div className="option_list_items_img">
                      <img
                        src="../Images/Relational Database/5.svg"
                        alt="vages web"
                        width="auto"
                        height="auto"
                      />
                    </div>
                    <div className="option_list_items_img">
                      <img
                        src="../Images/Relational Database/6.svg"
                        alt="vages web"
                        width="auto"
                        height="auto"
                      />
                    </div>
                    <div className="option_list_items_img">
                      <img
                        src="../Images/Relational Database/7.svg"
                        alt="vages web"
                        width="auto"
                        height="auto"
                      />
                    </div>
                    <div className="option_list_items_img">
                      <img
                        src="../Images/Relational Database/8.svg"
                        alt="vages web"
                        width="auto"
                        height="auto"
                      />
                    </div>
                    <div className="option_list_items_img">
                      <img
                        src="../Images/Relational Database/9.svg"
                        alt="vages web"
                        width="auto"
                        height="auto"
                      />
                    </div>
                    <div className="option_list_items_img">
                      <img
                        src="../Images/Relational Database/10.svg"
                        alt="vages web"
                        width="auto"
                        height="auto"
                      />
                    </div>
                    <div className="option_list_items_img">
                      <img
                        src="../Images/Relational Database/11.svg"
                        alt="vages web"
                        width="auto"
                        height="auto"
                      />
                    </div>
                    <div className="option_list_items_img">
                      <img
                        src="../Images/Relational Database/12.svg"
                        alt="vages web"
                        width="auto"
                        height="auto"
                      />
                    </div>
                    <div className="option_list_items_img">
                      <img
                        src="../Images/Relational Database/13.svg"
                        alt="vages web"
                        width="auto"
                        height="auto"
                      />
                    </div>
                    <div className="option_list_items_img">
                      <img
                        src="../Images/Relational Database/14.svg"
                        alt="vages web"
                        width="auto"
                        height="auto"
                      />
                    </div>
                    <div className="option_list_items_img">
                      <img
                        src="../Images/Relational Database/15.svg"
                        alt="vages web"
                        width="auto"
                        height="auto"
                      />
                    </div>
                    <div className="option_list_items_img">
                      <img
                        src="../Images/Relational Database/16.svg"
                        alt="vages web"
                        width="auto"
                        height="auto"
                      />
                    </div>
                    <div className="option_list_items_img">
                      <img
                        src="../Images/Relational Database/17.svg"
                        alt="vages web"
                        width="auto"
                        height="auto"
                      />
                    </div>
                    <div className="option_list_items_img">
                      <img
                        src="../Images/Relational Database/18.svg"
                        alt="vages web"
                        width="auto"
                        height="auto"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={
                  service === 6 ? "option_list active " : "option_list"
                }
              >
                <div>
                  {/* <h1 className="section_title1 mb-3">Frame Works</h1> */}
                  <div className="option_list_items">
                    <div className="option_list_items_img">
                      <img
                        src="../Images/frame works/1.svg"
                        alt="vages web"
                        width="auto"
                        height="auto"
                      />
                    </div>
                    <div className="option_list_items_img">
                      <img
                        src="../Images/frame works/2.svg"
                        alt="vages web"
                        width="auto"
                        height="auto"
                      />
                    </div>
                    <div className="option_list_items_img">
                      <img
                        src="../Images/frame works/3.svg"
                        alt="vages web"
                        width="auto"
                        height="auto"
                      />
                    </div>
                    <div className="option_list_items_img">
                      <img
                        src="../Images/frame works/4.svg"
                        alt="vages web"
                        width="auto"
                        height="auto"
                      />
                    </div>
                    <div className="option_list_items_img">
                      <img
                        src="../Images/frame works/5.svg"
                        alt="vages web"
                        width="auto"
                        height="auto"
                      />
                    </div>
                    <div className="option_list_items_img">
                      <img
                        src="../Images/frame works/6.svg"
                        alt="vages web"
                        width="auto"
                        height="auto"
                      />
                    </div>
                    <div className="option_list_items_img">
                      <img
                        src="../Images/frame works/7.svg"
                        alt="vages web"
                        width="auto"
                        height="auto"
                      />
                    </div>
                    <div className="option_list_items_img">
                      <img
                        src="../Images/frame works/8.svg"
                        alt="vages web"
                        width="auto"
                        height="auto"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={
                  service === 7 ? "option_list active " : "option_list"
                }
              >
                <div>
                  {/* <h1 className="section_title1 mb-3">Machine Learning</h1> */}
                  <div className="option_list_items">
                    <div className="option_list_items_img">
                      <img
                        src="../Images/Machine Learning/1.svg"
                        alt="vages web"
                        width="auto"
                        height="auto"
                      />
                    </div>
                    <div className="option_list_items_img">
                      <img
                        src="../Images/Machine Learning/2.svg"
                        alt="vages web"
                        width="auto"
                        height="auto"
                      />
                    </div>
                    <div className="option_list_items_img">
                      <img
                        src="../Images/Machine Learning/3.svg"
                        alt="vages web"
                        width="auto"
                        height="auto"
                      />
                    </div>
                    <div className="option_list_items_img">
                      <img
                        src="../Images/Machine Learning/4.svg"
                        alt="vages web"
                        width="auto"
                        height="auto"
                      />
                    </div>
                    <div className="option_list_items_img">
                      <img
                        src="../Images/Machine Learning/5.svg"
                        alt="vages web"
                        width="auto"
                        height="auto"
                      />
                    </div>
                    <div className="option_list_items_img">
                      <img
                        src="../Images/Machine Learning/6.svg"
                        alt="vages web"
                        width="auto"
                        height="auto"
                      />
                    </div>
                    <div className="option_list_items_img">
                      <img
                        src="../Images/Machine Learning/7.svg"
                        alt="vages web"
                        width="auto"
                        height="auto"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={
                  service === 8 ? "option_list active " : "option_list"
                }
              >
                <div>
                  {/* <h1 className="section_title1 mb-3">Libraries</h1> */}
                  <div className="option_list_items">
                    <div className="option_list_items_img">
                      <img
                        src="../Images/Libraries/1.svg"
                        alt="vages web"
                        width="auto"
                        height="auto"
                      />
                    </div>
                    <div className="option_list_items_img">
                      <img
                         src="../Images/Libraries/2.svg"
                        alt="vages web"
                        width="auto"
                        height="auto"
                      />
                    </div>
                    <div className="option_list_items_img">
                      <img
                         src="../Images/Libraries/3.svg"
                        alt="vages web"
                        width="auto"
                        height="auto"
                      />
                    </div>
                    <div className="option_list_items_img">
                      <img
                         src="../Images/Libraries/4.svg"
                        alt="vages web"
                        width="auto"
                        height="auto"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={
                  service === 9 ? "option_list active " : "option_list"
                }
              >
                <div>
                  {/* <h1 className="section_title1 mb-3">Test Automation Tools</h1> */}
                  <div className="option_list_items">
                    <div className="option_list_items_img">
                      <img
                         src="../Images/Automation/1.svg"
                        alt="vages web"
                        width="auto"
                        height="auto"
                      />
                    </div>
                    <div className="option_list_items_img">
                      <img
                        src="../Images/Automation/2.svg"
                        alt="vages web"
                        width="auto"
                        height="auto"
                      />
                    </div>
                    <div className="option_list_items_img">
                      <img
                        src="../Images/Automation/3.svg"
                        alt="vages web"
                        width="auto"
                        height="auto"
                      />
                    </div>
                    <div className="option_list_items_img">
                      <img
                        src="../Images/Automation/4.svg"
                        alt="vages web"
                        width="auto"
                        height="auto"
                      />
                    </div>
                    <div className="option_list_items_img">
                      <img
                        src="../Images/Automation/5.svg"
                        alt="vages web"
                        width="auto"
                        height="auto"
                      />
                    </div>
                    <div className="option_list_items_img">
                      <img
                        src="../Images/Automation/6.svg"
                        alt="vages web"
                        width="auto"
                        height="auto"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={
                  service === 10 ? "option_list active " : "option_list"
                }
              >
                <div>
                  {/* <h1 className="section_title1 mb-3">Clouds</h1> */}
                  <div className="option_list_items">
                    <div className="option_list_items_img">
                      <img
                        src="../Images/Clouds/1.svg"
                        alt="vages web"
                        width="auto"
                        height="auto"
                      />
                    </div>
                    <div className="option_list_items_img">
                      <img
                        src="../Images/Clouds/2.svg"
                        alt="vages web"
                        width="auto"
                        height="auto"
                      />
                    </div>
                    <div className="option_list_items_img">
                      <img
                        src="../Images/Clouds/3.svg"
                        alt="vages web"
                        width="auto"
                        height="auto"
                      />
                    </div>
                    <div className="option_list_items_img">
                      <img
                        src="../Images/Clouds/4.svg"
                        alt="vages web"
                        width="auto"
                        height="auto"
                      />
                    </div>
                  </div>
                </div>
              </div>
            
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Techologies