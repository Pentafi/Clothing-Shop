import { useContext } from "react";
import { Link } from "react-router-dom";
import { ClothingShopContext, } from "../useContext/shopContext";
import { Product } from "../../models";
import { ProductCard } from "../ProductCard";
import { QuantityButton } from "../Quantity";
import { CheckoutButton, ProductsWrapper, Title } from "./Cart.styled";

export const Cart = () => {
  const { products, total } = useContext(ClothingShopContext);
  return (
    <>
      <Title>Your cart total is ₱{total}.00</Title>
      <ProductsWrapper>
        {products.map((product: Product, index) => (
          <ProductCard {...product} key={index} />
        ))}
      </ProductsWrapper>
      {products.length > 0 && (
        <Link to="/checkout">
          <CheckoutButton>
            <p>Checkout</p>
          </CheckoutButton>
        </Link>
      )}
    </>
  );
};

const Layout = (product: Product) => {
  return (
    <>
      <ProductCard {...product} />
      <QuantityButton {...product} />
    </>
  );
};