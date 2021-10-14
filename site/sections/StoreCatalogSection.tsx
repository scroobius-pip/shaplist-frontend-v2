import { List, Stack } from '@mui/material';
import React from 'react';
import { ProductCard } from "../components/ProductCard";
import Section from 'components/Section';
import { useRouter } from 'next/dist/client/router';
import CartButton from 'components/CartButton';

function StoreCatalog(props: { hash: string }) {
  const router = useRouter()
  return (<Stack>
    <Section
      headingStyle={{ component: 'h1', variant: 'h4' }}
      heading='What would you like to order ?'
    >
      <List>
        <ProductCard onClick={() => router.push('#details?id=aklsdf')} />
        <ProductCard onClick={() => router.push('#details?id=aklsdf')} />
        <ProductCard onClick={() => router.push('#details?id=aklsdf')} />
        <ProductCard onClick={() => router.push('#details?id=aklsdf')} />
        <ProductCard onClick={() => router.push('#details?id=aklsdf')} />
        <ProductCard onClick={() => router.push('#details?id=aklsdf')} />
        <ProductCard onClick={() => router.push('#details?id=aklsdf')} />
        <ProductCard onClick={() => router.push('#details?id=aklsdf')} />
        <ProductCard onClick={() => router.push('#details?id=aklsdf')} />
        <ProductCard onClick={() => router.push('#details?id=aklsdf')} />
        <ProductCard onClick={() => router.push('#details?id=aklsdf')} />
        <ProductCard onClick={() => router.push('#details?id=aklsdf')} />
        <ProductCard onClick={() => router.push('#details?id=aklsdf')} />
        <ProductCard onClick={() => router.push('#details?id=aklsdf')} />
        <ProductCard onClick={() => router.push('#details?id=aklsdf')} />
        <ProductCard onClick={() => router.push('#details?id=aklsdf')} />
        <ProductCard onClick={() => router.push('#details?id=aklsdf')} />
        <ProductCard onClick={() => router.push('#details?id=aklsdf')} />
        <ProductCard onClick={() => router.push('#details?id=aklsdf')} />
        <ProductCard onClick={() => router.push('#details?id=aklsdf')} />
        <ProductCard onClick={() => router.push('#details?id=aklsdf')} />
        <ProductCard onClick={() => router.push('#details?id=aklsdf')} />
        <ProductCard onClick={() => router.push('#details?id=aklsdf')} />
        <ProductCard onClick={() => router.push('#details?id=aklsdf')} />
        <ProductCard onClick={() => router.push('#details?id=aklsdf')} />
        <ProductCard onClick={() => router.push('#details?id=aklsdf')} />
        <ProductCard onClick={() => router.push('#details?id=aklsdf')} />
        <ProductCard onClick={() => router.push('#details?id=aklsdf')} />
        <ProductCard onClick={() => router.push('#details?id=aklsdf')} />
        <ProductCard onClick={() => router.push('#details?id=aklsdf')} />
        <CartButton
          text='View Cart'
          onClick={() => router.push('#cart')}
        />
      </List>
    </Section>
  </Stack>);
}

export default StoreCatalog