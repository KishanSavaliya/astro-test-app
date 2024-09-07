// @ts-check
import { defineConfig } from 'astro/config';
//@ts-ignore
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
});
