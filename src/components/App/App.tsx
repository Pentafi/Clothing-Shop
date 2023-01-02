import { Link, Route, Routes } from "react-router-dom";
import { LinksWrapper, TitleWrapper, Wrapper } from "./App.styled";

import { Cart } from "../Cart";
import { Products } from "../Products";
import { ClothingShopContext } from "../useContext";
import { useReducer } from "react";
import { add, initialState, addWishList, removeWishList, decreaseQty, increaseQty, remove, shopReducer, update } from "../Task";
import { Product } from "../../models";
import { WishList } from "../Wishlist/wishList";

export const App = () => {
  const [state, dispatch] = useReducer(shopReducer, initialState);

  const addToCart = (product: Product) => {
    const updatedCart = state.products.concat(product);
    updatePrice(updatedCart);

    dispatch(add(updatedCart));
  };

  const addToWishList = (product: Product) => {
    const updateList = state.wishes.concat(product);

    dispatch(addWishList(updateList));
  };

  const removeFromWish = (product: Product) => {
    const updatedList = state.wishes.filter(
      (currentProduct: Product) => currentProduct.name !== product.name
    );

    dispatch(removeWishList(updatedList));
  };

  const removeItem = (product: Product) => {
    const updatedCart = state.products.filter(
      (currentProduct: Product) => currentProduct.name !== product.name
    );
    updatePrice(updatedCart);

    dispatch(remove(updatedCart));
  };

  const updatePrice = (products: [] = []) => {
    let total = 0;
    products.forEach(
      (product: { price: number; quantity: number }) =>
        (total += product.price * product.quantity)
    );

    dispatch(update(total));
  };

  const increaseOrder = (product: Product) => {
    const updatedList = state.products.map((currentProduct: Product) => {
      if (currentProduct.name === product.name) {
        return {
          ...currentProduct,
          quantity: currentProduct.quantity + 1,
        };
      }
      return currentProduct;
    });

    updatePrice(updatedList);
    dispatch(increaseQty(updatedList));
  };

  const decreaseOrder = (product: Product) => {
    const updatedList = state.products.map((currentProduct: Product) => {
      if (currentProduct.name === product.name) {
        return {
          ...currentProduct,
          quantity: currentProduct.quantity - 1,
        };
      }
      return currentProduct;
    });

    updatePrice(updatedList);
    dispatch(decreaseQty(updatedList));
  };

  const value = {
    total: state.total,
    products: state.products,
    addToCart,
    removeItem,
    addToWishList,
    removeFromWish,
    increaseOrder,
    decreaseOrder
  };
  return (
    <ClothingShopContext.Provider value={value}>
      <Wrapper>
        <TitleWrapper>
          <h1>Clothing Shop Starter Project</h1>
        </TitleWrapper>
        <LinksWrapper>
          <Link to="/">Home</Link>
          <Link to="/cart">Cart</Link>
          <Link to="/wishlist">Wishlist</Link>
        </LinksWrapper>
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<WishList />} />
        </Routes>
      </Wrapper>
    </ClothingShopContext.Provider>
  );
};