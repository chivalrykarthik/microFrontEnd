import { registerApplication, start } from 'single-spa'

const runScript = async (url) => {
  return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = url;
      script.onload = resolve;
      script.onerror = reject;

      const firstScript = document.getElementsByTagName('script')[0];
      firstScript.parentNode.insertBefore(script, firstScript);
  });
};

const loadReactApp = async () => {
  await runScript('http://localhost:8000/dist/main.js');
  return window.reactApp;
};

registerApplication(
  'react',
  () => import('./src/react/main.app.js'),
  () => location.pathname === "/vue"  ? false : true
);
registerApplication(
    'app2',
    loadReactApp,
    () => location.pathname === "/app2"  ? true : false,
    {data:{name:"Karthik"}}
  );

start();