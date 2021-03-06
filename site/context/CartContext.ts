import { err, fromThrowable, ok, Result } from 'neverthrow'
import React, { useEffect, useState } from 'react'
export interface ProductCartState {
    productName: string
    productId: string
    quantity: number
    option: string
    unitPrice: number
    additions: string[]
}


interface CartState {
    items: {
        [cartItemId: string]: ProductCartState
    }
    paymentOptionId: string
    deliveryOptionId: string
    deliveryAddress: string
    phoneNumber: string
    fullName: string
    email: string
    instructions: string
}


export const defaultCartState = {
    items: {},
    paymentOptionId: '',
    deliveryAddress: '',
    phoneNumber: '',
    fullName: '',
    email: '',
    instructions: '',
    deliveryOptionId: ''
}

const cartFromString = (cartString: string): Result<CartState, null> => {
    return fromThrowable(JSON.parse, _ => null)(cartString)
}

const getCartString = (): Result<string, null> => {
    return fromThrowable(() => {
        const cartString = window?.localStorage.getItem('cart')
        if (!cartString) throw ''
        return cartString
    }, _ => null)()
}

const setCartString = (cartString: string): Result<void, null> => {
    return fromThrowable(() => window?.localStorage.setItem('cart', cartString), _ => null)()
}

const cartToString = (cart: CartState): Result<string, null> => {
    return fromThrowable(JSON.stringify, _ => null)(cart)
}

export const useCart = () => {
    const [state, setState] = useState<CartState>(defaultCartState)

    useEffect(() => {
        const initialState = getCartString()
            .andThen(cartFromString)
            .unwrapOr(defaultCartState)
        setState(initialState)
    }, [])

    useEffect(() => {
      
        cartToString(state)
        .map(cartString=>{console.log(cartString);return cartString})
            .andThen(setCartString)
    }, [state])

    const createCartId = (product: ProductCartState) => {
        // return (0 | Math.random() * 9e3).toString(36)
        const { additions, productId, option } = product
        return `${productId}${option}${additions.join('')}`
    }

    const addUpdateItem = (product: ProductCartState, cartItemId?: string) => {
        //nullish assignment operator
        cartItemId ??= createCartId(product)

        setState({
            ...state,
            items: {
                ...state.items,
                [cartItemId]: product
            }
        })
    }

    const deleteItem = (cartId: string) => {
        //https://dev.to/michi/let--key-id--0-rest---obj---destructuring-to-the-limit-deo
        const { [cartId]: id, ...items } = state.items
        setState({
            ...state,
            items
        })
    }

    type DetailsKeys = keyof Omit<CartState, 'items'>

    const updateDetail = <T extends DetailsKeys>(key: T, value: CartState[T]) => {
        setState({
            ...state,
            [key]: value
        })
    }

    return {
        addUpdateItem,
        deleteItem,
        updateDetail,
        state
    }
}

interface CartHook {
    addUpdateItem: (product: ProductCartState, cartId?: string) => void;
    deleteItem: (cartId: string) => void;
    updateDetail: <T extends "paymentOptionId" | "deliveryOptionId" | "deliveryAddress" | "phoneNumber" | "fullName" | "email" | "instructions">(key: T, value: CartState[T]) => void;
    state: CartState;
}

export default React.createContext<CartHook>({
    addUpdateItem: () => { },
    deleteItem: () => { },
    updateDetail: () => { },
    state: defaultCartState
})