import { Link, Route, Routes } from "react-router-dom";
import { LinksWrapper, TitleWrapper, Wrapper } from "./App.styled";
import { Cart } from "../Cart";
import { Products } from "../Products";
import { ShopContext } from "../Context";
import { useReducer } from "react";
import { add, initialState, addWishList, removeWishList, decreaseQty, increaseQty, remove, shopReducer, update } from "../Task";
import { Product } from "../Models/product";
import { WishList } from "../Wishlist/wishList";
import { CheckOut } from "../CheckOut";

export const App = () => {
  const [state, dispatch] = useReducer(shopReducer, initialState);

  const addToCart = (product: Product) => {
    const updatedCart = state.products.concat(product);
    updatePrice(updatedCart);

    dispatch(add(updatedCart));
  };

  const addWish = (product: Product) => {
    const updateList = state.wishes.concat(product);

    dispatch(addWishList(updateList));
  };

  const removeWish = (product: Product) => {
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
    wishes: state.wishes,
    addToCart,
    removeItem,
    addWish,
    removeWish,
    increaseOrder,
    decreaseOrder
  };

  return (
    <ShopContext.Provider value={value}>
      <Wrapper>
        <TitleWrapper>
          <h1>Clothing Shop Starter Project</h1>
        </TitleWrapper>
        <LinksWrapper>
          <Link to="/">Home</Link>
          <Link to="/cart">Cart</Link>
          <Link to="/wishlist">Wishlist</Link>
          <Link to="/checkout">Checkout</Link>
        </LinksWrapper>
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<WishList />} />
          <Link to="/checkout">Checkout</Link>
        </Routes>
      </Wrapper>
    </ShopContext.Provider>
  );
};