import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import Statistics from './components/Statistics/Statistics';
import Jobs from './components/Jobs/Jobs';
import Blog from './components/Blog/Blog';
import JobDetails from './components/JobDetails/JobDetails';
import ErrorPage from './components/ErrorPage/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout></Layout>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('jobCategory.json')
      },
      {
        path: 'details/:detailsId',
        element: <JobDetails></JobDetails>,
        loader: () => fetch('/featuredJobs.json')
      },
      {
        path: 'statistics',
        element: <Statistics></Statistics>
      },
      {
        path: 'jobs',
        element: <Jobs></Jobs>,
        loader: () => fetch('/featuredJobs.json')
      },
      {
        path: 'blog',
        element: <Blog></Blog>
      },
      {
        path: '*',
        element: <ErrorPage></ErrorPage>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
