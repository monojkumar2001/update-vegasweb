import Layout from "../component/Layout/Layout";
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Navbar.css";
import "../styles/Home.css";
import "../styles/about-us.css";
import "../styles/section/price-range.css";
import "../styles/style.css";
import "../styles/portfolio.css";
import "../styles/footer.css";
import "../styles/blog.css";
import "../styles/about-us.css";
import "../styles/contact.css";
import "../styles/responsive.css";
import "../styles/privacy_policy.css";
import "../styles/Cookies_policy.css";
import "../styles/connect.css";
import axios from "axios";
import Script from "next/script";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import SocialMedia from "../component/inner/SocialMedia";
import Connect from "./connect";

axios.defaults.baseURL = "https://metacookiesnft.com/";
// axios.defaults.baseURL = "http://127.0.0.1:8000/";
axios.defaults.headers.post["Accept"] = "application/json";
axios.defaults.headers.post["Content-Type"] = "application/json";

function MyApp({ Component, pageProps, router }) {
  const isConnetPage = router.pathname === "/connect";

  if (isConnetPage) {
    return <Connect />;
  } else {
    <Layout>
      <Component {...pageProps} />
      <SocialMedia />
    </Layout>;
  }

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Layout>
        <Component {...pageProps} />

        <SocialMedia />
      </Layout>

      <Script id="tawk" strategy="lazyOnload">
        {`
         var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
         (function(){
         var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
         s1.async=true;
         s1.src='https://embed.tawk.to/6478bc43ad80445890f0797b/1h1rpuqti';
         s1.charset='UTF-8';
         s1.setAttribute('crossorigin','*');
         s0.parentNode.insertBefore(s1,s0);
         })();
        `}
      </Script>
    </>
  );
}
export default MyApp;
