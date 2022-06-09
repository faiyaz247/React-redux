import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes as SwitchRoutes } from 'react-router-dom';

const CountHooks = lazy(() => import('./view/count/CountHooks'));
const CountWithClass = lazy(() => import('./view/count/CountWithClass'));
const EmployeeList = lazy(() => import('./view/employee/List'));
const AddEmployeeDetail = lazy(() => import('./view/employee/Add'));
const EditEmployeeDetail = lazy(() => import('./view/employee/Edit'));

const Routes = () => (
  <Router>
    <SwitchRoutes>
      <Route
        path="/"
        element={(
          <Suspense fallback={<p>Loading</p>}>
            <EmployeeList name="" />
          </Suspense>
  )}
      />
      <Route
        path="/hooks"
        element={(
          <Suspense fallback={<p>Loading</p>}>
            <CountHooks heading="" />
          </Suspense>
  )}
      />
      <Route
        path="/class"
        element={(
          <Suspense fallback={<p>Loading</p>}>
            <CountWithClass heading="" />
          </Suspense>
  )}
      />

      <Route
        exact
        path="employee/edit/:id"
        element={(
          <Suspense fallback={<p>Loading</p>}>
            <EditEmployeeDetail />
          </Suspense>
)}
      />
      <Route
        exact
        path="employee/add"
        element={(
          <Suspense fallback={<p>Loading</p>}>
            <AddEmployeeDetail />
          </Suspense>
)}
      />
    </SwitchRoutes>
  </Router>
);

export default Routes;
