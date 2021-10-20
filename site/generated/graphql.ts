import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type BoolObj = {
  __typename: 'BoolObj';
  result: Scalars['Boolean'];
};

export type BoolResult = BoolObj | Error;

export type Cart = {
  __typename: 'Cart';
  deliveryOption?: Maybe<DeliveryOption>;
  id: Scalars['ID'];
  items: Array<CartItem>;
  location: Location;
  note?: Maybe<Scalars['String']>;
  paymentOption?: Maybe<PaymentOption>;
};

export type CartInput = {
  deliveryOption?: Maybe<DeliveryOptionInput>;
  items?: Maybe<Array<CartItemInput>>;
  location?: Maybe<LocationInput>;
  note?: Maybe<Scalars['String']>;
  paymentOption?: Maybe<PaymentOptionInput>;
};

export type CartItem = {
  __typename: 'CartItem';
  expiring?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  product: Product;
  quantity: Scalars['Int'];
};

export type CartItemInput = {
  id?: Maybe<Scalars['ID']>;
  productId: Scalars['ID'];
  quantity: Scalars['Int'];
  storeId: Scalars['ID'];
};

export type CartItemResult = CartItem | Error;

export type CartList = {
  __typename: 'CartList';
  list: Array<Cart>;
};

export type CartListResult = CartList | Error;

export type CartResult = Cart | Error;

export type Category = {
  __typename: 'Category';
  id: Scalars['ID'];
  name: Scalars['String'];
  slug?: Maybe<Scalars['String']>;
  subCategories?: Maybe<Array<Category>>;
};

export type CategoryList = {
  __typename: 'CategoryList';
  list: Array<Category>;
};

export type CategoryListResult = CategoryList | Error;

export type ContactChannel = {
  __typename: 'ContactChannel';
  phone_number?: Maybe<Scalars['String']>;
  whatsapp_number?: Maybe<Scalars['String']>;
};

export type ContactChannelInput = {
  phone_number?: Maybe<Scalars['String']>;
  whatsapp_number?: Maybe<Scalars['String']>;
};

export type Currency = {
  __typename: 'Currency';
  id: Scalars['ID'];
  symbol: Scalars['String'];
  text: Scalars['String'];
};

export type CurrencyInput = {
  symbol: Scalars['String'];
  text: Scalars['String'];
};

export type CurrencyList = {
  __typename: 'CurrencyList';
  list: Array<CurrencyResult>;
};

export type CurrencyListResult = CurrencyList | Error;

export type CurrencyMetaInput = {
  symbol: Scalars['String'];
  text: Scalars['String'];
};

export type CurrencyResult = Currency | Error;

export type DeliveryOption = {
  __typename: 'DeliveryOption';
  cost?: Maybe<Scalars['Float']>;
  instructions?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  type: DeliveryType;
};

export type DeliveryOptionInput = {
  cost?: Maybe<Scalars['Float']>;
  instructions?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  type: DeliveryType;
};

export enum DeliveryType {
  Quote = 'QUOTE',
  SetPrice = 'SET_PRICE'
}

export type Department = {
  __typename: 'Department';
  categories?: Maybe<Array<Category>>;
  id: Scalars['ID'];
  name: Scalars['String'];
  slug?: Maybe<Scalars['String']>;
};

export type DepartmentInfo = {
  __typename: 'DepartmentInfo';
  id: Scalars['ID'];
  name: Scalars['String'];
  slug?: Maybe<Scalars['String']>;
};

export type DepartmentList = {
  __typename: 'DepartmentList';
  list: Array<Department>;
};

export type DepartmentListResult = DepartmentList | Error;

export type Error = {
  __typename: 'Error';
  code: ErrorCode;
  message: Scalars['String'];
};

export enum ErrorCode {
  AuthError = 'AUTH_ERROR',
  InvalidInput = 'INVALID_INPUT',
  NotFound = 'NOT_FOUND',
  SystemError = 'SYSTEM_ERROR'
}

export type IdObject = {
  __typename: 'IDObject';
  id: Scalars['ID'];
};

export type IdResult = Error | IdObject;

export type ImageUrl = {
  __typename: 'ImageUrl';
  full: Scalars['String'];
  preview: Scalars['String'];
};

export type ImageUrlInput = {
  full: Scalars['String'];
  preview: Scalars['String'];
};

export type IntObj = {
  __typename: 'IntObj';
  result: Scalars['Int'];
};

export type IntResult = Error | IntObj;

export type LimitedTime = {
  __typename: 'LimitedTime';
  expiring: Scalars['Int'];
  start: Scalars['Int'];
};

export type LimitedTimeInput = {
  expiring: Scalars['Int'];
  start: Scalars['Int'];
};

export type Link = {
  __typename: 'Link';
  name: Scalars['String'];
  value: Scalars['String'];
};

