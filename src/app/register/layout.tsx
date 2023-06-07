import { ReactNode } from 'react';

import { Container } from './components/_layout/Container';

interface RegisterLayout {
  children: ReactNode;
}

export default function RegisterLayout({ children }: RegisterLayout) {
  return <Container as="main">{children}</Container>;
}
