import { RouterProvider, createBrowserRouter } from "react-router-dom";
import OptxLoginPage from "./components/OptxLoginPage/OptxLoginPage";
import OptxLandingPage from "./components/LandingPage/OptxLandingPage";
import Sample1 from "./components/LandingPage/Sample1";
import OptxContact from "./components/LandingPage/OptxContact";
import OptxTemplates from "./components/LandingPage/OptxTemplates";
import SamplePage1 from "./components/LandingPage/SamplePage1";
import SamplePage2 from "./components/LandingPage/SamplePage2";
import NestedPage1 from "./components/LandingPage/NestedPage1";
import NestedPage2 from "./components/LandingPage/NestedPage2";

export const AppRoutes = () => {
  const childRoutes = [
    {
      path: "/landing-page/templates",
      element: <OptxTemplates />,
    },
    {
      path: "/landing-page/home/sample1",
      element: <Sample1 />,
    },
    {
      path: "/landing-page/home/sample2/samplepage1",
      element: <SamplePage1 />,
    },
    {
      path: "/landing-page/home/sample2/samplepage2",
      element: <SamplePage2 />,
    },
    {
      path: "/landing-page/home/sample2/samplepage2/nestedpage1",
      element: <NestedPage1 />,
    },
    {
      path: "/landing-page/home/sample2/samplepage2/nestedpage2",
      element: <NestedPage2 />,
    },
    {
      path: "/landing-page/contact",
      element: <OptxContact />,
    },
  ];

  const router = createBrowserRouter([
    {
      path: "/",
      element: <OptxLoginPage />,
    },
    {
      path: "/landing-page",
      element: <OptxLandingPage />,
      children: childRoutes,
    },
    // {
    //     path: '*',
    //     element: //any unauthorized page,
    // },
  ]);

  return <RouterProvider router={router} />;
};
