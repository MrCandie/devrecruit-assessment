import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import ReusableSpinner from "./components/ReusableSpinner";
import { lazy, Suspense } from "react";

const Home = lazy(() => import("./screens/home/Home"));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route
        element={
          <Suspense fallback={<ReusableSpinner height="100vh" />}>
            <Home />
          </Suspense>
        }
        path="/"
      />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
