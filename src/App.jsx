import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root";
import About from "./components/about/about";
import ErrorPage from "./components/error/error";
import Layout from "./Layout";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/about",
    element: <About />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/contact",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Contact />,
      },
    ],
  },
  {
    path: "/services",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Services />,
      },
    ],
  },
  {
    path: "/portfolio",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Portfolio />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
