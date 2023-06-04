import { ReactNode } from 'react';

import { Container } from './components/_layout/Container';

export const metadata = {
  description: 'App Ignite Call',
  title: 'Ignite Call',
};

interface RegisterLayout {
  children: ReactNode;
}

export default function RegisterLayout({ children }: RegisterLayout) {
  return <Container as="main">{children}</Container>;
}
