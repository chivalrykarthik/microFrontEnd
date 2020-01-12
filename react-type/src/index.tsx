import { registerApplication, start } from 'single-spa'

registerApplication(
    'app2',
    () => import('./main'),
    () => window.location.pathname === "/"  ? true : false
  );

start();