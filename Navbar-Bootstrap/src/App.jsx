import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./routes/MainLayout";
import About from "./component/About";
import Service from "./component/Service";
import ErrorPage from "./component/ErrorPage";
import ModernLoader from "./component/Loading";
import { lazy, Suspense } from "react";

const Home = lazy(() => import("./component/Home"));
const Product = lazy(() => import("./component/Product"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "service", element: <Service /> },
      { path: "product/:id", element: <Product /> },
    ],
  },
]);

export default function App() {
  return (
    <Suspense fallback={<ModernLoader />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}
