import React, { ReactNode } from "react";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <h3>{children}</h3>
    </div>
  );
};

export default RootLayout;
