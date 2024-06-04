import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LoginPage from "./components/LoginPage/LoginPage";
import LandingPage from "./components/LandingPage/LandingPage";
import Members from "./components/LandingPage/Members";
import Products from "./components/LandingPage/Products";
import Contact from "./components/LandingPage/Contact";
import Templates from "./components/LandingPage/Templates";

export const AppRoutes = () => {
  const childRoutes = [
    {
      path: "/landing-page/templates",
      element: <Templates />,
    },
    {
      path: "/landing-page/home/members",
      element: <Members />,
    },
    {
      path: "/landing-page/home/products",
      element: <Products />,
    },
    {
      path: "/landing-page/contact",
      element: <Contact />,
    },
  ];

  const router = createBrowserRouter([
    {
      path: "/",
      element: <LoginPage />,
    },
    {
      path: "/landing-page",
      element: <LandingPage />,
      children: childRoutes,
    },
    // {
    //     path: '*',
    //     element: //any unauthorized page,
    // },
  ]);

  return <RouterProvider router={router} />;
};
