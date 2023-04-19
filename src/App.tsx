import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomeAdmin from "./admin/home";

import Updateitemm from "./admin/update";
import LayoutUser from "./layout/user";
import Homepage from "./clients/homepage";
import Signup from "./page/signup";
import Signin from "./page/signin";
import LayoutAdmin from "./layout/admin";
import Add from "./admin/add";
import Update from "./admin/update";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutUser />}>
          <Route index element={<Homepage />} />
        </Route>
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/admin" element={<LayoutAdmin />}>
          <Route index element={<HomeAdmin />} />
          <Route path="add" element={<Add />} />
          <Route path="products/:id" element={<Update />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
