import ReactDOM from 'react-dom/client'
import './index.css'
import {Client, Provider, cacheExchange, fetchExchange} from 'urql'
import { RouterProvider } from 'react-router-dom';
import router from './router.tsx';


const client = new Client({
  url: 'http://localhost:5000/',
  exchanges: [cacheExchange, fetchExchange],
  fetchOptions:{
    credentials:'include'
  }
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider value={client}>
    <RouterProvider router={router} />
  </Provider>,
)
