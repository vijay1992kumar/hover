import React from "react";
import { Outlet, Navigate } from "react-router";
import { useSelector } from "react-redux";
import Header from "../components/layout/Header";
import AppTheme from "../theme/AppTheme";
import { CssBaseline } from "@mui/material";
import Sidebar from "../components/layout/Sidebar";
import { drawerWidth } from "../utils/constants";

function PrivateLayout(props) {
  const user = useSelector((state) => state.user.user); // Check if user is logged in
  const drawer = useSelector((state) => state.app.drawer); 
  const {isOpen} = drawer; // Check if sidebar is open
  if (!user) {
    return <Navigate to="/login" replace />; // Redirect to login if not authenticated
  }

  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />
      {isOpen && <Sidebar />} {/* Sidebar component */}
      <Header />
      <main 
      style={{
        // width:`calc(100% - ${isOpen ? drawerWidth : 0}px)`,
        paddingLeft: isOpen ? drawerWidth : 0,
      }}
      >
        <Outlet /> {/* Renders child routes */}
      </main>
    </AppTheme>
  );
}

export default PrivateLayout;
