import { StoreQuery } from 'generated/graphql';

export type DStore = Extract<StoreQuery['storeFromSlug'], { __typename: 'Store' }>
export type DProduct = Extract<NonNullable<DStore['products']>,{__typename: 'ProductList'}>['list'][0]
