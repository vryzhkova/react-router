import { Routes, Route } from "react-router-dom";

import { User } from "./pages/User/User";
import { TableUsers } from "./pages/TableUsers/TableUsers";

import { MainPage } from "./pages/MainPage/MainPage";
import { PageNotFound } from "./pages/PageNotFound/PageNotFound";

export function AppRouter() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/table-users" element={<TableUsers />} />
        <Route path="/table-users/:userId" element={<User />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}
