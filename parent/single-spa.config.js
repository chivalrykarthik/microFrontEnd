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
const loadTypescriptApp = async () => {
  //await runScript('http://localhost:3000/static/js/bundle.js');
  //await runScript('http://localhost:4000/static/js/bundle.js');
  await runScript('https://cdnjs.cloudflare.com/ajax/libs/react/16.10.2/umd/react.development.js');
  await runScript('https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.10.2/umd/react-dom.development.js');
  
  
  await runScript('http://localhost:5000/main.js');
  //await runScript('http://localhost:4000/single-spa.config.js');
  
  //await runScript('http://localhost:4000/static/js/0.js');  
  //await runScript('http://localhost:4000/static/js/1.js');  
  //await runScript('http://localhost:4000/static/js/2.bundle.js');
  //await runScript('http://localhost:4000/static/js/main.chunk.js');
  
  return window.tsApp;
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
  
  registerApplication(
    'app3',
    loadTypescriptApp,
    () => location.pathname === "/app3"  ? true : false,
    {data:{name:"Karthik"}}
  );

start();