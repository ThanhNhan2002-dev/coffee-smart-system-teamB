import React from 'react';
import { Route, Routes } from "react-router-dom";
import {Login} from "../src/components/user/Login";
import { Profile } from './components/user/Profile';

function App() {
  return (
    <>
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
