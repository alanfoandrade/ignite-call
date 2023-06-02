// eslint-disable-next-line @typescript-eslint/no-unused-vars
import NextAuth from 'next-auth';

declare module 'next-auth' {
  interface User {
    avatar_url: string;
    email: string;
    id: string;
    name: string;
    username: string;
  }
}
