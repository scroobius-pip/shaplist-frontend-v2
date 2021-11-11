
export default (symbol: string | undefined | null, price: number | undefined | null, fallbackText = 'FREE') => {
    return !price ? fallbackText : `${symbol}${price}`
}