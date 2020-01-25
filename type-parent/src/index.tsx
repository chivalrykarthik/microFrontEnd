import { registerApplication, start } from 'single-spa';
import reducer from './store';
import { createStore } from 'redux';



const runScript = async (url: string) => {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = url;
    script.onload = resolve;
    script.onerror = reject;

    const firstScript: any = document.getElementsByTagName('script')[0];
    firstScript.parentNode.insertBefore(script, firstScript);
  });
};

const loadReactApp = async () => {
  await runScript('http://localhost:8000/dist/main.js');

  return (window as any).reactApp;
};
const loadTypescriptApp = async () => {
  await runScript('http://localhost:5000/main.js');
  return (window as any).tsApp;
};

/*Redux store */
let store = createStore(reducer);
//store.dispatch({type:"SHOW"});
setTimeout(() => {
  store.dispatch({ type: "UPD", data: { name: "Visakan" } });
}, 5000)
/*Redux store */
const initSingleSpa = () => {
  registerApplication(
    'react',
    () => import('./main'),
    () => true,
    {
      data: {
        subscribeParent: store.subscribe,
        parentState: store.getState
      }

    }
  );

  registerApplication(
    'app2',
    loadReactApp,
    () => window.location.pathname === "/app2" ? true : false,
    {
      data: {
        subscribeParent: store.subscribe,
        parentState: store.getState
      }
    }
  );

  registerApplication(
    'app3',
    loadTypescriptApp,
    () => (window.location.pathname === "/app2" || window.location.pathname === "/") ? false : true,
    {
      data: {
        subscribeParent: store.subscribe,
        parentState: store.getState
      }
    }
  );

  start();
}
initSingleSpa();