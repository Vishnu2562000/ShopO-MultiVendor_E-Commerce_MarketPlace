import React from "react";
import { AiOutlineFolderAdd, AiOutlineGift } from "react-icons/ai";
import { FiPackage, FiShoppingBag } from "react-icons/fi";
import { MdOutlineLocalOffer } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
import { VscNewFile } from "react-icons/vsc";
import { CiMoneyBill, CiSettings } from "react-icons/ci";
import { Link } from "react-router-dom";
import { BiMessageSquareDetail } from "react-icons/bi";
import { HiOutlineReceiptRefund } from "react-icons/hi";

const icons = [
  RxDashboard,
  FiShoppingBag,
  FiPackage,
  AiOutlineFolderAdd,
  MdOutlineLocalOffer,
  VscNewFile,
  CiMoneyBill,
  BiMessageSquareDetail,
  AiOutlineGift,
  HiOutlineReceiptRefund,
  CiSettings,
];

const labels = [
  "Dashboard",
  "All Orders",
  "All Products",
  "Create Product",
  "All Events",
  "Create Event",
  "Withdraw Money",
  "Shop Inbox",
  "Discount Codes",
  "Refunds",
  "Settings",
];

const DashboardSideBarLink = ({ to, icon, label, active }) => {
  const Icon = icons[icon];

  return (
    <div className="w-full flex items-center p-4">
      <Link to={to} className="w-full flex items-center">
        <Icon
          size={30}
          color={active === icon + 1 ? "crimson" : "#555"}
          alt={label}
        />
        <h5
          className={`hidden 800px:block pl-2 text-[18px] font-[400] ${
            active === icon + 1 ? "text-[crimson]" : "text-[#555]"
          }`}
        >
          {label}
        </h5>
      </Link>
    </div>
  );
};

const DashboardSideBar = ({ active }) => {
  const links = [
    { to: "/dashboard", icon: 0 },
    { to: "/dashboard-orders", icon: 1 },
    { to: "/dashboard-products", icon: 2 },
    { to: "/dashboard-create-product", icon: 3 },
    { to: "/dashboard-events", icon: 4 },
    { to: "/dashboard-create-event", icon: 5 },
    { to: "/dashboard-withdraw-money", icon: 6 },
    { to: "/dashboard-messages", icon: 7 },
    { to: "/dashboard-coupons", icon: 8 },
    { to: "/dashboard-refunds", icon: 9 },
    { to: "/settings", icon: 10 },
  ];

  return (
    <div className="w-full h-[90vh] bg-white shadow-sm overflow-y-scroll sticky top-0 left-0 z-10">
      {links.map((link, index) => (
        <DashboardSideBarLink
          key={index}
          to={link.to}
          icon={link.icon}
          label={labels[index]}
          active={active}
        />
      ))}
    </div>
  );
};

export default DashboardSideBar;
