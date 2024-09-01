import { createContext, useEffect, useState } from "react";
import { product_about, product_list } from "../assets/assets";
export const StoreContext = createContext(null)

const StoreContextProvider = (props) =>{
    const [cartItems, setCartItems] = useState({});

    const addToCart = (itemId) =>{
        if(!cartItems[itemId]){
            setCartItems(prev =>({...prev,[itemId]:1}))
        }
        else{
            setCartItems((prev=>({...prev,[itemId]:prev[itemId]+1})))
        }
    }
    
    const removeFromCart = (itemId) =>{
        setCartItems((prev=>({...prev,[itemId]:prev[itemId]-1})))
    }
  
    const getTotalCartAmount = ()=>{
        let totalAmount = 0 ;
        for(const item in cartItems)
        {
            if(cartItems[item]>0)
            {
                let itemInfo = product_about.find((product)=>product._id === item)
                totalAmount += itemInfo.price*cartItems[item];
            }
        }
        return totalAmount;
    }
    // useEffect(()=>{
    //     console.log(cartItems);
    // },[cartItems])
    
    const contextValue = {
        product_about,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
    }
    return (
        <StoreContext.Provider value = {contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider