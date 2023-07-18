import { useState, useEffect } from "react";
import Link from "next/link";
function Navbar() {
  const [sidebarActive, setSidebarActive] = useState(false);
  const [dropdownActive, setDropdownActive] = useState(false);

  const _toggleDropdown = () => {
    setDropdownActive(!dropdownActive);
  };

  const _toggleSidebar = () => {
    setSidebarActive(!sidebarActive);
  };

  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <nav className="navigation">
        <div className="container"></div>
        {/* ================menu nav============= */}
        <div className={`${sticky ? "is-sticky" : ""} menu-nav `}>
          <div className="container">
            <div className="menu-nav-inner">
              <div className="menu-nav-inner-left">
                <div className="logo">
                  <Link href={"/"}>
                    <img src="Images/logo.png" alt="logo" />
                  </Link>
                </div>
              </div>
              <div
                className={`${
                  sidebarActive ? "active" : ""
                } menu-nav-inner-right`}
              >
                <div className="menu-nav-inner-right-inner">
                  <div className="close-nav" onClick={_toggleSidebar}>
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.6013 0.412345C17.475 0.285778 17.325 0.185364 17.1598 0.116852C16.9946 0.0483401 16.8176 0.0130744 16.6388 0.0130744C16.46 0.0130744 16.2829 0.0483401 16.1178 0.116852C15.9526 0.185364 15.8026 0.285778 15.6763 0.412345L9 7.07495L2.32375 0.398692C2.19735 0.272291 2.04729 0.172024 1.88214 0.103616C1.71698 0.0352086 1.53998 1.33185e-09 1.36122 0C1.18246 -1.33185e-09 1.00545 0.0352086 0.840303 0.103616C0.675152 0.172024 0.525092 0.272291 0.398692 0.398692C0.272291 0.525092 0.172024 0.675152 0.103616 0.840303C0.0352086 1.00545 -1.33185e-09 1.18246 0 1.36122C1.33185e-09 1.53998 0.0352086 1.71698 0.103616 1.88214C0.172024 2.04729 0.272291 2.19735 0.398692 2.32375L7.07495 9L0.398692 15.6763C0.272291 15.8027 0.172024 15.9527 0.103616 16.1179C0.0352086 16.283 0 16.46 0 16.6388C0 16.8175 0.0352086 16.9945 0.103616 17.1597C0.172024 17.3248 0.272291 17.4749 0.398692 17.6013C0.525092 17.7277 0.675152 17.828 0.840303 17.8964C1.00545 17.9648 1.18246 18 1.36122 18C1.53998 18 1.71698 17.9648 1.88214 17.8964C2.04729 17.828 2.19735 17.7277 2.32375 17.6013L9 10.9251L15.6763 17.6013C15.8027 17.7277 15.9527 17.828 16.1179 17.8964C16.283 17.9648 16.46 18 16.6388 18C16.8175 18 16.9945 17.9648 17.1597 17.8964C17.3248 17.828 17.4749 17.7277 17.6013 17.6013C17.7277 17.4749 17.828 17.3248 17.8964 17.1597C17.9648 16.9945 18 16.8175 18 16.6388C18 16.46 17.9648 16.283 17.8964 16.1179C17.828 15.9527 17.7277 15.8027 17.6013 15.6763L10.9251 9L17.6013 2.32375C18.1201 1.80494 18.1201 0.931154 17.6013 0.412345Z"
                        fill="black"
                      />
                    </svg>
                  </div>
                  <ul className="nav-menu">
                    <li className="nav-list" onClick={_toggleSidebar}>
                      <Link className="nav-link" href={"/"}>
                        Home
                      </Link>
                    </li>
                    <li className="nav-list" onClick={_toggleDropdown}>
                      <a href="#" className="nav-link">
                        Services{" "}
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8.00002 10.667C7.84425 10.6673 7.6933 10.6131 7.57335 10.5137L3.57335 7.18035C3.43721 7.06719 3.35159 6.90458 3.33534 6.7283C3.31909 6.55201 3.37353 6.37649 3.48669 6.24035C3.59985 6.1042 3.76245 6.01859 3.93874 6.00233C4.11502 5.98608 4.29054 6.04052 4.42669 6.15368L8.00002 9.14035L11.5734 6.26035C11.6415 6.20497 11.72 6.16361 11.8042 6.13866C11.8885 6.11371 11.9768 6.10564 12.0641 6.11494C12.1515 6.12423 12.2362 6.15069 12.3132 6.19281C12.3903 6.23493 12.4583 6.29186 12.5134 6.36035C12.5744 6.42889 12.6206 6.50931 12.6492 6.59656C12.6777 6.68381 12.6879 6.77601 12.6791 6.86739C12.6704 6.95876 12.6428 7.04734 12.5983 7.12758C12.5537 7.20782 12.493 7.27798 12.42 7.33368L8.42002 10.5537C8.29663 10.6374 8.14876 10.6773 8.00002 10.667Z"
                            fill="black"
                          />
                        </svg>
                      </a>
                      <div
                        className={
                          dropdownActive ? "dp-menu active" : "dp-menu"
                        }
                      >
                        <div className="container">
                          <ul className="dp-menu-ul">
                            <li onClick={_toggleSidebar}>
                              <Link className="dp-link" href="/graphic-design">
                                <div className="icon-add">
                                  <img src="/Images/header/1.svg" alt="" />
                                </div>
                                <div className="multi-text">
                                  <p className="nav-title">Graphics Design</p>
                                  <p>Learn More </p>
                                </div>
                              </Link>
                            </li>
                            <li onClick={_toggleSidebar}>
                              <Link className="dp-link" href={"/video-editing"}>
                                <div className="icon-add">
                                  <img src="/Images/header/2.svg" alt="" />
                                </div>
                                <div className="multi-text">
                                  <p className="nav-title">Video Editing</p>
                                  <p>Learn More </p>
                                </div>
                              </Link>
                            </li>
                            <li onClick={_toggleSidebar}>
                              <Link
                                className="dp-link"
                                href={"/social-marketing"}
                              >
                                <div className="icon-add">
                                  <img src="/Images/header/3.svg" alt="" />
                                </div>
                                <div className="multi-text">
                                  <p className="nav-title">
                                    Social Media Marketing
                                  </p>
                                  <p>Learn More </p>
                                </div>
                              </Link>
                            </li>
                            <li onClick={_toggleSidebar}>
                              <Link
                                className="dp-link"
                                href={"/website-design"}
                              >
                                <div className="icon-add">
                                  <img src="/Images/header/4.svg" alt="" />
                                </div>
                                <div className="multi-text">
                                  <p className="nav-title">Website Design</p>
                                  <p>Learn More </p>
                                </div>
                              </Link>
                            </li>
                            <li onClick={_toggleSidebar}>
                              <Link
                                className="dp-link"
                                href={"/web-development"}
                              >
                                <div className="icon-add">
                                  <img src="/Images/header/5.svg" alt="" />
                                </div>
                                <div className="multi-text">
                                  <p className="nav-title">
                                    Website Development
                                  </p>
                                  <p>Learn More </p>
                                </div>
                              </Link>
                            </li>
                            <li onClick={_toggleSidebar}>
                              <Link className="dp-link" href={"/seo"}>
                                <div className="icon-add">
                                  <img src="/Images/header/6.svg" alt="" />
                                </div>
                                <div className="multi-text">
                                  <p className="nav-title">SEO</p>
                                  <p>Learn More</p>
                                </div>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                    <li className="nav-list" onClick={_toggleSidebar}>
                      <Link className="nav-link" href={"/about"}>
                        About Us
                      </Link>
                    </li>

                    <li className="nav-list" onClick={_toggleSidebar}>
                      <Link className="nav-link" href={"/blog"}>
                        Blog
                      </Link>
                    </li>
                    <li className="nav-list" onClick={_toggleSidebar}>
                      <Link className="nav-link" href={"/portfolio"}>
                        Portfolio
                      </Link>
                    </li>
                    <li className="nav-list" onClick={_toggleSidebar}>
                      <Link className="nav-link" href={"/Contact"}>
                        Contact
                      </Link>
                    </li>
                    <li className="nav-list " onClick={_toggleSidebar}>
                      <a
                        href="javascript:void(Tawk_API.toggle())"
                        className="find-expert-btn lets-talk"
                      >
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M3.00049 13.9425C3.00049 14.1414 2.92147 14.3322 2.78082 14.4728C2.64017 14.6135 2.4494 14.6925 2.25049 14.6925C2.05158 14.6925 1.86081 14.6135 1.72016 14.4728C1.57951 14.3322 1.50049 14.1414 1.50049 13.9425V9.375C1.50049 5.23275 4.85824 1.875 9.00049 1.875C13.1427 1.875 16.5005 5.23275 16.5005 9.375V11.6895C16.5005 11.8884 16.4215 12.0792 16.2808 12.2198C16.1402 12.3605 15.9494 12.4395 15.7505 12.4395C15.5516 12.4395 15.3608 12.3605 15.2202 12.2198C15.0795 12.0792 15.0005 11.8884 15.0005 11.6895V9.375C15.0005 7.7837 14.3683 6.25758 13.2431 5.13236C12.1179 4.00714 10.5918 3.375 9.00049 3.375C7.40919 3.375 5.88307 4.00714 4.75785 5.13236C3.63263 6.25758 3.00049 7.7837 3.00049 9.375V13.9425ZM3.00049 9.375H4.50049C4.89831 9.375 5.27984 9.53304 5.56115 9.81434C5.84245 10.0956 6.00049 10.4772 6.00049 10.875V14.625C6.00049 15.0228 5.84245 15.4044 5.56115 15.6857C5.27984 15.967 4.89831 16.125 4.50049 16.125H3.00049C2.60266 16.125 2.22113 15.967 1.93983 15.6857C1.65852 15.4044 1.50049 15.0228 1.50049 14.625V10.875C1.50049 10.4772 1.65852 10.0956 1.93983 9.81434C2.22113 9.53304 2.60266 9.375 3.00049 9.375ZM3.00049 10.875V14.625H4.50049V10.875H3.00049ZM13.5005 9.375H15.0005C15.3983 9.375 15.7798 9.53304 16.0611 9.81434C16.3425 10.0956 16.5005 10.4772 16.5005 10.875V14.625C16.5005 15.0228 16.3425 15.4044 16.0611 15.6857C15.7798 15.967 15.3983 16.125 15.0005 16.125H13.5005C13.1027 16.125 12.7211 15.967 12.4398 15.6857C12.1585 15.4044 12.0005 15.0228 12.0005 14.625V10.875C12.0005 10.4772 12.1585 10.0956 12.4398 9.81434C12.7211 9.53304 13.1027 9.375 13.5005 9.375ZM13.5005 10.875V14.625H15.0005V10.875H13.5005Z"
                            fill="white"
                          />
                        </svg>
                        Let's Talk
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="open-mobile-menu" onClick={_toggleSidebar}>
                <svg
                  width="30"
                  height="25"
                  viewBox="0 0 30 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 25V20.8333H30V25H0ZM0 14.5833V10.4167H30V14.5833H0ZM0 4.16667V0H30V4.16667H0Z"
                    fill="black"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        {/* ================menu nav end============= */}
      </nav>
    </>
  );
}
export default Navbar;
