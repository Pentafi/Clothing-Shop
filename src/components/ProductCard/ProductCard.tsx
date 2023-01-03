import { AddButton, SubTitle, TextContainer, Title, Wrapper, WishButton} from './ProductCard.styled';

import { useState, useEffect, useContext } from 'react';
import { Product } from '../Models';
import { ClothingShopContext } from "../useContext";
import { BsFillStarFill, BsStar } from "react-icons/bs";

export const ProductCard = ({ name, imageUrl, price, quantity }: Product) => {
  const {products, wishes, addToCart, removeItem, addWish, removeWish } = useContext(ClothingShopContext);
  const [isInCart, setIsInCart] = useState(false);
  const [isInList, setIsInList] = useState(false);

useEffect(() => {
    const productIsInCart = products.find((product) => product.name === name);

    if (productIsInCart) {
      setIsInCart(true);
    } else {
      setIsInCart(false);
    }
  }, [products, name]);

  useEffect(() => {
    const itemIsInList = wishes.find((product) => product.name === name);

    if (itemIsInList) {
      setIsInList(true);
    } else {
      setIsInList(false);
    }
  }, [wishes, name]);

  const handleClick = () => {
    const product = { name, imageUrl, price, quantity };
    if (isInCart) {
      removeItem(product);
      setIsInCart(false);
    } else {
      addToCart(product);
      setIsInCart(true);
    }
  };
  
  const handleList = () => {
    const product = { name, imageUrl, price };
    if (isInList) {
      removeWish(product);
      setIsInList(false);
    } else {
      addWish(product);
      setIsInList(true);
    }
  };
  return (
    <Wrapper background={imageUrl}>
      <AddButton isInCart={isInCart} onClick={handleClick}>
        <p>{isInCart ? "-" : "+"}</p>
      </AddButton>
      <WishButton isInList={isInList} onClick={handleList}>
        <p>{isInList ? <BsFillStarFill /> : <BsStar />}</p>
      </WishButton>
      <TextContainer>
        <Title>{name}</Title>
        <SubTitle>₱{price}.00</SubTitle>
      </TextContainer>
    </Wrapper>
  );
};