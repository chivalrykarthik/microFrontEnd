import { registerApplication, start } from 'single-spa'

registerApplication(
    'app2',
    () => import('./main.js'),
    () => window.location.pathname === "/"  ? true : false
  );

start();