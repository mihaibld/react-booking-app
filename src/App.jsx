import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Homepage from "./pages/Homepage"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Courses from "./pages/Courses"

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
    path: "/contact",
    element: <Contact />,
    },
    {
    path: "/courses",
    element: <Courses />,
  },
  ]);
  
  return (
    <RouterProvider router={router} />
  )
}

export default App

