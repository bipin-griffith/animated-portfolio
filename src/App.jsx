import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root";
import About from "./components/about/about";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
