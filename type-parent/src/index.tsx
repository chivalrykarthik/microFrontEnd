import { registerApplication, start } from 'single-spa'

const runScript = async (url:string) => {
  return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = url;
      script.onload = resolve;
      script.onerror = reject;

      const firstScript:any = document.getElementsByTagName('script')[0];
      firstScript.parentNode.insertBefore(script, firstScript);
  });
};

const loadReactApp = async () => {
  await runScript('http://localhost:8000/dist/main.js');
  
  return (window as any).reactApp;
};
const loadTypescriptApp = async () => {  
 // await runScript('https://cdnjs.cloudflare.com/ajax/libs/react/16.10.2/umd/react.development.js');
  //await runScript('https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.10.2/umd/react-dom.development.js');
  
  
  await runScript('http://localhost:5000/main.js');
  return (window as any).tsApp;
};

registerApplication(
  'react',
  () => import('./main'),
  () => true
);

registerApplication(
    'app2',
    loadReactApp,
    () => window.location.pathname === "/app2"  ? true : false,
    {data:{name:"Karthik"}}
  );
  
  registerApplication(
    'app3',
    loadTypescriptApp,
    () => (window.location.pathname === "/app2" || window.location.pathname === "/")  ? false : true,
    {data:{name:"Karthik"}}
  );

start();