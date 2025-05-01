
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUser, clearUser } from "./redux/userSlice";
import { createBrowserRouter, RouterProvider } from "react-router";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import PrivateLayout from "./layouts/PrivateLayout";
import PublicLayout from "./layouts/PublicLayout";
import Dashboard from "./pages/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PrivateLayout />, // Private layout for authenticated routes
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
    ],
  },
  {
    path: "/",
    element: <PublicLayout />, // Public layout for unauthenticated routes
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
