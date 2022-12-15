import "./App.css";
import { createBrowserRouter, createHashRouter, RouterProvider } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Movies from "./Components/Movies/Movies";
import Tv from "./Components/Tv/Tv";
import People from "./Components/People/People";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Offline from "offline";

import AuthContextProvider, {
  AuthContext,
} from "./Components/Context/AuthContext";

import jwtDecode from "jwt-decode";
import { useContext, useEffect } from "react";
import MediaContextProvider from "./Components/Context/MediaContext";
import MoivieDetails from "./Components/MovieDetails/MovieDetails";
import SearchContextProvider from "./Components/Context/SearchContext";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";
import MovieDetail from "./Components/MovieDetail/MovieDetail";

function App() {
  let router = createHashRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: (
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          ),
        },
        {
          path: "about",
          element: (
            <ProtectedRoute>
              <About />
            </ProtectedRoute>
          ),
        },
        {
          path: "movies",
          element: (
            <ProtectedRoute>
              <Movies />
            </ProtectedRoute>
          ),
        },
        {
          path: "tv",
          element: (
            <ProtectedRoute>
              <Tv />
            </ProtectedRoute>
          ),
        },
        {
          path: "people",
          element: (
            <ProtectedRoute>
              <People />
            </ProtectedRoute>
          ),
        },
        {
          path: "moviedetails/:id/:media_type",
          element: (
            <ProtectedRoute>
              <MoivieDetails />
            </ProtectedRoute>
          ),
        },
        {
          path: "moviedetail/:id/:media_type",
          element: (
            <ProtectedRoute>
              <MovieDetail/>
            </ProtectedRoute>
          ),
        },
        { path: "login", element: <Login saveUserData={saveUserData} /> },
        { path: "register", element: <Register /> },
        { path: "*", element: <Register /> },
      ],
    },
  ]);
  const { userData, setUserData } = useContext(AuthContext);

  function saveUserData() {
    let encodedToken = localStorage.getItem("user token");
    let decodedToken = jwtDecode(encodedToken);
    console.log(decodedToken);
    setUserData(decodedToken);
  }
  useEffect(() => {
    if (localStorage.getItem("user token") !== null) {
      saveUserData();
    }
  }, []);

  return (
    <>
      <Offline>
        <div className="offline">
          You Are Offline. Some functionality may be unavailable .
        </div>
      </Offline>

      <MediaContextProvider>
        <SearchContextProvider>
          <RouterProvider router={router} />
        </SearchContextProvider>
      </MediaContextProvider>
    </>
  );
}

export default App;
