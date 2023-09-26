import React from "react";
import { FiShoppingBag } from "react-icons/fi";
import { GrWorkshop } from "react-icons/gr";
import { RxDashboard } from "react-icons/rx";
import { CiMoneyBill, CiSettings } from "react-icons/ci";
import { Link } from "react-router-dom";
import { HiOutlineUserGroup } from "react-icons/hi";
import { BsHandbag } from "react-icons/bs";
import { MdOutlineLocalOffer } from "react-icons/md";
import { AiOutlineSetting } from "react-icons/ai";

const icons = [
  RxDashboard,
  FiShoppingBag,
  GrWorkshop,
  HiOutlineUserGroup,
  BsHandbag,
  MdOutlineLocalOffer,
  CiMoneyBill,
  AiOutlineSetting,
];

const labels = [
  "Admin Dashboard",
  "All Orders",
  "All Sellers",
  "All Users",
  "All Products",
  "All Events",
  "Withdraw Request",
  "Settings",
];

const AdminSideBarLink = ({ to, icon, label, active }) => {
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

const AdminSideBar = ({ active }) => {
  const links = [
    { to: "/admin/dashboard", icon: 0 },
    { to: "/admin-orders", icon: 1 },
    { to: "/admin-sellers", icon: 2 },
    { to: "/admin-users", icon: 3 },
    { to: "/admin-products", icon: 4 },
    { to: "/admin-events", icon: 5 },
    { to: "/admin-withdraw-request", icon: 6 },
    { to: "/profile", icon: 7 },
  ];

  return (
    <div className="w-full h-[90vh] bg-white shadow-sm overflow-y-scroll sticky top-0 left-0 z-10">
      {links.map((link, index) => (
        <AdminSideBarLink
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

export default AdminSideBar;
