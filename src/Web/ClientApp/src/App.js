import React, { Component } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { Layout } from "./components/Layout";
import "./custom.css";
import AppLayout from "./ui/AppLayout";
import { Home } from "./pages/Home";
import { Machines } from "./pages/Machines";
import { Students } from "./pages/Students";
import { Timings } from "./pages/Timings";
import { Settings } from "./pages/Settings";
import GlobalStyles from "./styles/GlobalStyles";

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <Layout>
         <GlobalStyles />
          <Routes>
            <Route element={<AppLayout />}>
              <Route index element={<Navigate replace to="dashboard" />} />
              <Route path="dashboard" element={<Home />} />
              <Route path="machines" element={<Machines />} />
              <Route path="students" element={<Students />} />
              <Route path="timings" element={<Timings />} />
              <Route path="settings" element={<Settings />} />
            </Route>
          </Routes>
      </Layout>
    );
  }
}
