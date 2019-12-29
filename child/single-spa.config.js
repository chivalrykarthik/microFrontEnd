import { registerApplication, start } from 'single-spa'

registerApplication(
    'app2',
    () => import('./src/app2/main.app.js'),
    () => location.pathname === "/"  ? true : false
  );

start();