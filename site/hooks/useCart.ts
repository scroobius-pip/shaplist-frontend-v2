import { err, fromThrowable, ok, Result } from 'neverthrow'
import { useEffect, useState } from 'react'
interface ProductCartState {
    productId: string
    quantity: number
    optionId: string
    additions: string[]
}


interface CartState {
    items: {
        [cartId: string]: ProductCartState
    }
    paymentOptionId: string
    deliveryOptionId: string
    deliveryAddress: string
    phoneNumber: string
    fullName: string
    email: string
    instructions: string
}


const defaultCartState = {
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
    return fromThrowable(window?.localStorage.setItem, _ => null)('cart', cartString)
}

const cartToString = (cart: CartState): Result<string, null> => {
    return fromThrowable(JSON.stringify, _ => null)(cart)
}

export default () => {
    const [state, setState] = useState<CartState>(defaultCartState)

    useEffect(() => {
        const initialState = getCartString()
            .andThen(cartFromString)
            .unwrapOr(defaultCartState)
        setState(initialState)
    }, [])

    useEffect(() => {
        cartToString(state)
            .andThen(setCartString)
    }, [state])

    const createCartId = () => {
        return (0 | Math.random() * 9e3).toString(36)
    }

    const addUpdateItem = (product: ProductCartState, cartId = createCartId()) => {
        setState({
            ...state,
            items: {
                ...state.items,
                [cartId]: product
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


