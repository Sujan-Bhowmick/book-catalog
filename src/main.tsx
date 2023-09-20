import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import routes from './routes'
import {RouterProvider} from "react-router-dom"
import { Provider } from 'react-redux'
import { store } from './redux/store'

// import { QueryClient, QueryClientProvider } from 'react-query';

// const queryClient = new QueryClient({
//   defaultOptions: {
//     queries: {
//       // Configure query options here if needed
//     },
//   },
// });

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
  {/* <QueryClientProvider client={queryClient}> */}
    <Provider store={store}>
    <RouterProvider router= {routes} />
    </Provider>
    {/* </QueryClientProvider> */}
  </React.StrictMode>,
)
