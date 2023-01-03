import { useContext, useState } from "react";
import { ClothingShopContext } from "../useContext";
import { Product } from "../Models";
import { Title } from "../Cart";
import { DecrementButton, IncrementButton, QuantityView } from "./quantityButton.styled";

export const QuantityButton = ({ name, price, quantity }: Product) => {
  const { increaseOrder, decreaseOrder, removeItem } = useContext(ClothingShopContext);

  const handleIncrease = () => {
    const product = { name, price, quantity };
    increaseOrder(product);
  };

  const handleDecrease = () => {
    const product = { name, price, quantity };
    if (quantity <= 1) {
      removeItem(product);
    } else {
      decreaseOrder(product);
    }
  };

  return (
    <div>
      <Title>Quantity:</Title>
      <IncrementButton onClick={() => handleIncrease()}><p>+</p></IncrementButton>
      <QuantityView>{quantity}</QuantityView>
      <DecrementButton onClick={() => handleDecrease()}><p>-</p></DecrementButton>
    </div>
  );
};
