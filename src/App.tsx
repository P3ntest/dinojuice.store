import {
  Outlet,
  Route,
  Router,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { DinoKillingCalculator } from "./components/DinoKillingCalculator";
import { Hero, SecondHero } from "./components/Hero";
import { NavBar } from "./components/NavBar";
import { LoyaltyCard } from "./components/LoyalityCard";
import { LoginPage } from "./components/LoginPage";
import { CalculatorPage } from "./components/ClaculatorPage";

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
              <SecondHero />
            </div>
          }
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/calculator" element={<CalculatorPage />} />
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
