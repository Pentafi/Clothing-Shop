import { useContext } from "react";
import { ClothingShopContext } from "../useContext";
import { Product } from "../Models";
import { Title } from "../Cart";
import { ProductCard } from "../ProductCard";
import { ProductsWrapper } from "./wishList.styled";

export const Wishlist = () => {
  const { wishes } = useContext(ClothingShopContext);
  return (
    <>
      <Title>You have {wishes.length} {wishes.length > 1 ? "items" : "item"} in your wish list</Title>
      <ProductsWrapper>
        {wishes.map((product: Product, index) => (
          <ProductCard {...product} key={index} />
        ))}
      </ProductsWrapper>
    </>
  );
};
