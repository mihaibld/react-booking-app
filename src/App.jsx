import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Homepage from "./pages/Homepage"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Lessons from "./pages/Lessons"

function App(){
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
    path: "/lessons",
    element: <Lessons />,
  },
  ]);
  
  return (
    <RouterProvider router={router} />
  )
}

export default App

