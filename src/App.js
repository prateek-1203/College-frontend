import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./Features/auth/components/Login";
import SignUp from "./Features/auth/components/SignUp";

const router=createBrowserRouter([
  {
    path:"/",
    element:<HomePage></HomePage>
  },
   {
     path:"/login",
     element:<Login></Login>
   },
   {
    path:"/signup",
    element:<SignUp></SignUp>
  }
])

function App() {
  return (
    <div className="App">
    <RouterProvider router={router}></RouterProvider>
  </div>
  );
}

export default App;
