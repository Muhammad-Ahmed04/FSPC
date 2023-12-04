import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


/** import all components */

import FspcStart from './components/screens/FspcStart/FspcStart'
import FspcSignup from './components/screens/FspcSignup/FspcSignup';
import Admin from './components/screens/Admin/Admin';
import Main  from './components/screens/Main/Main';
import ProfilePage from './components/screens/ProfilePage/ProfilePage';
import PageNotFound from './components/PageNotFound';
import FspcLogin from './components/screens/FspcLogin/FspcLogin';


/** auth middleware */
// import { AuthorizeUser, ProtectRoute } from './middleware/auth'
import PastPapers from './components/PastPapers/pastpaper';

/** root routes */
const router = createBrowserRouter([
    {
        path : '/',
        element : <FspcStart></FspcStart>
    },
    {
        path : '/login',
        element : <FspcLogin></FspcLogin>
    },

    {
        path : '/register',
        element : <FspcSignup></FspcSignup>
    },
    {
        path : '/home',
        element : <Main></Main>
    },
    // {
    //     path : '/password',
    //     element : <ProtectRoute><Password /></ProtectRoute>
    // },
    {
        path : '/profile/:userId',
        element : <ProfilePage></ProfilePage>
    },
    {
        path : '/Admin',
        element : <Admin></Admin>
    },
    // {
    //     path : '/recovery',
    //     element : <Recovery></Recovery>
    // },
    // {
    //     path : '/reset',
    //     element : <Reset></Reset>
    // },
    {
        path : '/pastpaper',
        element : <PastPapers></PastPapers>
    },
    {
        path : '*',
        element : <PageNotFound></PageNotFound>
    },
])

export default function App() {
  return (
    <main>
        <RouterProvider router={router}></RouterProvider>
    </main>
  )
}
