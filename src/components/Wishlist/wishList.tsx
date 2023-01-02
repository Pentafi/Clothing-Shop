import { Key, useContext } from "react";
import { ShopContext } from "../Context/shopContext";
import { Product } from "../../models";
import { Title } from "../Cart";
import { ProductCard } from "../ProductCard";
import { ProductsWrapper } from "./wishList.styled";

export const WishList = () => {
  const { wishes } = useContext(ShopContext);
  return (
    <>
    <Title>Your Wishlist</Title>
      <ProductsWrapper>
        {wishes.map((product: Product, index: Key | null | undefined) => (
          <ProductCard {...product} key={index} />
        ))}
      </ProductsWrapper>
    </>
  );
};
