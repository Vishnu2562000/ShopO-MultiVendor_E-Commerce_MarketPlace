import React from "react";
import { AiOutlineGift } from "react-icons/ai";
import { MdOutlineLocalOffer } from "react-icons/md";
import { FiPackage, FiShoppingBag } from "react-icons/fi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { BiMessageSquareDetail } from "react-icons/bi";
import styles from "../../../styles/styles";

const DashboardHeader = () => {
  const { seller } = useSelector((state) => state.seller);
  return (
    <div className="w-full h-[80px] bg-white shadow sticky top-0 left-0 z-30 flex items-center justify-between px-4">
      <div>
        <Link to="/dashboard">
          <img
            src="https://shopo.quomodothemes.website/assets/images/logo.svg"
            alt=""
            className={`${styles.zoomOnHoverStyle}`}
          />
        </Link>
      </div>
      <div className="flex items-center">
        <div className="flex items-center mr-4">
          <Link
            to="/dashboard-coupons"
            className={`800px:block hidden ${styles.zoomOnHoverStyle}`}
          >
            <AiOutlineGift
              color="#555"
              size={30}
              className="mx-5 cursor-pointer"
              title="Coupons"
            />
          </Link>
          <Link
            to="/dashboard-events"
            className={`800px:block hidden ${styles.zoomOnHoverStyle}`}
          >
            <MdOutlineLocalOffer
              color="#555"
              size={30}
              className="mx-5 cursor-pointer"
              title="Events"
            />
          </Link>
          <Link
            to="/dashboard-products"
            className={`800px:block hidden ${styles.zoomOnHoverStyle}`}
          >
            <FiShoppingBag
              color="#555"
              size={30}
              className="mx-5 cursor-pointer"
              title="Products"
            />
          </Link>
          <Link
            to="/dashboard-orders"
            className={`800px:block hidden ${styles.zoomOnHoverStyle}`}
          >
            <FiPackage
              color="#555"
              size={30}
              className="mx-5 cursor-pointer"
              title="Orders"
            />
          </Link>
          <Link
            to="/dashboard-messages"
            className={`800px:block hidden ${styles.zoomOnHoverStyle}`}
          >
            <BiMessageSquareDetail
              color="#555"
              size={30}
              className="mx-5 cursor-pointer"
              title="Messages"
            />
          </Link>
          <Link to={`/shop/${seller._id}`}>
            <img
              src={`${seller.avatar?.url}`}
              alt=""
              className={`w-[50px] h-[50px] rounded-full object-cover ${styles.zoomOnHoverStyle}`}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
