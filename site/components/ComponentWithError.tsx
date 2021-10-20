import React from 'react';

interface Props<T, A> {
  errorComponent: React.ReactElement
  data: T & { __typename: 'Error' | A } | undefined | null
  children: (data: Extract<T, { __typename: A }>) => React.ReactElement
}
function ComponentWithError<T, A>({ data, errorComponent, children }: Props<T, A>) {
  return data?.__typename === 'Error' ? errorComponent : children(data as Extract<T, { __typename: A }>)
}
export default ComponentWithError