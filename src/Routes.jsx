import React, { lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes as SwitchRoutes,
} from "react-router-dom";

// Code spilling via lazy suspense
const Clock = lazy(() => import("./view/Clock/Clock"));

const Routes = () => (
  <Router>
    <SwitchRoutes>
      <Route
        exact
        path="/"
        element={
          <Suspense fallback={<p>Loading</p>}>
            <Clock />
          </Suspense>
        }
      />
    </SwitchRoutes>
  </Router>
);

export default Routes;
