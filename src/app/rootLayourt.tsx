"user client";

import React from "react";
import { ReduxProviders } from "@/redux/reduxProvider";

function BasicLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: any;
}) {
  return (
    <div>
      <ReduxProviders>{children}</ReduxProviders>
    </div>
  );
}

export default BasicLayout;
