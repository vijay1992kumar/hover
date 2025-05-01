import React from "react";
import { Outlet } from "react-router";

function PublicLayout() {
  return (
    <div>
      <main>
        <Outlet /> {/* Renders child routes */}
      </main>
    </div>
  );
}

export default PublicLayout;