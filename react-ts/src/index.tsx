import { registerApplication, start } from 'single-spa'
let routeList = ['/app3','/viewUser'];
registerApplication(
    'app2',
    () => import('./main'),
    () => routeList.indexOf(window.location.pathname) !=-1  ? true : false
  );

 

start();