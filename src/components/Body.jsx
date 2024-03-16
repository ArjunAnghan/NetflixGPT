import React from 'react';

import { RouterProvider , createBrowserRouter} from 'react-router-dom';
import LogIn from './LogIn';
import Browse from './Browse';

function Body() {
    const appRouter = createBrowserRouter([
       {
        path: "/",
        element: <LogIn></LogIn>
       },
       {
        path: "/browse",
        element: <Browse></Browse>
       },
    ]);
  return (
   <div>
    <RouterProvider router={appRouter}></RouterProvider>
   </div>
   
  )
};

export default Body;