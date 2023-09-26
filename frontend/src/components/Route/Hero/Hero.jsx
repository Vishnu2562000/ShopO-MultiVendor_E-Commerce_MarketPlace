import React from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";

const Hero = () => {
  return (
    <div
      className={`relative min-h-[70vh] 800px:min-h-[80vh] w-full bg-no-repeat ${styles.normalFlex}`}
      style={{
        backgroundImage:
          // "url(https://themes.rslahmed.dev/rafcart/assets/images/banner-2.jpg)",
          "url(https://res.cloudinary.com/ddoekxyip/image/upload/v1695718030/c7issjbdydud86v5flji.jpg)",
      }}
    >
      <div className={`${styles.section} w-[90%] 800px:w-[60%]`}>
        <h1
          className={`text-[35px] leading-[1.2] 800px:text-[60px] text-[#3d3a3a] font-[600] capitalize`}
        >
          Empowering Your Shopping Experience <br /> One Click at a Time!
        </h1>
        <p className="pt-5 text-[18px] font-[Poppins] font-[500] text-[#000000ba]">
          ShopO: Your Premier Multi-Vendor Marketplace. <br />
          A curated selection of products from global sellers <br />
          including Computers, Cosmetics, Fashion, and more. <br />
          Discover unique finds and support independent businesses.
        </p>
        <Link to="/products" className="inline-block">
          <div className={`${styles.button} mt-5 ${styles.zoomOnHoverStyle}`}>
            <span className="text-[#fff] font-[Poppins] text-[18px]">
              Shop Now
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
