
export default (symbol: string | undefined | null, price: number | undefined | null) => {
    return !price ? 'FREE' : `${symbol}${price}`
}