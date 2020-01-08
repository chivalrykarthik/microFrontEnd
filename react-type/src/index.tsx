import { registerApplication, start } from 'single-spa'

registerApplication(
    'app2',
    () => import('./main'),
    () => window.location.pathname === "/"  ? true : false
  );

  registerApplication(
    'app3',
    () => import('./main'),
    () => window.location.pathname === "/app3"  ? true : false
  );
start();