import * as Factory from "factory.ts"
import { FulfillmentType, StoreQuery, DeliveryPaymentType, DeliveryOption, PaymentOption, PaymentType, ProductStatus } from 'generated/graphql'
import { DStore, DProduct } from 'types/types'
import * as faker from 'faker'
export const StoreQueryFactory = Factory.Sync.makeFactory<DStore>(
    {
        __typename: 'Store',
        id: Factory.each(i => i.toString()),
        description: faker.lorem.paragraph(2),
        name: faker.company.companyName(),
        slug: faker.lorem.slug(),
        contactChannel: {
            __typename: 'ContactChannel',
            phone_number: faker.phone.phoneNumber(),
            whatsapp_number: faker.phone.phoneNumber()
        },
        currency: {
            __typename: 'Currency',
            symbol: faker.finance.currencySymbol(),
            text: faker.finance.currencyName()
        },
        deliveryOptions: Array(faker.datatype.number(5), null).map((_): DeliveryOption => faker.random.arrayElement([
            {
                fulfillment: FulfillmentType.Pickup,
                __typename: 'DeliveryOption',
                name: faker.random.arrayElement(['Pickup', `Pickup at ${faker.address.streetAddress}`]),
                payment: faker.random.arrayElement([DeliveryPaymentType.Quote, DeliveryPaymentType.SetPrice]),
                cost: parseFloat(faker.finance.amount())
            },
            {
                fulfillment: FulfillmentType.Delivery,
                __typename: 'DeliveryOption',
                name: `Delivery to ${faker.address.streetAddress}`,
                payment: DeliveryPaymentType.SetPrice,
                cost: parseFloat(faker.finance.amount())
            },
            {
                fulfillment: FulfillmentType.Delivery,
                __typename: 'DeliveryOption',
                name: `Free Delivery`,
                payment: DeliveryPaymentType.SetPrice,

            }
        ]
        )),
        imageUrl: {
            __typename: 'ImageUrl',
            full: faker.image.food(),
            preview: faker.image.food()
        },
        links: [{
            __typename: 'Link',
            name: 'twitter',
            value: 'simdi_jinkins'
        }, {
            __typename: 'Link',
            name: 'instagram',
            value: 'simdijinkins'
        }],
        paymentOptions: Array(faker.datatype.number(5), null).map((_): PaymentOption => faker.random.arrayElement([
            {
                instructions: faker.random.arrayElement([faker.lorem.sentence(), '']),
                name: faker.random.arrayElement(['Payment on delivery/pickup', 'Bank Transfer', 'Debit/Credit Card']),
                type: faker.random.arrayElement([PaymentType.BankTransfer, PaymentType.Card, PaymentType.Cash]),
                value: '',
                __typename: 'PaymentOption'
            }
        ])),
        phone: faker.phone.phoneNumber(),
        products: {
            __typename: 'ProductList',
            list: Array.from({ length: faker.datatype.number({ min: 10, max: 100 }) }, (): DProduct => ({
                __typename: 'Product',
                price: {
                    __typename: 'Price',
                    value: parseFloat(faker.commerce.price())
                },
                description: faker.commerce.productDescription(),
                id: faker.lorem.slug(),
                name: faker.commerce.productName(),
                slug: faker.lorem.slug(),
                status: faker.random.arrayElement([ProductStatus.Available, ProductStatus.Available, ProductStatus.Available, ProductStatus.Available, ProductStatus.Available, ProductStatus.Unavailable]),
                imageUrl: Array.from({ length: faker.datatype.number(2) }, () => ({
                    full: faker.image.business(),
                    preview: faker.image.business(50),
                    __typename: 'ImageUrl'
                }))
            }))
        },


    }
)

export const ProductFactory = Factory.Sync.makeFactory<DProduct>({
    __typename: 'Product',
    price: {
        __typename: 'Price',
        value: parseFloat(faker.commerce.price())
    },
    description: faker.commerce.productDescription(),
    id: Factory.each(i => i.toString()),
    name: faker.commerce.productName(),
    slug: faker.lorem.slug(),
    status: faker.random.arrayElement([ProductStatus.Available, ProductStatus.Available, ProductStatus.Available, ProductStatus.Available, ProductStatus.Available, ProductStatus.Unavailable]),
    imageUrl: [{
        full: faker.image.business(),
        preview: faker.image.business(50),
        __typename: 'ImageUrl'
    }]
})