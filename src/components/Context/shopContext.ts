import { createContext } from "react";
import { ShopState, initialState } from "../Task";

export const ShopContext = createContext<ShopState>(initialState);
