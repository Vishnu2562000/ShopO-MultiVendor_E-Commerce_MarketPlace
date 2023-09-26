import React, { useState } from "react";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { BiMenuAltLeft } from "react-icons/bi";
import { RxCross1 } from "react-icons/rx";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styles from "../../styles/styles";
import { IoIosArrowForward } from "react-icons/io";
import NavBar from "./NavBar";
import { server } from "../../server";
import { productData } from "../../static/data";
import Cart from "../cart/Cart";
import Wishlist from "../Wishlist/Wishlist";

const MobileHeader = ({ activeHeading }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchData, setSearchData] = useState([{}]);
  const [active, setActive] = useState(false);
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const { isSeller } = useSelector((state) => state.seller);
  const { wishlist } = useSelector((state) => state.wishlist);
  const { cart } = useSelector((state) => state.cart);
  const [openCart, setOpenCart] = useState(false);
  const [openWishList, setOpenWishList] = useState(false);

  const { allProducts } = useSelector((state) => state.products);

  const [open, setOpen] = useState(false);
  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    const filteredProducts =
      allProducts &&
      allProducts.filter((product) =>
        product.name.toLowerCase().includes(term.toLowerCase())
      );

    setSearchData(filteredProducts);
  };

  const isAdmin = (isAuthenticated, user) => {
    return isAuthenticated && user.role === "Admin";
  };

  window.addEventListener("scroll", () => {
    if (window.scrollY > 70) {
      setActive(true);
    } else {
      setActive(false);
    }
  });

  return (
    <div
      className={`${
        active === true ? "shadow-sm fixed top-0 left-0 z-10" : null
      }
  w-full h-[60px] bg-[#fff] z-50 top-0 left-0 shadow-sm 800px:hidden`}
    >
      <div className="w-full flex items-center justify-between">
        <div>
          <BiMenuAltLeft
            size={40}
            className="ml-4"
            onClick={() => setOpen(true)}
          />
        </div>
        <div>
          <Link to="/">
            <img
              src="https://shopo.quomodothemes.website/assets/images/logo.svg"
              alt=""
              className="mt-3 cursor-pointer"
            />
          </Link>
        </div>
        <div>
          <div
            className={`${styles.zoomOnHoverStyle} relative  mr-[20px]`}
            onClick={() => setOpenCart(true)}
          >
            <AiOutlineShoppingCart size={30} />
            <span className="absolute right-0 top-0 rounded-full bg-[#3bc177] w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px]  leading-tight text-center">
              {cart && cart.length}
            </span>
          </div>
        </div>
      </div>

      {/* header sidebar */}
      {open && (
        <div className={`fixed w-full bg-[#0000005f] z-20 h-full top-0 left-0`}>
          <div className="fixed w-[60%] bg-[#fff] h-screen top-0 left-0 z-10 overflow-y-scroll">
            <div className="w-full justify-between flex pr-3">
              <div>
                <div
                  className={`${styles.zoomOnHoverStyle} relative mr-[15px]`}
                  onClick={() => setOpenWishList(true)}
                >
                  <AiOutlineHeart size={30} className="mt-5 ml-3" />
                  <span className="absolute right-0 top-0 rounded-full bg-[#3bc177] w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px]  leading-tight text-center">
                    {wishlist && wishlist.length}
                  </span>
                </div>
              </div>
              <RxCross1
                size={30}
                className="ml-4 mt-5"
                onClick={() => setOpen(false)}
              />
            </div>

            <div className="my-8 w-[92%] m-auto h-[40px relative]">
              <input
                type="search"
                placeholder="Search Product..."
                className="h-[40px] w-full px-2 border-[#3957db] border-[2px] rounded-md"
                value={searchTerm}
                onChange={handleSearchChange}
              />

              {searchData &&
              searchTerm.length !== 0 &&
              searchData.length !== 0 ? (
                <div className="absolute min-h-[30vh] bg-slate-50 shadow-sm-2 z-[9] p-4">
                  {searchData &&
                    searchData.map((product, index) => {
                      const productName = product.name;
                      if (productName && searchTerm.length > 0) {
                        const product_name = productName.replace(/\s+/g, "_");
                        return (
                          <Link to={`/product/${product._id}`} key={index}>
                            <div className="w-full flex items-start py-3">
                              <img
                                src={`${server}/${product.images[0]}`}
                                alt={productName}
                                className="w-[40px] h-[40px] mr-[10px]"
                              />
                              <h1>{product.name}</h1>
                            </div>
                          </Link>
                        );
                      }
                    })}
                </div>
              ) : null}
            </div>

            <NavBar active={activeHeading} />
            {isAdmin(isAuthenticated, user) && (
              <div className={`${styles.button} ml-4 !rounded-[4px]`}>
                <Link to={`/admin/dashboard`}>
                  <h1 className="text-[#fff] flex items-center">
                    {"Admin Dashboard"} <IoIosArrowForward className="ml-1" />
                  </h1>
                </Link>
              </div>
            )}
            <div className={`${styles.button} ml-4 !rounded-[4px]`}>
              <Link to={`${isSeller ? "/dashboard" : "/create-shop"}`}>
                <h1 className="text-[#fff] flex items-center">
                  {isSeller ? "Seller Dashboard" : "Become Seller"}{" "}
                  <IoIosArrowForward className="ml-1" />
                </h1>
              </Link>
            </div>
            <br />
            <br />
            <br />

            <div className="flex w-full justify-center">
              {isAuthenticated ? (
                <div>
                  <Link to="/profile">
                    <img
                      src={`${user?.avatar?.url}`}
                      alt=""
                      className="w-[60px] h-[60px] rounded-full border-[3px] border-[#0eae88]"
                    />
                  </Link>
                </div>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="text-[18px] pr-[10px] text-[#000000b7]"
                  >
                    Login /
                  </Link>
                  <Link to="/sign-up" className="text-[18px] text-[#000000b7]">
                    Sign up
                  </Link>
                </>
              )}
            </div>
          </div>
          {/* Cart pop-up */}
          {openCart ? <Cart setOpenCart={setOpenCart} /> : null}

          {/* Wishlist Pop-up */}
          {openWishList ? <Wishlist setOpenWishlist={setOpenWishList} /> : null}
        </div>
      )}
    </div>
  );
};

export default MobileHeader;
