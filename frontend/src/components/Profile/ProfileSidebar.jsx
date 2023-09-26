import React from "react";
import { AiOutlineLogin, AiOutlineMessage } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { HiOutlineReceiptRefund, HiOutlineShoppingBag } from "react-icons/hi";
import {
  MdOutlineAdminPanelSettings,
  MdOutlinePassword,
  MdOutlineTrackChanges,
} from "react-icons/md";
import { TbAddressBook } from "react-icons/tb";
import { RxPerson } from "react-icons/rx";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { server } from "../../server";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

const ProfileSidebar = ({ setActive, active }) => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);

  const logoutHandler = () => {
    axios
      .get(`${server}/user/logout`, { withCredentials: true })
      .then((res) => {
        toast.success(res.data.message);
        window.location.reload(true);
        navigate("/login");
      })
      .catch((error) => {
        console.log(error.response?.data?.message);
      });
  };

  const sidebarItems = [
    { icon: RxPerson, label: "Profile", index: 1 },
    { icon: HiOutlineShoppingBag, label: "Orders", index: 2 },
    { icon: HiOutlineReceiptRefund, label: "Refunds", index: 3 },
    { icon: AiOutlineMessage, label: "Inbox", index: 4 },
    { icon: MdOutlineTrackChanges, label: "Track Order", index: 5 },
    { icon: RiLockPasswordLine, label: "Change Password", index: 6 },
    { icon: TbAddressBook, label: "Address", index: 7 },
  ];

  return (
    <div className="w-full bg-white shadow-sm rounded-[10px] p-4 pt-8">
      {sidebarItems.map((item) => (
        <div
          key={item.index}
          className={`flex items-center cursor-pointer w-full mb-8`}
          onClick={() => {
            setActive(item.index);
            if (item.label === "Inbox") {
              navigate("/inbox");
            }
          }}
        >
          <item.icon size={30} color={active === item.index ? "red" : ""} />
          <span
            className={`pl-3 ${
              active === item.index ? "text-[red]" : ""
            } text-[18px] 800px:block hidden`}
          >
            {item.label}
          </span>
        </div>
      ))}

      {user && user?.role === "Admin" && (
        <Link to="/admin/dashboard">
          <div
            className="flex items-center cursor-pointer w-full mb-8"
            onClick={() => setActive(8) && navigate(`/admin/dashboard`)}
          >
            <MdOutlineAdminPanelSettings
              size={30}
              color={active === 8 ? "red" : ""}
            />
            <span
              className={`pl-3 ${
                active === 8 ? "text-[red]" : ""
              } text-[18px] 800px:block hidden`}
            >
              Admin Dashboard
            </span>
          </div>
        </Link>
      )}
      <div
        className="single_item flex items-center cursor-pointer w-full mb-8"
        onClick={logoutHandler}
      >
        <AiOutlineLogin size={30} color={active === 9 ? "red" : ""} />
        <span
          className={`pl-3 ${
            active === 9 ? "text-[red]" : ""
          } text-[18px] 800px:block hidden`}
        >
          Log out
        </span>
      </div>
    </div>
  );
};

export default ProfileSidebar;
