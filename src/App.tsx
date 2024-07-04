import {
  Outlet,
  Route,
  Router,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { DinoKillingCalculator } from "./components/DinoKillingCalculator";
import { Hero } from "./components/Hero";
import { NavBar } from "./components/NavBar";
import { LoyaltyCard } from "./components/LoyalityCard";
import { LoginPage } from "./components/LoginPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        element={
          <div>
            <NavBar />
            <Outlet />
          </div>
        }
      >
        <Route
          path="/"
          element={
            <div>
              <Hero />
              <DinoKillingCalculator />
            </div>
          }
        />
        <Route path="/login" element={<LoginPage />} />
      </Route>
    </>
  )
);

export function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
