import { encryptData } from "../../components/Security/CryptoUtils";
// add to wishlist
export const addToWishlist = (data) => async (dispatch, getState) => {
  dispatch({
    type: "addToWishlist",
    payload: data,
  });

  localStorage.setItem(
    "wishlistItems",
    encryptData(getState().wishlist.wishlist)
  );
  return data;
};

// remove from wishlist
export const removeFromWishlist = (data) => async (dispatch, getState) => {
  dispatch({
    type: "removeFromWishlist",
    payload: data._id,
  });

  localStorage.setItem(
    "wishlistItems",
    encryptData(getState().wishlist.wishlist)
  );
  return data;
};
