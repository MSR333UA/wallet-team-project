import { Route, Routes, Navigate } from 'react-router-dom';

import { DashboardPage } from 'pages/DashboardPage/DashboardPage';

import { routes } from 'service/routes';
import { StatisticPage } from 'pages/StatisticPage/StatisticPage';
import { CurrencyPage } from 'pages/CurrencyPage/CurrencyPage';
import { RegisterPage } from 'pages/RegisterPage/RegisterPage';
import { LoginPage } from 'pages/LoginPage/LoginPage';
import { Layout } from 'Layout/Layout';
import { Patron } from './Patron/Patron';

export const App = () => {
  return (
    <Routes>
      <Route path={routes.LOGIN} element={<LoginPage />} />
      <Route path={routes.REGISTER} element={<RegisterPage />} />
      <Route path={routes.HOME} element={<Layout />}>
        <Route index element={<DashboardPage />} />
        <Route path={routes.DIAGRAM} element={<StatisticPage />} />
        <Route path={routes.CURRENCY} element={<CurrencyPage />} />
        <Route path="*" element={<Navigate to={routes.HOME} />} />
      </Route>
    </Routes>
  );
};
//   HOME: '/', //dashboardPage
//   REGISTER: '/register',
//   LOGIN: '/login',
//   DIAGRAM: '/diagram', //SummeryPage
//   CURRENCY: '/currency', //
// };
