// File: next-types.d.ts
import 'next';

declare module 'next' {
  export interface PageProps {
    params?: { slug: string }; // Define `params` as a plain object
    searchParams?: Record<string, string | string | undefined>;
  }
}