import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import AddTodo from "./pages/AddTodo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "add",
    element: <AddTodo />,
  },
]);

export default function App() {
  return <RouterProvider router={router}></RouterProvider>;
}
