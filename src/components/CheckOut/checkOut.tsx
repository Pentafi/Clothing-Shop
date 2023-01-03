import { useContext } from "react";
import { ClothingShopContext } from "../useContext";
import { Product } from "../Models/product";
import { Title } from "../Cart";
import {Det, CheckOutHeader, CheckOutTable, ItemWrapper, OrderButton} from "./checkOut.styled";

export const CheckOut = () => {
  const { products, total } = useContext(ClothingShopContext);

  const checkout = () => {
    alert(`Checkout - Total: ₱${total}`);
  
  }

  return (
    <>
      <Title>Items for Checkout</Title>
      <CheckOutTable>
        <thead>
          <tr>
            <CheckOutHeader>Item</CheckOutHeader>
            <CheckOutHeader>Name</CheckOutHeader>
            <CheckOutHeader>Price</CheckOutHeader>
            <CheckOutHeader>Quantity</CheckOutHeader>
            <CheckOutHeader>Total</CheckOutHeader>
          </tr>
        </thead>
        {products.map((product: Product, index) => (
          <tbody key={index}>
            <tr>
              <Det>
                <ItemWrapper background={product.imageUrl}></ItemWrapper>
              </Det>
              <Det>
                <p>{product.name}</p>
              </Det>
              <Det>
                <p>₱{product.price}.00</p>
              </Det>
              <Det>
                <p>{product.quantity}</p>
              </Det>
              <Det>
                <p>₱{product.price * product.quantity}.00</p>
              </Det>
            </tr>
          </tbody>
        ))}
      </CheckOutTable>
        <Title>
           Total Price: ₱{total}.00 <OrderButton onClick={checkout}><p>Place Order</p></OrderButton>
        </Title>
    </>
  );
};
