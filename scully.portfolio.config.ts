import { ScullyConfig } from '@scullyio/scully';
import '@scullyio/scully-plugin-puppeteer';

export const config: ScullyConfig = {
  projectRoot: './src',
  projectName: 'portfolio',
  distFolder: './dist/portfolio/browser',  
  outDir: './dist/static',
  routes: {},
  extraRoutes: [
    '/',
    '/blog-component',
    '/about-component',
    '/projects-component',
    '/viewer-component'
  ]
};