import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import AddTodo from "./pages/AddTodo";
import useLocalStorage from "use-local-storage";
import { TodoContext } from "./contexts/TodoContext";

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
  const [todos, setTodos] = useLocalStorage("todos", []);

  return (
    <TodoContext.Provider value={{ todos, setTodos }}>
      <RouterProvider router={router} />
    </TodoContext.Provider>
  );
}
