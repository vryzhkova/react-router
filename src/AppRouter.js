import { Routes, Route } from "react-router-dom";

import { User } from "./User/User";
import { TableUsers } from "./TableUsers/TableUsers";

import { MainPage } from "./pages/MainPage/MainPage";

export function AppRouter() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/table-users" element={<TableUsers />} />
        <Route path="/table-users/:userId" element={<User />} />
      </Routes>
    </>
  );
}
