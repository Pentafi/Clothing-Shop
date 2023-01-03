import { Product } from "../Models/product";

export type ShopState = {
    products: Product[],
    wishes: Product[],
    total: number,
    addToCart: any,
    removeItem: any,
    addWish: any,
    removeWish: any,
    increaseOrder: any,
    decreaseOrder: any
}

export const initialState = {
    products: [],
    wishes: [],
    total: 0,
    addToCart: null,
    removeItem: null,
    addWish: null,
    removeWish: null,
    increaseOrder: null,
    decreaseOrder: null,
}