export type LinkInput = {
  name: Scalars['String'];
  value: Scalars['String'];
};

export type Location = {
  __typename: 'Location';
  city?: Maybe<LocationEntity>;
  country?: Maybe<LocationEntity>;
  details?: Maybe<Scalars['String']>;
  state?: Maybe<LocationEntity>;
};

export type LocationCityMeta = {
  __typename: 'LocationCityMeta';
  name: Scalars['String'];
};

export type LocationCityMetaInput = {
  name: Scalars['String'];
};

export type LocationCountryMeta = {
  __typename: 'LocationCountryMeta';
  currency: Scalars['ID'];
  name: Scalars['String'];
  states: Array<LocationStateMeta>;
};

export type LocationCountryMetaInput = {
  currency: Scalars['ID'];
  name: Scalars['String'];
  states: Array<LocationStateMetaInput>;
};

export type LocationEntity = {
  __typename: 'LocationEntity';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type LocationEntityList = {
  __typename: 'LocationEntityList';
  list: Array<LocationEntityResult>;
};

export type LocationEntityListResult = Error | LocationEntityList;

export type LocationEntityResult = Error | LocationEntity;

export type LocationInput = {
  cityId?: Maybe<Scalars['ID']>;
  countryId: Scalars['ID'];
  details?: Maybe<Scalars['String']>;
  stateId: Scalars['ID'];
};

export type LocationMeta = {
  __typename: 'LocationMeta';
  countries?: Maybe<Array<LocationCountryMeta>>;
};

export type LocationMetaInput = {
  countries?: Maybe<Array<LocationCountryMetaInput>>;
};

export type LocationStateMeta = {
  __typename: 'LocationStateMeta';
  cities: Array<LocationCityMeta>;
  name: Scalars['String'];
};

export type LocationStateMetaInput = {
  cities: Array<LocationCityMetaInput>;
  name: Scalars['String'];
};

export type Meta = {
  __typename: 'Meta';
  cities: LocationEntityListResult;
  countries: LocationEntityListResult;
  currencies: CurrencyListResult;
  departments: DepartmentListResult;
  states: LocationEntityListResult;
  storeSlugExists: BoolResult;
};


export type MetaCitiesArgs = {
  stateId: Scalars['ID'];
};


export type MetaStatesArgs = {
  countryId: Scalars['ID'];
};


export type MetaStoreSlugExistsArgs = {
  slug: Scalars['String'];
};

export type Mutation = {
  __typename: 'Mutation';
  addCountries: BoolResult;
  addCurrencies: CurrencyListResult;
  addProduct: ProductResult;
  addProductToCart: CartItemResult;
  createStore: StoreResult;
  deleteProduct: BoolResult;
  updateCart: StringResult;
  updateCartItemQuantity: IntResult;
  updateMe: UserResult;
  updateOrder: OrderResult;
  updateProduct: ProductResult;
  updateStore: StoreResult;
  updateUser: UserResult;
};


export type MutationAddCountriesArgs = {
  input: LocationMetaInput;
};


export type MutationAddCurrenciesArgs = {
  input: Array<CurrencyMetaInput>;
};


export type MutationAddProductArgs = {
  product: ProductInput;
};


export type MutationAddProductToCartArgs = {
  cartItem?: Maybe<CartItemInput>;
};


export type MutationCreateStoreArgs = {
  store: StoreInput;
};


export type MutationDeleteProductArgs = {
  productId: Scalars['ID'];
};


export type MutationUpdateCartArgs = {
  cart: CartInput;
  cartId: Scalars['ID'];
  storeId: Scalars['ID'];
};


export type MutationUpdateCartItemQuantityArgs = {
  cartItemId: Scalars['ID'];
  quantity: Scalars['Int'];
};


export type MutationUpdateMeArgs = {
  input: UserInput;
};


export type MutationUpdateOrderArgs = {
  order: OrderInput;
  orderId: Scalars['ID'];
};


export type MutationUpdateProductArgs = {
  product: ProductUpdateInput;
  productId: Scalars['ID'];
};


export type MutationUpdateStoreArgs = {
  store: StoreInput;
  storeId: Scalars['ID'];
};


export type MutationUpdateUserArgs = {
  user: UserInput;
  userId: Scalars['ID'];
};

export type Order = {
  __typename: 'Order';
  deliveryOption: DeliveryOption;
  id: Scalars['ID'];
  items: Array<CartItem>;
  location: Location;
  note?: Maybe<Scalars['String']>;
  paymentOption: PaymentOption;
  status: OrderStatus;
};

export type OrderInput = {
  status?: Maybe<OrderStatus>;
};

export type OrderList = {
  __typename: 'OrderList';
  list: Array<Order>;
};

export type OrderListResult = Error | OrderList;

export type OrderResult = Error | Order;

export enum OrderStatus {
  CustomerPendingCheckout = 'CUSTOMER_PENDING_CHECKOUT',
  MerchantCancelled = 'MERCHANT_CANCELLED',
  MerchantDelivered = 'MERCHANT_DELIVERED',
  MerchantDispatching = 'MERCHANT_DISPATCHING',
  MerchantPending = 'MERCHANT_PENDING'
}

export type PaymentOption = {
  __typename: 'PaymentOption';
  instructions: Scalars['String'];
  name: Scalars['String'];
  type: PaymentType;
  value: Scalars['String'];
};

export type PaymentOptionInput = {
  instructions: Scalars['String'];
  name: Scalars['String'];
  type: PaymentType;
  value: Scalars['String'];
};

export enum PaymentType {
  BankTransfer = 'BANK_TRANSFER',
  Card = 'CARD',
  Cash = 'CASH',
  Custom = 'CUSTOM'
}

export type Price = {
  __typename: 'Price';
  value: Scalars['Float'];
};

export type PriceInput = {
  value: Scalars['Float'];
};

export type Product = {
  __typename: 'Product';
  category?: Maybe<Category>;
  description: Scalars['String'];
  id: Scalars['ID'];
  imageUrl?: Maybe<Array<ImageUrl>>;
  limitedStock?: Maybe<Stock>;
  limitedTime?: Maybe<LimitedTime>;
  name: Scalars['String'];
  price?: Maybe<Price>;
  productAdditions?: Maybe<Array<ProductAddition>>;
  productOptions?: Maybe<Array<ProductOption>>;
  slug: Scalars['String'];
  status: ProductStatus;
  subCategory?: Maybe<Category>;
};

export type ProductAddition = {
  __typename: 'ProductAddition';
  name: Scalars['String'];
  price?: Maybe<Price>;
};

export type ProductAdditionInput = {
  name: Scalars['String'];
  price?: Maybe<PriceInput>;
};

export type ProductInput = {
  description: Scalars['String'];
  imageUrls?: Maybe<Array<ImageUrlInput>>;
  limitedStock?: Maybe<StockInput>;
  limitedTime?: Maybe<LimitedTimeInput>;
  name: Scalars['String'];
  price?: Maybe<PriceInput>;
  productAdditions?: Maybe<Array<ProductAdditionInput>>;
  productOptions?: Maybe<Array<ProductOptionInput>>;
  storeId: Scalars['String'];
  subCategoryId: Scalars['ID'];
};

export type ProductList = {
  __typename: 'ProductList';
  list: Array<Product>;
};

export type ProductListResult = Error | ProductList;

export type ProductOption = {
  __typename: 'ProductOption';
  imageUrl?: Maybe<ImageUrl>;
  name: Scalars['String'];
  price?: Maybe<Price>;
};

export type ProductOptionInput = {
  imageUrl?: Maybe<ImageUrlInput>;
  name: Scalars['String'];
  price?: Maybe<PriceInput>;
};

export type ProductResult = Error | Product;

export type ProductSearchInput = {
  type: ProductSearchInputType;
  value?: Maybe<Scalars['String']>;
};

export enum ProductSearchInputType {
  Search = 'SEARCH',
  SubCategoryId = 'SUB_CATEGORY_ID'
}

export enum ProductStatus {
  Available = 'AVAILABLE',
  Unavailable = 'UNAVAILABLE'
}

export type ProductUpdateInput = {
  description?: Maybe<Scalars['String']>;
  imageUrls?: Maybe<Array<ImageUrlInput>>;
  limitedStock?: Maybe<StockInput>;
  limitedTime?: Maybe<LimitedTimeInput>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<PriceInput>;
  productAdditions?: Maybe<Array<ProductAdditionInput>>;
  productOptions?: Maybe<Array<ProductOptionInput>>;
  subCategoryId: Scalars['ID'];
};

export type Query = {
  __typename: 'Query';
  cart: CartListResult;
  me: UserResult;
  meta: Meta;
  storeFromSlug: StoreResult;
};


export type QueryStoreFromSlugArgs = {
  slug: Scalars['String'];
};

export type SeedDb = {
  __typename: 'SeedDB';
  currencies: CurrencyListResult;
  locations: LocationEntityListResult;
};

export type SeedDbResult = Error | SeedDb;

export type Stock = {
  __typename: 'Stock';
  remaining?: Maybe<Scalars['Int']>;
  started?: Maybe<Scalars['Int']>;
};

export type StockInput = {
  amount: Scalars['Int'];
};

export type Store = {
  __typename: 'Store';
  contactChannel?: Maybe<ContactChannel>;
  currency?: Maybe<Currency>;
  deliveryOptions?: Maybe<Array<DeliveryOption>>;
  department?: Maybe<DepartmentInfo>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  imageUrl?: Maybe<ImageUrl>;
  links?: Maybe<Array<Link>>;
  name: Scalars['String'];
  paymentOptions?: Maybe<Array<PaymentOption>>;
  phone?: Maybe<Scalars['String']>;
  products?: Maybe<ProductListResult>;
  slug: Scalars['String'];
  storeOrders?: Maybe<OrderListResult>;
};


export type StoreProductsArgs = {
  input?: Maybe<ProductSearchInput>;
};

export type StoreInput = {
  contactChannel?: Maybe<ContactChannelInput>;
  countriesSupported?: Maybe<Array<Scalars['ID']>>;
  currencyId: Scalars['ID'];
  deliveryOptions?: Maybe<Array<DeliveryOptionInput>>;
  departmentId?: Maybe<Scalars['ID']>;
  description?: Maybe<Scalars['String']>;
  imageUrl?: Maybe<ImageUrlInput>;
  internationalShippingSupported?: Maybe<Scalars['Boolean']>;
  links?: Maybe<Array<LinkInput>>;
  name: Scalars['String'];
  paymentOptions?: Maybe<Array<PaymentOptionInput>>;
  slug: Scalars['String'];
  statesSupported?: Maybe<Array<Scalars['ID']>>;
};

export type StoreResult = Error | Store;

export type StringObj = {
  __typename: 'StringObj';
  result: Scalars['String'];
};

export type StringResult = Error | StringObj;

export type User = {
  __typename: 'User';
  email?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  location?: Maybe<Location>;
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  store?: Maybe<StoreResult>;
};

export type UserInput = {
  email?: Maybe<Scalars['String']>;
  location?: Maybe<LocationInput>;
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
};

export type UserResult = Error | User;

export type StoreQueryVariables = Exact<{
  storeFromSlugSlug: Scalars['String'];
}>;


export type StoreQuery = { __typename: 'Query', storeFromSlug: { __typename: 'Error', code: ErrorCode, message: string } | { __typename: 'Store', name: string, description?: string | null | undefined, slug: string, id: string, phone?: string | null | undefined, currency?: { __typename: 'Currency', text: string, symbol: string } | null | undefined, links?: Array<{ __typename: 'Link', name: string, value: string }> | null | undefined, imageUrl?: { __typename: 'ImageUrl', full: string, preview: string } | null | undefined, contactChannel?: { __typename: 'ContactChannel', whatsapp_number?: string | null | undefined, phone_number?: string | null | undefined } | null | undefined, products?: { __typename: 'Error', code: ErrorCode, message: string } | { __typename: 'ProductList', list: Array<{ __typename: 'Product', id: string, name: string, slug: string, description: string, status: ProductStatus, imageUrl?: Array<{ __typename: 'ImageUrl', preview: string, full: string }> | null | undefined, limitedStock?: { __typename: 'Stock', remaining?: number | null | undefined, started?: number | null | undefined } | null | undefined, productAdditions?: Array<{ __typename: 'ProductAddition', name: string, price?: { __typename: 'Price', value: number } | null | undefined }> | null | undefined, productOptions?: Array<{ __typename: 'ProductOption', name: string, price?: { __typename: 'Price', value: number } | null | undefined, imageUrl?: { __typename: 'ImageUrl', full: string, preview: string } | null | undefined }> | null | undefined, price?: { __typename: 'Price', value: number } | null | undefined }> } | null | undefined, deliveryOptions?: Array<{ __typename: 'DeliveryOption', type: DeliveryType, instructions?: string | null | undefined, name: string, cost?: number | null | undefined }> | null | undefined, paymentOptions?: Array<{ __typename: 'PaymentOption', type: PaymentType, value: string, name: string, instructions: string }> | null | undefined } };


export const StoreDocument = gql`
    query Store($storeFromSlugSlug: String!) {
  storeFromSlug(slug: $storeFromSlugSlug) {
    ... on Store {
      name
      currency {
        text
        symbol
      }
      links {
        name
        value
      }
      description
      imageUrl {
        full
        preview
      }
      slug
      id
      phone
      contactChannel {
        whatsapp_number
        phone_number
      }
      products {
        ... on ProductList {
          list {
            id
            name
            slug
            description
            imageUrl {
              preview
              full
            }
            status
            limitedStock {
              remaining
              started
            }
            productAdditions {
              name
              price {
                value
              }
            }
            productOptions {
              price {
                value
              }
              imageUrl {
                full
                preview
              }
              name
            }
            price {
              value
            }
          }
        }
        ... on Error {
          code
          message
        }
      }
      deliveryOptions {
        type
        instructions
        name
        cost
      }
      paymentOptions {
        type
        value
        name
        instructions
      }
    }
    ... on Error {
      code
      message
    }
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    Store(variables: StoreQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<StoreQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<StoreQuery>(StoreDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Store');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;