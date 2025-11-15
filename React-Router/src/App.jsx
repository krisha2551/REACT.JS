import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./component/Home";
import MainLayout from "../routes/MainLayout";
import About from "./component/About";
import Service from "./component/Service";
import Product from "./component/Product";
import ErrorPage from "./component/ErrorPage";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "service",
          element: <Service />,
        },
        {
          path: "product/:id",
          element: <Product />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
