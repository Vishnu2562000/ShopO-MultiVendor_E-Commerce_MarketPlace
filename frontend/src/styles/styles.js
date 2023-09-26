const styles = {
  custom_container: "w-11/12 hidden sm:block",
  heading:
    "text-[27px] text-center md:text-start font-[600] font-Roboto pb-[20px]",
  section: "w-11/12 mx-auto",
  productTitle: "text-[25px] font-[600] font-Roboto text-[#333]",
  productDiscountPrice: "font-bold text-[18px] text-[#333] font-Roboto",
  price: "font-[500] text-[16px] text-[#d55b45] pl-3 mt-[-4px] line-through",
  shop_name: "pt-3 text-[15px] text-blue-400 pb-3",
  active_indicator: "absolute bottom-[-27%] left-0 h-[3px] w-full bg-[crimson]",
  button:
    "w-[180px] bg-black h-[50px] my-3 flex items-center justify-center rounded-xl cursor-pointer",
  cart_button:
    "px-[20px] h-[38px] rounded-[20px] bg-[#f63b60] flex items-center justify-center cursor-pointer",
  cart_button_text: "text-[#fff] text-[16px] font-[600]",
  input: "w-full border p-1 rounded-[5px]",
  activeStatus:
    "w-[10px] h-[10px] rounded-full absolute top-0 right-1 bg-[#40d132]",
  normalFlex: "flex items-center",
  dropDownItem:
    "hover:bg-gray-400 hover:text-white hover:rounded-md cursor-pointer transition-colors duration-300",
  optionClick:
    "bg-gray-400 text-white rounded-md cursor-pointer transition-colors duration-300",
  zoomOnHoverStyle: `
  transition-transform duration-300 ease-in-out transform hover:scale-110
  `,
  zoomOnClickStyle: `
  transition-transform duration-300 ease-in-out transform scale-110
  `,
};

export default styles;
